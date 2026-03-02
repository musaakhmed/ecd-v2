'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { DarkTextCard } from './DarkTextCard'
import { BulletList } from './BulletList'

interface ContentSectionProps {
  title?: string
  description?: string
  intro?: string
  items?: string[]
  conclusion?: string
  /** Maps to DarkTextCard: solid, gradient-primary, gradient-secondary (default/transparent → solid) */
  variant?: 'default' | 'gradient-primary' | 'gradient-secondary' | 'transparent'
  bulletColor?: 'primary' | 'secondary'
  descriptionCentered?: boolean
}

const mapVariantToDark = (
  v: ContentSectionProps['variant']
): 'solid' | 'gradient-primary' | 'gradient-secondary' =>
  v === 'gradient-secondary' ? 'gradient-secondary' : v === 'gradient-primary' ? 'gradient-primary' : 'solid'

export const ContentSection: React.FC<ContentSectionProps> = ({
  description,
  intro,
  items = [],
  conclusion,
  variant = 'gradient-primary',
  bulletColor = 'primary',
  descriptionCentered = true,
}) => {
  const darkVariant = mapVariantToDark(variant)
  const borderClass =
    darkVariant === 'gradient-secondary'
      ? 'border-secondary-600/50'
      : darkVariant === 'gradient-primary'
        ? 'border-primary-600/50'
        : 'border-gray-600/60'

  return (
    <DarkTextCard variant={darkVariant}>
      {description && (
        <motion.p
          variants={fadeInUp}
          className={`text-lg leading-relaxed mb-8 text-inherit ${
            descriptionCentered ? 'text-center' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
      {intro && (
        <motion.p variants={fadeInUp} className="text-lg leading-relaxed mb-6 text-inherit">
          {intro}
        </motion.p>
      )}
      {items.length > 0 && (
        <div className={conclusion ? 'mb-6' : ''}>
          <BulletList items={items} color={bulletColor} lightOnDark />
        </div>
      )}
      {conclusion && (
        <motion.p
          variants={fadeInUp}
          className={`leading-relaxed pt-4 border-t text-inherit ${borderClass}`}
        >
          {conclusion}
        </motion.p>
      )}
    </DarkTextCard>
  )
}
