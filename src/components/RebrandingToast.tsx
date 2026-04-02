'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { X } from 'lucide-react'

export function RebrandingToast() {
  useEffect(() => {
    toast(
      (t) => (
        <section className="flex flex-col justify-between gap-2">
          <div className="flex justify-between relative w-56  -ml-8">
            <h6 className="font-semibold">Vous êtes au bon endroit</h6>

            <p onClick={() => toast.dismiss(t.id)} className="cursor-pointer text-right text-sm">
              <X className="h-5 w-5" />
            </p>
          </div>
          <p className="text-xs w-full -ml-8">
            Nous changeons d’identité visuelle et de nom — auparavant Espace Culture et
            Développement ASBL, dorénavant <span className="font-bold">Espace Forma</span>.
          </p>
          <svg
            className="absolute -top-10 -left-36 -z-50"
            width="400"
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
        duration: 10000,
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
