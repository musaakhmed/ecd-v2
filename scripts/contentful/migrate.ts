/* eslint-disable no-console */
import 'dotenv/config'
import { createClient } from 'contentful-management'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { catalogueModules } from '../../src/lib/data/titres-services/titresServices'
import { eddSections, eddSectionMeta } from '../../src/lib/ecole-devoirs-content'
import { eddPageContent } from '../../src/lib/content/pages/ecole-devoirs-content'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

async function getManagementEnvironment() {
  const managementClient = createClient({
    accessToken: getRequiredEnv('CONTENTFUL_MANAGEMENT_TOKEN'),
  })

  const space = await managementClient.getSpace(getRequiredEnv('CONTENTFUL_SPACE_ID'))
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT ?? 'master'
  return space.getEnvironment(environmentId)
}

async function upsertEddSections() {
  const env = await getManagementEnvironment()

  for (const section of eddSections) {
    const meta = eddSectionMeta[section.slug]
    const contentKey = section.slug
      .replace('petite-histoire', 'petiteHistoire')
      .replace('projet-pedagogique', 'projetPedagogique')
      .replace('activites-et-programmes', 'activites')
      .replace('cafe-parents', 'cafeParents')
      .replace('public-cible', 'publicCible')

    const rawContent = (eddPageContent as any)[contentKey]

    const bodyIntro: string[] = Array.isArray(rawContent?.intro) ? rawContent.intro : []
    const bodyItems =
      Array.isArray(rawContent?.objectifs) && rawContent.objectifs.length
        ? rawContent.objectifs.map((o: { title?: string; description?: string }) => ({
            title: o.title ?? '',
            description: o.description ?? '',
          }))
        : undefined

    const entryId = `edd-${section.slug}`

    let entry
    try {
      entry = await env.getEntry(entryId)
    } catch {
      entry = await env.createEntryWithId('eddSection', entryId, {
        fields: {},
      })
    }

    entry.fields.slug = { 'en-US': section.slug }
    entry.fields.title = { 'en-US': section.title }
    entry.fields.menuTitle = { 'en-US': section.menuTitle }
    entry.fields.shortDescription = { 'en-US': meta?.shortDescription ?? '' }
    if (meta?.image) {
      entry.fields.imageUrl = { 'en-US': meta.image }
      entry.fields.imageAlt = { 'en-US': meta.imageAlt }
    }
    if (bodyIntro.length) {
      entry.fields.bodyIntro = { 'en-US': bodyIntro }
    }
    if (bodyItems) {
      entry.fields.bodyItems = { 'en-US': bodyItems }
    }

    const updated = await entry.update()
    await updated.publish()

    console.log(`Upserted EddSection: ${section.slug}`)
  }
}

async function upsertTitresServiceModules() {
  const env = await getManagementEnvironment()

  for (const module_ of catalogueModules) {
    const entryId = `ts-${module_.slug}`

    let entry
    try {
      entry = await env.getEntry(entryId)
    } catch {
      entry = await env.createEntryWithId('titresServiceModule', entryId, {
        fields: {},
      })
    }

    entry.fields.slug = { 'en-US': module_.slug }
    entry.fields.titre = { 'en-US': module_.titre }
    if (module_.titreCourt) {
      entry.fields.titreCourt = { 'en-US': module_.titreCourt }
    }
    entry.fields.description = { 'en-US': module_.description }
    entry.fields.descriptionCourte = { 'en-US': module_.descriptionCourte }
    if (module_.objectifsIntro) {
      entry.fields.objectifsIntro = { 'en-US': module_.objectifsIntro }
    }
    entry.fields.objectifs = { 'en-US': module_.objectifs }
    entry.fields.modalitesPedagogie = { 'en-US': module_.modalitesPédagogie }
    entry.fields.evaluationSuivi = { 'en-US': module_.evaluationSuivi }
    entry.fields.supportsLogistiques = { 'en-US': module_.supportsLogistiques }
    entry.fields.publicVise = { 'en-US': module_.publicVise }
    entry.fields.approbation = {
      'en-US': module_.approbation.map((a) => ({
        region: a.region,
        certificate: a.certificate,
        date: a.date,
      })),
    }
    entry.fields.duree = { 'en-US': module_.duree }
    entry.fields.category = { 'en-US': module_.category }
    entry.fields.imageUrl = { 'en-US': module_.imageSrc }
    entry.fields.imageAlt = { 'en-US': module_.imageAlt }
    if (module_.isPlaceholder) {
      entry.fields.isPlaceholder = { 'en-US': true }
    }

    const updated = await entry.update()
    await updated.publish()

    console.log(`Upserted TitresServiceModule: ${module_.slug}`)
  }
}

async function main() {
  try {
    await upsertEddSections()
    await upsertTitresServiceModules()
    console.log('Contentful migration completed.')
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
}

void main()

