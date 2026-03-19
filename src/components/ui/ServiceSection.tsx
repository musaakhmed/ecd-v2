'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { ServiceSection as ServiceSectionType } from '@/lib/data/services/maintenance-services'
import { DarkTextCard } from './DarkTextCard'

interface ServiceSectionProps {
  section: ServiceSectionType
  index: number
  fadeInUp: {
    hidden: { opacity: number; y: number }
    visible: { opacity: number; y: number; transition: { duration: number } }
  }
  staggerContainer: {
    hidden: { opacity: number }
    visible: {
      opacity: number
      transition: { staggerChildren: number }
    }
  }
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  section,
  index,
  fadeInUp,
  staggerContainer,
}) => {
  const bgClass =
    section.backgroundType === 'gradient'
      ? 'bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950'
      : section.backgroundType === 'light'
        ? 'bg-primary-50 dark:bg-gray-900'
        : 'bg-white dark:bg-gray-950'

  const cardVariant = section.colorScheme === 'primary' ? 'solid' : 'gradient-secondary'
  const bulletColor = section.colorScheme === 'primary' ? 'bg-primary-500' : 'bg-secondary-500'
  const borderColor =
    section.colorScheme === 'primary' ? 'border-primary-600/50' : 'border-secondary-600/50'

  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-6"
          >
            {section.title}
          </motion.h2>
          {section.description && (
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {section.description}
            </motion.p>
          )}
          <motion.div variants={fadeInUp}>
            <DarkTextCard variant={cardVariant} raw>
              <ul className="space-y-4 text-inherit mb-8">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span className={`mt-1.5 h-2 w-2 rounded-full ${bulletColor} shrink-0`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {section.conclusion && (
                <div className={`pt-6 border-t ${borderColor}`}>
                  <p
                    className={`leading-relaxed text-inherit ${
                      section.conclusion.isBold ? 'font-medium' : ''
                    }`}
                  >
                    {section.conclusion.label && (
                      <span className="font-semibold opacity-100">
                        {section.conclusion.label}{' '}
                      </span>
                    )}
                    {section.conclusion.text}
                  </p>
                </div>
              )}
            </DarkTextCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
