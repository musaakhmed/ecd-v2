'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const TITLE = 'Bienvenue sur notre nouveau site'
const MESSAGE =
  'Suite au rebranding, nous sommes ravis de vous accueillir ici. Nous étions auparavant «Espace Culture et Développement ASBL».'

export function RebrandingToast() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rebrand-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-xl rounded-2xl border border-white/25 bg-primary-800 p-8 text-primary-50 shadow-2xl">
        <h2
          id="rebrand-modal-title"
          className="mb-4 text-xl font-semibold tracking-tight text-white"
        >
          {TITLE}
        </h2>
        <p className="mb-8 text-base leading-relaxed text-primary-50">
          {MESSAGE}
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-primary-50 px-6 py-3 text-sm font-semibold text-primary-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-primary-800"
            aria-label="Fermer"
          >
            <X className="size-4" />
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
