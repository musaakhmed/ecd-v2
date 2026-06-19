'use client'

import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { X } from 'lucide-react'
import Link from 'next/link'

export function RebrandingToast(props: { enabled: boolean; durationMs: number }) {
  const { enabled, durationMs } = props

  useEffect(() => {
    if (!enabled) return
    toast(
      (t) => (
        <section className="flex flex-col relative justify-between gap-2 min-w-60">
          <div className="w-full -ml-10 mt-15 text-secondary-900 text-right mx-auto space-y-4">
            <div className="flex justify-between gap-4 w-full">
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold">nouvauté</p>
                <h6 className="font-bold text-xl w-full">
                  Ergonomie et prévention des TMS dans les maisons de repos
                </h6>
                <Link href="/nos-services/autres-formations/ergonomie-tms-maisons-repos">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="px-2 py-1 font-semibold bg-azure-800 text-primary-200 rounded  cursor-pointer hover:bg-primary-600 hover:text-azure-50 transition-all duration-300 ease-in-out"
                  >
                    En savoir plus
                  </button>
                </Link>
              </div>

              <p onClick={() => toast.dismiss(t.id)} className="cursor-pointer text-right text-sm">
                <X className="h-6 w-6" />
              </p>
            </div>
          </div>
          <svg
            className="absolute top-2 -left-50 -z-50"
            width="450"
            viewBox="0 0 320 180"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="#ff8a6b"
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
        duration: durationMs,
        position: 'top-right',
        style: {
          width: '14rem',
          height: '10rem',
          maxWidth: 'calc(100vw - 2rem)',
          padding: '1rem',
          color: 'transparent',
          margin: '4rem',
          marginTop: '6rem',
          boxShadow: 'none',
          background: 'transparent',
        },
      },
    )
  }, [enabled, durationMs])

  return <Toaster position="top-right" />
}
