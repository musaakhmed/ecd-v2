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
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'
import { safeContentfulId } from './_ids'
import { richTextFromText } from './_richText'

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
  const entryId = safeContentfulId('sectionBlock', internalName)

  const imageAsset = imagePath
    ? await upsertAssetFromPublicPath({
        cma,
        publicPath: imagePath,
        title: imageAlt ?? title ?? internalName,
        locale,
      })
    : null

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'sectionBlock',
    fields: {
      internalName: { [locale]: internalName },
      title: title ? { [locale]: title } : undefined,
      body: body ? { [locale]: richTextFromText(body) } : undefined,
      image: imageAsset ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: imageAsset.sys.id } } } : undefined,
      items: items?.length ? { [locale]: items } : undefined,
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'sectionBlock', entryId }, { fields })
  }
  if (!entry.sys?.publishedVersion) entry = await cma.entry.publish({ entryId }, entry)
  return entry
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
  const entryId = safeContentfulId('page', slug)

  const heroAsset = heroImagePath
    ? await upsertAssetFromPublicPath({ cma, publicPath: heroImagePath, title: heroImageAlt ?? title, locale })
    : null

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'page',
    fields: {
      slug: { [locale]: slug },
      title: { [locale]: title },
      heroSubtitle: heroSubtitle ? { [locale]: heroSubtitle } : undefined,
      heroDescription: heroDescription ? { [locale]: heroDescription } : undefined,
      heroImage: heroAsset ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: heroAsset.sys.id } } } : undefined,
      sections: {
        [locale]: sectionBlocks.map((b) => ({ sys: { type: 'Link', linkType: 'Entry', id: b.sys.id } })),
      },
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'page', entryId }, { fields })
  }
  if (!entry.sys?.publishedVersion) entry = await cma.entry.publish({ entryId }, entry)
  return entry
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

