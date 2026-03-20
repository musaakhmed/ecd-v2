import type { TitresServiceModuleEntry } from '../types'
import { getDeliveryClient, getPreviewClient } from '../client'

type GetTitresServiceModuleBySlugOptions = {
  preview?: boolean
}

export async function getTitresServiceModuleBySlug(
  slug: string,
  options: GetTitresServiceModuleBySlugOptions = {},
): Promise<TitresServiceModuleEntry | null> {
  const client = options.preview ? getPreviewClient() : getDeliveryClient()

  const response = await client.getEntries({
    content_type: 'titresServiceModule',
    'fields.slug': slug,
    limit: 1,
  })

  const item = response.items[0]
  return (item as unknown as TitresServiceModuleEntry | undefined) ?? null
}

export async function getAllTitresServiceSlugs(options: GetTitresServiceModuleBySlugOptions = {}): Promise<string[]> {
  const client = options.preview ? getPreviewClient() : getDeliveryClient()

  const response = await client.getEntries({
    content_type: 'titresServiceModule',
    select: ['fields.slug'],
    limit: 1000,
  })

  return response.items.map((item) => {
    const slugField = (item.fields as { slug?: string }).slug
    return typeof slugField === 'string' ? slugField : (slugField as unknown as Record<string, string>)?.['en-US'] ?? ''
  })
}

