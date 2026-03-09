'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

type ParagraphContent = string[]
type ActivitesContent = { intro: string[]; items: string[] }
type ProjetContent = {
  intro: string[]
  objectifs: { title: string; description: string }[]
}
type SectionContent = ParagraphContent | ActivitesContent | ProjetContent

function isActivites(c: SectionContent): c is ActivitesContent {
  return typeof c === 'object' && c !== null && 'items' in c && Array.isArray((c as ActivitesContent).items)
}

function isProjet(c: SectionContent): c is ProjetContent {
  return typeof c === 'object' && c !== null && 'objectifs' in c && Array.isArray((c as ProjetContent).objectifs)
}

export function EddSectionClient({
  content,
}: {
  slug: string
  content: SectionContent
}) {
  if (isProjet(content)) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100">
          {content.intro.map((p, i) => (
            <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-secondary-900 text-center"
        >
          Nos objectifs prioritaires
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-lg text-gray-700 text-center mb-8">
          Nous visons à développer :
        </motion.p>
        <div className="space-y-4">
          {content.objectifs.map((obj, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                {obj.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{obj.description}</p>
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
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
        >
          {content.intro.map((p, i) => (
            <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <ul className="space-y-3 text-gray-700 mt-4">
            {content.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
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
      <motion.div
        variants={fadeInUp}
        className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
      >
        {paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0">
            {p}
          </p>
        ))}
      </motion.div>
    </motion.div>
  )
}
