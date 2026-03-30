'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export type CourseModuleCardProps = {
  href: string
  title: string
  imageSrc: string
  imageAlt: string
  ctaLabel?: string
  badgeLabel?: string
  badgeClassName?: string
  /** Framer Motion variants for wrapper (optional) */
  variants?: Variants
}

export function CourseModuleCard({
  href,
  title,
  imageSrc,
  imageAlt,
  ctaLabel = 'Lire plus',
  badgeLabel,
  badgeClassName = 'bg-auxiliary-50 text-auxiliary-800 ring-1 ring-auxiliary-200',
  variants = fadeInUp,
}: CourseModuleCardProps) {
  return (
    <motion.article variants={variants}>
      <Link
        href={href}
        className="group block h-96 overflow-hidden rounded-2xl border border-primary-500/50 bg-linear-to-br from-primary-500 to-primary-600 shadow-[0_22px_45px_rgba(66,142,189,0.25)] transition duration-300 hover:shadow-[0_28px_56px_rgba(66,142,189,0.3)] hover:-translate-y-0.5"
      >
        <div className="relative h-44 w-full overflow-hidden md:h-52">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary-900/70 via-primary-800/20 to-transparent" />
          {badgeLabel ? (
            <span
              className={`absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${badgeClassName}`}
            >
              {badgeLabel}
            </span>
          ) : null}
          <div className="absolute bottom-3 left-4 right-4"></div>
        </div>
        <div className="p-5 flex flex-col justify-end max-h-full">
          <h3 className="text-base md:text-lg! font-semibold text-white leading-snug drop-shadow-sm">
            {title}
          </h3>
          <span className="mt-4 flex items-center gap-1 text-primary-100 text-sm font-medium">
            {ctaLabel}
            <svg
              className="w-4 h-4 transition group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
