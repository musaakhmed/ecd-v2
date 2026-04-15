import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { eddPageContent, eddSectionMeta, eddSections } from '../../src/lib/content/pages/ecole-devoirs-content'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertAssetFromPublicPath } from './_assets'
import { filterFieldsByContentType } from './_contentTypes'
import { safeContentfulId } from './_ids'

async function upsertEddSection(args: {
  env: PlainClientAPI
  locale: string
  slug: string
  title: string
  menuTitle: string
  shortDescription: string
  imagePath?: string
  imageAlt?: string
  introParagraphs?: string[]
}) {
  const { env, locale, slug, title, menuTitle, shortDescription, imagePath, imageAlt, introParagraphs } = args
  const id = safeContentfulId('eddSection', slug)

  const imageAsset = imagePath
    ? await upsertAssetFromPublicPath({
        cma: env,
        publicPath: imagePath,
        title: imageAlt || title,
        locale,
      })
    : null

  let entry: EntryProps
  try {
    entry = await env.entry.get({ entryId: id })
  } catch {
    const { fields } = await filterFieldsByContentType({
      cma: env,
      contentTypeId: 'eddSection',
      fields: {
        slug: { [locale]: slug },
        title: { [locale]: title },
        menuTitle: { [locale]: menuTitle },
        shortDescription: { [locale]: shortDescription },
        // Some models define `intro` as a single Text field, others as a list.
        // We store as a single text blob (paragraphs separated by blank lines).
        intro: { [locale]: (introParagraphs ?? []).join('\n\n') },
        image: imageAsset
          ? {
              [locale]: { sys: { type: 'Link', linkType: 'Asset', id: imageAsset.sys.id } },
            }
          : undefined,
      },
    })
    entry = await env.entry.createWithId(
      { contentTypeId: 'eddSection', entryId: id },
      {
        fields,
      },
    )
  }

  if (!entry.sys?.publishedVersion) entry = await env.entry.publish({ entryId: id }, entry)
  return entry
}

export async function migrateEcoleDevoirs() {
  const mgmtEnv = getContentfulManagementEnv()
  const env = getCmaClient()

  for (const s of eddSections) {
    const meta = eddSectionMeta[s.slug]

    // The existing code has multiple per-slug shapes; we only migrate the “intro” paragraphs for now.
    // The rich “items/objectifs” structures can be moved to `sectionBlock` later.
    const introParagraphs: string[] | undefined =
      s.slug === 'petite-histoire'
        ? eddPageContent.petiteHistoire
        : s.slug === 'cafe-parents'
          ? eddPageContent.cafeParents
          : s.slug === 'partenaires'
            ? eddPageContent.partenaires
            : s.slug === 'public-cible'
              ? eddPageContent.publicCible
              : undefined

    await upsertEddSection({
      env,
      locale: mgmtEnv.locale,
      slug: s.slug,
      title: s.title,
      menuTitle: s.menuTitle,
      shortDescription: meta?.shortDescription ?? '',
      imagePath: meta?.image,
      imageAlt: meta?.imageAlt,
      introParagraphs,
    })
  }
}

