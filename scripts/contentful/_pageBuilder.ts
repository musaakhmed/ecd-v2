import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'
import { safeContentfulId } from './_ids'
import { richTextFromText } from './_richText'
import { publishEntryIfNeeded, updateEntryWithVersion } from './_publish'

export async function upsertSectionBlock(args: {
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
    ? await upsertAssetFromPublicPath({ cma, publicPath: imagePath, title: imageAlt ?? title ?? internalName, locale })
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
    requiredFieldIds: ['internalName'],
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

export async function upsertPage(args: {
  cma: PlainClientAPI
  locale: string
  slug: string
  title: string
  heroEyebrow?: string
  heroSubtitle?: string
  heroDescription?: string
  heroImagePath?: string
  heroImageAlt?: string
  sectionBlocks: EntryProps[]
}) {
  const { cma, locale, slug, title, heroEyebrow, heroSubtitle, heroDescription, heroImagePath, heroImageAlt, sectionBlocks } =
    args
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
      heroEyebrow: heroEyebrow ? { [locale]: heroEyebrow } : undefined,
      heroSubtitle: heroSubtitle ? { [locale]: heroSubtitle } : undefined,
      heroDescription: heroDescription ? { [locale]: heroDescription } : undefined,
      heroImage: heroAsset ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: heroAsset.sys.id } } } : undefined,
      sections: { [locale]: sectionBlocks.map((b) => ({ sys: { type: 'Link', linkType: 'Entry', id: b.sys.id } })) },
    },
    requiredFieldIds: ['slug', 'title'],
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

