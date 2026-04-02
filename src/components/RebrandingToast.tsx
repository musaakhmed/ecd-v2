'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export function RebrandingToast() {
  useEffect(() => {
    toast(
      (t) => (
        <section className="flex flex-col justify-between gap-2">
          <div className="flex justify-between">
            <h6 className="font-semibold">Vous êtes au bon endroit</h6>
            <p onClick={() => toast.dismiss(t.id)} className="cursor-pointer text-right text-sm">
              <X className="h-5 w-5" />
            </p>
          </div>
          <p className="text-xs">
            Nous changeons d’identité visuelle et de nom — auparavant Espace Culture et
            Développement ASBL, dorénavant <span className="font-bold">Espace Forma</span>.
          </p>
          <div className="flex gap-4">
            {/*<Link href="/a-propos/qui-sommes-nous">*/}
            {/*  <button*/}
            {/*    onClick={() => toast.dismiss(t.id)}*/}
            {/*    className="bg-secondary-50 py-1.5 px-3 rounded text-primary-800 cursor-pointer"*/}
            {/*  >*/}
            {/*    Savoir plus*/}
            {/*  </button>*/}
            {/*</Link>*/}
          </div>
        </section>
      ),
      {
        duration: 60000,
        position: 'top-right',
        style: {
          width: '14rem',
          height: '10rem',
          maxWidth: 'calc(100vw - 2rem)',
          padding: '1rem',
          borderRadius: '0.75rem',
          color: 'var(--color-primary-50)',
          border: '1px solid var(--color-primary-600)',
          boxShadow: '0 18px 38px rgba(13, 28, 38, 0.28)',
          margin: '4rem',
          marginTop: '6rem',
          backgroundImage:
            'radial-gradient(120px 120px at 95% 5%, rgba(53, 113, 151, 0.45) 0%, rgba(53, 113, 151, 0) 65%), linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-700) 100%)',
        },
      },
    )
  }, [])

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          width: '26rem',
          maxWidth: 'calc(100vw - 2rem)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          color: 'var(--color-primary-50)',
          border: '1px solid var(--color-primary-600)',
          boxShadow: '0 16px 38px rgba(13, 28, 38, 0.28)',
          backgroundImage:
            'radial-gradient(120px 120px at 95% 5%, rgba(53, 113, 151, 0.45) 0%, rgba(53, 113, 151, 0) 65%), linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-800) 100%)',
        },
      }}
    />
  )
}
