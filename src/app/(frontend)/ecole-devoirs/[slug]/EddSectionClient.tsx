'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { DarkTextCard } from '@/components/ui/DarkTextCard'

type ParagraphContent = string[]
type ActivitesContent = { intro: string[]; items: string[] }
type ProjetContent = {
  intro: string[]
  objectifs: { title: string; description: string }[]
}
export type SectionContent = ParagraphContent | ActivitesContent | ProjetContent

function isActivites(c: SectionContent): c is ActivitesContent {
  return typeof c === 'object' && c !== null && 'items' in c && Array.isArray((c as ActivitesContent).items)
}

function isProjet(c: SectionContent): c is ProjetContent {
  return typeof c === 'object' && c !== null && 'objectifs' in c && Array.isArray((c as ProjetContent).objectifs)
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
          className="text-2xl md:text-3xl font-bold text-center text-primary-900 dark:text-primary-100"
        >
          Nos objectifs prioritaires
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-center text-primary-700 dark:text-primary-200 mb-8">
          Nous visons à développer :
        </motion.p>
        <div className="space-y-4">
          {content.objectifs.map((obj, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-primary-500/50 bg-gradient-to-br from-primary-500 to-primary-600 p-6 shadow-[0_22px_45px_rgba(66,142,189,0.2)]"
            >
              <div className="rounded-xl border border-white/20 bg-white/10 p-5">
                <h3 className="text-lg font-semibold text-primary-50 mb-1">
                  {obj.title}
                </h3>
                <p className="text-primary-100/90 leading-relaxed">{obj.description}</p>
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
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
