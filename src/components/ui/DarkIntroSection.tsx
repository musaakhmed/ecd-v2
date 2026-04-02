'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'

interface DarkIntroSectionProps {
  children: React.ReactNode
  /** Optional: use motion for entrance animation (default true) */
  animated?: boolean
}

/**
 * First-section block used on every a-propos page: dark gradient background
 * (primary-700/800) with light text (primary-100), matching qui-sommes-nous intro.
 */
export function DarkIntroSection({ children, animated = true }: DarkIntroSectionProps) {
  const cardClasses =
    'bg-gradient-to-br from-azure-500 to-azure-600 rounded-2xl shadow-lg p-8 md:p-10 border border-azure-600/50 relative overflow-hidden'
  const contentClasses = 'relative z-10 text-white/90 leading-relaxed text-lg'

  const cardContent = (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/25 to-transparent rounded-full -mr-16 -mt-16" />
      <div className={contentClasses}>{children}</div>
    </>
  )

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {animated ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className={cardClasses}>
                {cardContent}
              </motion.div>
            </motion.div>
          ) : (
            <div className={cardClasses}>{cardContent}</div>
          )}
        </div>
      </div>
    </section>
  )
}
