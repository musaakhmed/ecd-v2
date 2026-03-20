import type { EddSectionEntry } from '../types'
import { getDeliveryClient, getPreviewClient } from '../client'

type GetEddSectionBySlugOptions = {
  preview?: boolean
}

export async function getEddSectionBySlug(slug: string, options: GetEddSectionBySlugOptions = {}): Promise<EddSectionEntry | null> {
  const client = options.preview ? getPreviewClient() : getDeliveryClient()

  const response = await client.getEntries({
    content_type: 'eddSection',
    'fields.slug': slug,
    limit: 1,
  })

  const item = response.items[0]
  return (item as unknown as EddSectionEntry | undefined) ?? null
}

export async function getAllEddSectionSlugs(options: GetEddSectionBySlugOptions = {}): Promise<string[]> {
  const client = options.preview ? getPreviewClient() : getDeliveryClient()

  const response = await client.getEntries({
    content_type: 'eddSection',
    select: ['fields.slug'],
    limit: 1000,
  })

  return response.items.map((item) => {
    const slugField = (item.fields as { slug?: string }).slug
    return typeof slugField === 'string' ? slugField : (slugField as unknown as Record<string, string>)?.['en-US'] ?? ''
  })
}

