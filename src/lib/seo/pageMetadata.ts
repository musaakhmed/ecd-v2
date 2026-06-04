import type { Metadata } from 'next'

export type PageSeo = {
  title: string
  description: string
  path: string
}

export function createPageMetadata(
  seo: PageSeo,
  options?: { index?: boolean },
): Metadata {
  const index = options?.index !== false

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      type: 'website',
      locale: 'fr_BE',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}
