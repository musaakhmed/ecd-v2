'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { X } from 'lucide-react'
import Link from 'next/link'

export function RebrandingToast() {
  useEffect(() => {
    toast(
      (t) => (
        <section className="flex flex-col relative justify-between gap-2 min-w-60">
          <div className="w-full -ml-20 mt-24 text-left mx-auto space-y-4">
            <div className="flex justify-between">
              <h6 className="font-semibold">Changement de nom et d'identité visuelle</h6>

              <p onClick={() => toast.dismiss(t.id)} className="cursor-pointer text-right text-sm">
                <X className="h-5 w-5" />
              </p>
            </div>
            <div className="text-sm w-full space-y-2">
              <p>
                Dans une dynamique d'évolution et afin de mieux refléter ses missions acuelles,
                notre association change d'identité.
              </p>
            </div>
            <Link href="/a-propos/qui-sommes-nous/#">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-2 py-1 bg-azure-100 text-primary-800 rounded right-0 cursor-pointer hover:bg-primary-600 hover:text-azure-50 transition-all duration-300 ease-in-out"
              >
                En savoir plus
              </button>
            </Link>
          </div>
          <svg
            className="absolute top-8 -left-70 -z-50"
            width="500"
            viewBox="0 0 320 180"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="#113B4A"
              d="M62 54
                  Q66 46 75 44
                  L286 8
                  Q298 6 298 18
                  L304 156
                  Q304 168 292 168
                  L98 168
                  Q88 168 83 158
                  L62 54Z"
            />
          </svg>
        </section>
      ),
      {
        duration: 5000,
        position: 'top-right',
        style: {
          width: '14rem',
          height: '10rem',
          maxWidth: 'calc(100vw - 2rem)',
          padding: '1rem',
          borderRadius: '0.75rem',
          color: 'var(--color-primary-50)',
          boxShadow: '0 18px 38px rgba(13, 28, 38, 0.28)',
          margin: '4rem',
          marginTop: '6rem',
          background: 'transparent',
        },
      },
    )
  }, [])

  return <Toaster position="top-right" />
}
