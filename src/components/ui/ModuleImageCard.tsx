'use client'

import React from 'react'
import Image from 'next/image'

export interface ModuleImageCardProps {
  /** Display number (e.g. 1–6) shown in top-left of image */
  number: number
  /** Image URL for the card header */
  imageSrc: string
  /** Alt text for the image */
  imageAlt: string
  /** Main title below the image (e.g. module name) */
  title: string
  /** Optional badge text on the image (e.g. "Word · Excel · PowerPoint") */
  badge?: string
  /** Optional label above title (defaults to "Module {number}") */
  moduleLabel?: string
  /** Tailwind class for the content layout (e.g. grid/columns) */
  contentClassName?: string
  /** Tailwind class for the content padding inside the inner frame */
  contentPaddingClassName?: string
  /** Tailwind class for the inner framed panel */
  frameClassName?: string
  children: React.ReactNode
}

export const ModuleImageCard: React.FC<ModuleImageCardProps> = ({
  number,
  imageSrc,
  imageAlt,
  title,
  badge,
  moduleLabel,
  contentClassName = '',
  contentPaddingClassName = 'p-4 md:p-5',
  frameClassName = '',
  children,
}) => {
  const label = moduleLabel ?? `Module ${number}`

  return (
    <div className="overflow-hidden rounded-2xl border border-primary-500/50 bg-gradient-to-br from-primary-500 to-primary-600 shadow-[0_22px_45px_rgba(66,142,189,0.25)]">
      <div className="relative h-52 w-full overflow-hidden md:h-64 lg:h-72">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          sizes="(min-width: 1024px) 36rem, (min-width: 768px) 60vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-primary-800/5 to-transparent" />
        <span className="absolute top-3 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-primary-50 shadow-lg ring-2 ring-white/30">
          {number}
        </span>
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-50/90">
              {label}
            </p>
            <h3 className="text-sm md:text-base font-semibold text-white leading-snug drop-shadow-sm">
              {title}
            </h3>
          </div>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur">
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div
          className={`rounded-2xl border border-white/20 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ${frameClassName}`.trim()}
        >
          <div className={contentPaddingClassName}>
            <div className={contentClassName}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
