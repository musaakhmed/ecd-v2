import type { PlainClientAPI } from 'contentful-management'

const fieldIdCache = new Map<string, Set<string>>()

export async function getContentTypeFieldIds(cma: PlainClientAPI, contentTypeId: string): Promise<Set<string>> {
  const cached = fieldIdCache.get(contentTypeId)
  if (cached) return cached

  const ct = await cma.contentType.get({ contentTypeId })
  const ids = new Set<string>((ct.fields ?? []).map((f: any) => f.id).filter(Boolean))
  fieldIdCache.set(contentTypeId, ids)
  return ids
}

export async function filterFieldsByContentType(args: {
  cma: PlainClientAPI
  contentTypeId: string
  fields: Record<string, unknown>
}): Promise<{ fields: Record<string, unknown>; dropped: string[] }> {
  const { cma, contentTypeId, fields } = args
  const allowed = await getContentTypeFieldIds(cma, contentTypeId)
  const next: Record<string, unknown> = {}
  const dropped: string[] = []

  for (const [key, value] of Object.entries(fields)) {
    if (!allowed.has(key)) {
      dropped.push(key)
      continue
    }
    next[key] = value
  }

  return { fields: next, dropped }
}

