import type { EntryProps, PlainClientAPI } from 'contentful-management'
import {
  inclusionNumeriqueLanding,
  emploiNumeriquePage,
  alphaFleNumeriquePage,
  jeunesConnectesPage,
  seniorsDigitalPage,
} from '../../src/lib/content/pages/inclusionNumeriqueData'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage as upsertGenericPage, upsertSectionBlock as upsertGenericSectionBlock } from './_pageBuilder'

async function upsertSectionBlock(args: {
  cma: PlainClientAPI
  locale: string
  internalName: string
  title?: string
  body?: string
  imagePath?: string
  imageAlt?: string
  items?: string[]
}) {
  const { cma, locale, internalName, title, body, imagePath, imageAlt, items } = args
  // Backwards-compat wrapper (kept local signatures, delegates to shared builder).
  return await upsertGenericSectionBlock({
    cma,
    locale,
    internalName,
    title,
    body,
    imagePath,
    imageAlt,
    items,
  })
}

async function upsertPage(args: {
  cma: PlainClientAPI
  locale: string
  slug: string
  title: string
  heroSubtitle?: string
  heroDescription?: string
  heroImagePath?: string
  heroImageAlt?: string
  sectionBlocks: EntryProps[]
}) {
  const { cma, locale, slug, title, heroSubtitle, heroDescription, heroImagePath, heroImageAlt, sectionBlocks } = args
  return await upsertGenericPage({
    cma,
    locale,
    slug,
    title,
    heroSubtitle,
    heroDescription,
    heroImagePath,
    heroImageAlt,
    sectionBlocks,
  })
}

export async function migrateInclusionNumeriquePages() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  // Landing
  const landingBlocks: EntryProps[] = []
  landingBlocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: 'inclusionNumerique_intro',
      title: inclusionNumeriqueLanding.intro.title,
      body: inclusionNumeriqueLanding.intro.paragraphs.join('\n\n'),
    }),
  )
  landingBlocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: 'inclusionNumerique_lieux',
      title: inclusionNumeriqueLanding.lieuxSection.title,
      body: inclusionNumeriqueLanding.lieuxSection.intro,
      items: inclusionNumeriqueLanding.lieuxIntervention,
    }),
  )

  await upsertPage({
    cma,
    locale,
    slug: 'inclusion-numerique',
    title: inclusionNumeriqueLanding.hero.title,
    heroSubtitle: inclusionNumeriqueLanding.hero.subtitle,
    heroDescription: inclusionNumeriqueLanding.hero.description,
    heroImagePath: inclusionNumeriqueLanding.hero.imageSrc,
    heroImageAlt: inclusionNumeriqueLanding.hero.imageAlt,
    sectionBlocks: landingBlocks,
  })

  // Subpages (store under full path slugs)
  const pages = [
    { slug: 'inclusion-numerique/emploi-numerique', data: emploiNumeriquePage },
    { slug: 'inclusion-numerique/alpha-fle-numerique', data: alphaFleNumeriquePage },
    { slug: 'inclusion-numerique/jeunes-connectes', data: jeunesConnectesPage },
    { slug: 'inclusion-numerique/seniors-digital', data: seniorsDigitalPage },
  ] as const

  for (const p of pages) {
    const blocks: EntryProps[] = []

    // Generic “dump” block (keeps everything editable even if we later refine mapping)
    blocks.push(
      await upsertSectionBlock({
        cma,
        locale,
        internalName: `${p.slug}_jsonDump`,
        title: 'Contenu',
        body: JSON.stringify(p.data, null, 2),
      }),
    )

    await upsertPage({
      cma,
      locale,
      slug: p.slug,
      title: p.data.hero.title,
      heroSubtitle: p.data.hero.subtitle,
      heroDescription: p.data.hero.description,
      heroImagePath: p.data.hero.imageSrc,
      heroImageAlt: p.data.hero.imageAlt,
      sectionBlocks: blocks,
    })
  }
}

