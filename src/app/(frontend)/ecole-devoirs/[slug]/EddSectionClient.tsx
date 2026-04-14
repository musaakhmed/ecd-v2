'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { DarkTextCard } from '@/components/ui/DarkTextCard'

type ParagraphContent = string[]
type ActivitesContent = { intro: string[]; items: string[] }
type ProjetContent = {
  intro: string[]
  objectifs: { title: string; description: string }[]
}
export type SectionContent = ParagraphContent | ActivitesContent | ProjetContent

function isActivites(c: SectionContent): c is ActivitesContent {
  return (
    typeof c === 'object' &&
    c !== null &&
    'items' in c &&
    Array.isArray((c as ActivitesContent).items)
  )
}

function isProjet(c: SectionContent): c is ProjetContent {
  return (
    typeof c === 'object' &&
    c !== null &&
    'objectifs' in c &&
    Array.isArray((c as ProjetContent).objectifs)
  )
}

export function EddSectionClient({
  content,
  sectionImage,
  sectionImageAlt,
}: {
  slug: string
  content: SectionContent
  sectionImage?: string
  sectionImageAlt?: string
}) {
  const imageBlock =
    sectionImage && sectionImageAlt ? (
      <motion.div
        variants={fadeInUp}
        className="relative h-56 w-full overflow-hidden rounded-2xl border border-primary-500/50 shadow-lg mb-8 md:h-72"
      >
        <Image
          src={sectionImage}
          alt={sectionImageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 896px, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
      </motion.div>
    ) : null

  if (isProjet(content)) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-8"
      >
        {imageBlock}
        <motion.div variants={fadeInUp}>
          <DarkTextCard variant="gradient-primary" raw>
            <div className="space-y-4 text-primary-100/90">
              {content.intro.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </DarkTextCard>
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-3xl font-bold text-center pt-4 text-primary-900"
        >
          Nos objectifs prioritaires
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {content.objectifs.map((obj, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-primary-500/40 bg-gradient-to-br from-primary-700 to-primary-800 shadow-[0_18px_40px_rgba(66,142,189,0.22)] transition-shadow hover:shadow-[0_24px_55px_rgba(66,142,189,0.28)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-secondary-300/35 to-primary-300/20 blur-2xl transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-br from-primary-200/12 to-secondary-200/10 blur-2xl" />

              <div className="relative p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md ring-1 ring-white/10">
                    <span className="text-sm font-semibold tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">{obj.title}</h3>
                    <p className="mt-2 text-white/85 leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  }

  if (isActivites(content)) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-6"
      >
        {imageBlock}
        <motion.div variants={fadeInUp}>
          <DarkTextCard variant="gradient-primary" raw>
            <div className="space-y-4 text-primary-100/90">
              {content.intro.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {content.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-300 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </DarkTextCard>
        </motion.div>
      </motion.div>
    )
  }

  // ParagraphContent (array of strings)
  const paragraphs = content as string[]
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      {imageBlock}
      <motion.div variants={fadeInUp}>
        <DarkTextCard variant="gradient-primary" raw>
          <div className="space-y-4 text-primary-100/90">
            {paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </DarkTextCard>
      </motion.div>
    </motion.div>
  )
}
