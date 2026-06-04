import type { MetadataRoute } from 'next'

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/+$/, '')

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/+$/, '')

  return 'http://localhost:3000'
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/inclusion-numerique/seniors-digital-old'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

