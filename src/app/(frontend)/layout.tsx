import React from 'react'
import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import SocialMediaBar from '@/components/ui/SocialMediaBar'

export const metadata = {
  description: 'Espace Culture et Developpement',
  title: 'Espace Culture et Developpement',
}

// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <SocialMediaBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
