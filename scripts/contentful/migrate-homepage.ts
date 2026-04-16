import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { homepageHeroSlides, homepageImpactStats, homepageProgramCards } from '../../src/lib/data/homepage/homepageData'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'
import { safeContentfulId } from './_ids'
import { richTextFromText } from './_richText'
import { publishEntryIfNeeded, updateEntryWithVersion } from './_publish'

async function upsertSectionBlock(args: {
  cma: PlainClientAPI
  locale: string
  internalName: string
  title?: string
  body?: string
  items?: string[]
  imagePath?: string
  imageAlt?: string
}) {
  const { cma, locale, internalName, title, body, items, imagePath, imageAlt } = args
  const entryId = safeContentfulId('sectionBlock', internalName)

  const imageAsset = imagePath
    ? await upsertAssetFromPublicPath({ cma, publicPath: imagePath, title: imageAlt ?? title ?? internalName, locale })
    : null

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'sectionBlock',
    fields: {
      internalName: { [locale]: internalName },
      title: title ? { [locale]: title } : undefined,
      body: body ? { [locale]: richTextFromText(body) } : undefined,
      items: items?.length ? { [locale]: items } : undefined,
      image: imageAsset ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: imageAsset.sys.id } } } : undefined,
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma, entryId, entry })
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'sectionBlock', entryId }, { fields })
  }
  entry = await publishEntryIfNeeded({ cma, entryId, entry })
  return entry
}

async function upsertHomePage(args: { cma: PlainClientAPI; locale: string; blocks: EntryProps[] }) {
  const { cma, locale, blocks } = args
  const entryId = safeContentfulId('page', 'home')

  const heroImageAsset = await upsertAssetFromPublicPath({
    cma,
    publicPath: homepageHeroSlides[0]?.image ?? '/assets/hero/edd.webp',
    title: homepageHeroSlides[0]?.title ?? 'Accueil',
    locale,
  })

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'page',
    fields: {
      slug: { [locale]: 'home' },
      title: { [locale]: 'Accueil' },
      heroSubtitle: { [locale]: homepageHeroSlides[0]?.subtitle ?? '' },
      heroDescription: { [locale]: homepageHeroSlides[0]?.description ?? '' },
      heroImage: heroImageAsset
        ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: heroImageAsset.sys.id } } }
        : undefined,
      sections: { [locale]: blocks.map((b) => ({ sys: { type: 'Link', linkType: 'Entry', id: b.sys.id } })) },
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma, entryId, entry })
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'page', entryId }, { fields })
  }
  entry = await publishEntryIfNeeded({ cma, entryId, entry })
  return entry
}

export async function migrateHomepage() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const blocks: EntryProps[] = []

  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: 'homepage_heroSlides',
      title: 'Slides',
      body: JSON.stringify(homepageHeroSlides, null, 2),
    }),
  )

  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: 'homepage_programCards',
      title: 'Programmes',
      body: JSON.stringify(homepageProgramCards, null, 2),
    }),
  )

  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: 'homepage_stats',
      title: 'Statistiques',
      body: JSON.stringify(homepageImpactStats, null, 2),
    }),
  )

  await upsertHomePage({ cma, locale, blocks })
}

