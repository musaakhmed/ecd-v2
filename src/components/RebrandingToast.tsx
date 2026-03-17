'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

const TITLE = 'Nouveau nom, même mission'
const OLD_NAME = 'Espace Culture et Développement ASBL'

export function RebrandingToast() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    // Avoid flashing the modal during hydration; only decide on client.
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, close])

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
        onClick={close}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 p-7 text-primary-50 shadow-2xl ring-1 ring-white/10 md:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-secondary-300/25 to-primary-200/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary-200/10 to-secondary-200/10 blur-3xl" />

        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-primary-800"
          aria-label="Fermer"
        >
          <X className="size-5" />
        </button>

        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
            Mise à jour
            <span className="h-1 w-1 rounded-full bg-white/50" />
            Rebranding
          </div>

          <h2
            id="rebrand-modal-title"
            className="text-pretty text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {TITLE}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-primary-50/90">
            Vous êtes au bon endroit. Nous changeons d’identité visuelle et de nom — auparavant{' '}
            <span className="font-semibold text-white">{OLD_NAME}</span>.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Ce qui change</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-50/85">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-200" />
                  <span>Le nom, le logo et le design du site.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-200" />
                  <span>Une navigation plus simple pour trouver nos services.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Ce qui ne change pas</p>
              <ul className="mt-3 space-y-2 text-sm text-primary-50/85">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-200" />
                  <span>Nos équipes, nos valeurs et nos activités.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-200" />
                  <span>Les moyens de contact et l’accompagnement sur le terrain.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={close}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-primary-800"
            >
              Continuer
            </button>

            <Link
              href="/a-propos/qui-sommes-nous"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-50 px-5 py-3 text-sm font-semibold text-primary-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-primary-800"
            >
              En savoir plus
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
