import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'Évaluations | Espace Forma (EF)',
    template: '%s | Évaluations | Espace Forma (EF)',
  },
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-full bg-primary-50 text-text">
        <header className="border-b border-border bg-white">
          <div className="mx-auto flex h-16 max-w-3xl items-center px-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/logo/logo.png"
                alt="Espace Forma"
                width={140}
                height={38}
                priority
                className="h-9 w-auto"
              />
              <span className="hidden text-sm font-semibold text-muted sm:inline">Évaluations</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-border bg-white py-5 text-center text-sm text-muted">
          Espace Forma (EF) asbl — réponses envoyées pour le suivi pédagogique
        </footer>
      </body>
    </html>
  )
}
