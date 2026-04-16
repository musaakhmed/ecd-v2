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
  requiredFieldIds?: string[]
}): Promise<{ fields: Record<string, unknown>; dropped: string[] }> {
  const { cma, contentTypeId, fields, requiredFieldIds } = args
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

  if (requiredFieldIds?.length) {
    const missing = requiredFieldIds.filter((id) => !Object.prototype.hasOwnProperty.call(next, id))
    if (missing.length) {
      throw new Error(
        `Contentful content type '${contentTypeId}' is missing required field IDs: ${missing.join(
          ', ',
        )}. Dropped fields: ${dropped.join(', ')}`,
      )
    }
  }

  if (dropped.length) {
    // eslint-disable-next-line no-console
    console.warn(`[contentful:migrate] Dropped fields for '${contentTypeId}': ${dropped.join(', ')}`)
  }

  return { fields: next, dropped }
}

