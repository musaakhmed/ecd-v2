import type { MetadataRoute } from 'next'
import { eddSections } from '@/lib/content/pages/ecole-devoirs-content'
import { getCatalogueSlugs } from '@/lib/titresServices'

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/+$/, '')

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/+$/, '')

  return 'http://localhost:3000'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  const staticRoutes: Array<{ path: string; changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']; priority?: number }> =
    [
      { path: '/', changeFrequency: 'weekly', priority: 1 },
      { path: '/a-propos', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/a-propos/qui-sommes-nous', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/a-propos/ecole-de-devoirs', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/a-propos/economie-sociale', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/a-propos/epn', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/a-propos/formation-titres-services', changeFrequency: 'monthly', priority: 0.6 },

      { path: '/nos-services/formations-titres-services', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/nos-services/initiation-informatique', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/nos-services/maintenance-depannage-informatiques', changeFrequency: 'monthly', priority: 0.7 },
      { path: '/nos-services/perfectionnement-informatique', changeFrequency: 'monthly', priority: 0.7 },

      { path: '/inclusion-numerique', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/inclusion-numerique/jeunes-connectes', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/inclusion-numerique/alpha-fle-numerique', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/inclusion-numerique/emploi-numerique', changeFrequency: 'monthly', priority: 0.6 },
      { path: '/inclusion-numerique/seniors-digital', changeFrequency: 'monthly', priority: 0.6 },

      { path: '/titres-service', changeFrequency: 'weekly', priority: 0.9 },
      { path: '/ecole-devoirs', changeFrequency: 'monthly', priority: 0.8 },
      { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
      { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
      { path: '/politique-de-confidentialite', changeFrequency: 'yearly', priority: 0.3 },
    ]

  const eddRoutes = eddSections.map((s) => ({
    url: `${siteUrl}/ecole-devoirs/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const titresServiceRoutes = getCatalogueSlugs().map((slug) => ({
    url: `${siteUrl}/titres-service/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteUrl}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...eddRoutes,
    ...titresServiceRoutes,
  ]
}

