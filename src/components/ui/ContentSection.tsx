'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { ContentCard } from './ContentCard'
import { BulletList } from './BulletList'

interface ContentSectionProps {
  title?: string
  description?: string
  intro?: string
  items?: string[]
  conclusion?: string
  variant?: 'default' | 'gradient-primary' | 'gradient-secondary' | 'transparent'
  bulletColor?: 'primary' | 'secondary'
  descriptionCentered?: boolean
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  description,
  intro,
  items = [],
  conclusion,
  variant = 'gradient-primary',
  bulletColor = 'primary',
  descriptionCentered = true,
}) => {
  return (
    <ContentCard variant={variant}>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 ${
            descriptionCentered ? 'text-center' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
      {intro && (
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6"
        >
          {intro}
        </motion.p>
      )}
      {items.length > 0 && (
        <div className={conclusion ? 'mb-6' : ''}>
          <BulletList items={items} color={bulletColor} />
        </div>
      )}
      {conclusion && (
        <motion.p
          variants={fadeInUp}
          className={`text-gray-700 dark:text-gray-200 leading-relaxed pt-4 border-t ${
            variant === 'gradient-secondary'
              ? 'border-secondary-100 dark:border-secondary-900/50'
              : 'border-primary-100 dark:border-primary-900/50'
          }`}
        >
          {conclusion}
        </motion.p>
      )}
    </ContentCard>
  )
}
