import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SocialMediaBar from '@/components/ui/SocialMediaBar'
import { RebrandingToast } from '@/components/RebrandingToast'

export const metadata = {
  description:
    "Espace Forma (EF) asbl, auparavant Espace Cultures et Developpement (ECD) asbl, est un cadre d'action associatif engagé dans la valorisation de la culture comme levier d'intégration, d'émancipation et d'insertion sociale.",
  title: 'Espace Forma (EF)',
}

// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr">
      <body>
        <main>
          <RebrandingToast />
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
