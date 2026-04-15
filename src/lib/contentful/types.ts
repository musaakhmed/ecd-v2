export type ContentfulAsset = {
  url: string
  title?: string | null
  description?: string | null
  contentType?: string | null
  width?: number | null
  height?: number | null
}

export function normalizeContentfulAssetUrl(url: string): string {
  // Contentful GraphQL often returns URLs without protocol.
  if (url.startsWith('//')) return `https:${url}`
  return url
}

