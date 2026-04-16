import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SocialMediaBar from '@/components/ui/SocialMediaBar'
import { RebrandingToast } from '@/components/RebrandingToast'
import { hasContentfulEnv } from '@/lib/contentful/env'
import { getSiteSettings } from '@/lib/contentful/queries/siteSettings'

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/+$/, '')

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`.replace(/\/+$/, '')

  return 'http://localhost:3000'
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Espace Forma (EF)',
    template: '%s | Espace Forma (EF)',
  },
  description:
    "Espace Forma (EF) asbl, auparavant Espace Cultures et Developpement (ECD) asbl, est un cadre d'action associatif engagé dans la valorisation de la culture comme levier d'intégration, d'émancipation et d'insertion sociale.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Espace Forma (EF)',
    title: 'Espace Forma (EF)',
    description:
      "Espace Forma (EF) asbl, auparavant Espace Cultures et Developpement (ECD) asbl, est un cadre d'action associatif engagé dans la valorisation de la culture comme levier d'intégration, d'émancipation et d'insertion sociale.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Forma (EF)',
    description:
      "Espace Forma (EF) asbl, auparavant Espace Cultures et Developpement (ECD) asbl, est un cadre d'action associatif engagé dans la valorisation de la culture comme levier d'intégration, d'émancipation et d'insertion sociale.",
  },
}

// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const settings = hasContentfulEnv() ? await getSiteSettings() : null
  const rebrandingToastEnabled = settings?.rebrandingToastEnabled ?? true
  const rebrandingToastDurationMs = settings?.rebrandingToastDurationMs ?? 5000

  return (
    <html lang="fr">
      <body>
        <main>
          <RebrandingToast enabled={rebrandingToastEnabled} durationMs={rebrandingToastDurationMs} />
          <Header />
          <SocialMediaBar />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
