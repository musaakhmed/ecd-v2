import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { catalogueModules } from '../../src/lib/data/titres-services/titresServices'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertAssetFromPublicPath } from './_assets'
import { filterFieldsByContentType } from './_contentTypes'
import { normalizeSymbolList } from './_strings'
import { safeContentfulId } from './_ids'
import { findEntryIdBySlug } from './_entries'

type ApprobationKey = string

function approbationKey(a: { region: string; certificate: string; date?: string }): ApprobationKey {
  return `${a.region}__${a.certificate}__${a.date ?? ''}`
}

async function upsertApprobation(env: PlainClientAPI, locale: string, a: { region: string; certificate: string; date?: string }) {
  const id = safeContentfulId('approbation', approbationKey(a))
  let entry: EntryProps
  try {
    entry = await env.entry.get({ entryId: id })
  } catch {
    const { fields } = await filterFieldsByContentType({
      cma: env,
      contentTypeId: 'approbation',
      fields: {
        region: { [locale]: a.region },
        certificate: { [locale]: a.certificate },
        date: { [locale]: a.date ?? '' },
      },
    })
    entry = await env.entry.createWithId(
      { contentTypeId: 'approbation', entryId: id },
      {
        fields,
      },
    )
  }
  if (!entry.sys?.publishedVersion) entry = await env.entry.publish({ entryId: id }, entry)
  return entry
}

async function upsertTitresServiceModule(args: {
  env: PlainClientAPI
  locale: string
  m: (typeof catalogueModules)[number]
  approbationsByKey: Map<ApprobationKey, EntryProps>
}) {
  const { env, locale, m, approbationsByKey } = args
  const existingId = await findEntryIdBySlug({
    cma: env,
    contentTypeId: 'titresServiceModule',
    slug: m.slug,
    locale,
  })
  const id = existingId ?? safeContentfulId('titresServiceModule', m.slug)

  const imageAsset = await upsertAssetFromPublicPath({
    cma: env,
    publicPath: m.imageSrc,
    title: m.imageAlt || m.titre,
    locale,
  })

  const approbationLinks =
    m.approbation?.map((a) => {
      const key = approbationKey(a)
      const entry = approbationsByKey.get(key)
      if (!entry) return null
      return {
        sys: { type: 'Link', linkType: 'Entry', id: entry.sys.id },
      }
    }) ?? []

  const normalizedApprobationLinks = approbationLinks.filter(Boolean)
  if (normalizedApprobationLinks.length === 0) {
    const fallback = approbationsByKey.get(approbationKey({ region: 'N/A', certificate: 'N/A', date: '' }))
    if (fallback) {
      normalizedApprobationLinks.push({
        sys: { type: 'Link', linkType: 'Entry', id: fallback.sys.id },
      })
    }
  }

  const { fields: desiredFields } = await filterFieldsByContentType({
    cma: env,
    contentTypeId: 'titresServiceModule',
    fields: {
      slug: { [locale]: m.slug },
      titre: { [locale]: m.titre },
      titreCourt: { [locale]: m.titreCourt ?? '' },
      description: { [locale]: m.description },
      descriptionCourte: { [locale]: m.descriptionCourte },
      objectifsIntro: { [locale]: m.objectifsIntro ?? '' },
      objectifs: { [locale]: normalizeSymbolList(m.objectifs) },
      modalitesPedagogie: { [locale]: m.modalitesPédagogie },
      evaluationSuivi: { [locale]: m.evaluationSuivi },
      supportsLogistiques: { [locale]: m.supportsLogistiques },
      publicVise: { [locale]: m.publicVise },
      // Common field-id typo seen in some Contentful setups
      publiceVise: { [locale]: m.publicVise },
      approbation: { [locale]: normalizedApprobationLinks },
      duree: { [locale]: m.duree },
      category: { [locale]: m.category },
      image: imageAsset
        ? {
            [locale]: { sys: { type: 'Link', linkType: 'Asset', id: imageAsset.sys.id } },
          }
        : undefined,
      isPlaceholder: { [locale]: Boolean(m.isPlaceholder) },
    },
  })

  let entry: EntryProps
  try {
    entry = await env.entry.get({ entryId: id })
    entry.fields = { ...(entry.fields as any), ...(desiredFields as any) }
    entry = await env.entry.update({ entryId: id }, entry)
  } catch {
    entry = await env.entry.createWithId(
      { contentTypeId: 'titresServiceModule', entryId: id },
      {
        fields: desiredFields,
      },
    )
  }

  if (!entry.sys?.publishedVersion) entry = await env.entry.publish({ entryId: id }, entry)
  return entry
}

export async function migrateTitresService() {
  const mgmtEnv = getContentfulManagementEnv()
  const env = getCmaClient()

  // 1) Approvals
  const approbationsByKey = new Map<ApprobationKey, EntryProps>()
  for (const m of catalogueModules) {
    for (const a of m.approbation ?? []) {
      const key = approbationKey(a)
      if (approbationsByKey.has(key)) continue
      const entry = await upsertApprobation(env, mgmtEnv.locale, a)
      approbationsByKey.set(key, entry)
    }
  }

  // Some Contentful setups mark `approbation` as required (non-empty).
  // Provide a default fallback entry to allow publishing modules without approbations.
  const fallbackApproval = await upsertApprobation(env, mgmtEnv.locale, {
    region: 'N/A',
    certificate: 'N/A',
    date: '',
  })
  approbationsByKey.set(approbationKey({ region: 'N/A', certificate: 'N/A', date: '' }), fallbackApproval)

  // 2) Modules
  for (const m of catalogueModules) {
    await upsertTitresServiceModule({ env, locale: mgmtEnv.locale, m, approbationsByKey })
  }
}

