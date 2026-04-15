import type { PlainClientAPI } from 'contentful-management'

export async function findEntryIdBySlug(args: {
  cma: PlainClientAPI
  contentTypeId: string
  slug: string
  locale: string
}): Promise<string | null> {
  const { cma, contentTypeId, slug, locale } = args
  const baseQuery: any = {
    content_type: contentTypeId,
    'fields.slug': slug,
    limit: 5,
  }

  const normalizeLegacyId = (s: string) =>
    `${contentTypeId}_${s.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '')}`

  // Try locale-scoped first.
  const res1 = await cma.entry.getMany({ query: { ...baseQuery, locale } })
  const items1: any[] = (res1 as any)?.items ?? []
  const legacyId1 = items1.find((i) => i?.sys?.id === normalizeLegacyId(slug))
  if (legacyId1?.sys?.id) return legacyId1.sys.id
  if (items1[0]?.sys?.id) return items1[0].sys.id

  // Fallback: no locale scoping (some spaces use non-localized slug).
  const res2 = await cma.entry.getMany({ query: baseQuery })
  const items2: any[] = (res2 as any)?.items ?? []
  const legacyId2 = items2.find((i) => i?.sys?.id === normalizeLegacyId(slug))
  if (legacyId2?.sys?.id) return legacyId2.sys.id
  return items2[0]?.sys?.id ?? null
}

