'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface BulletListProps {
  items: readonly string[]
  color?: 'primary' | 'secondary'
  className?: string
  itemClassName?: string
  animated?: boolean
  /** Use light text (e.g. for use inside DarkTextCard) */
  lightOnDark?: boolean
}

export const BulletList: React.FC<BulletListProps> = ({
  items,
  color = 'primary',
  className = '',
  itemClassName = '',
  animated = true,
  lightOnDark = false,
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
  }

  const textClass = lightOnDark ? 'text-gray-100' : 'text-gray-700 dark:text-gray-200'
  const ListItem = animated ? motion.li : 'li'
  const itemProps = animated ? { variants: fadeInUp } : {}

  return (
    <ul className={`space-y-4 ${textClass} ${className}`}>
      {items.map((item, index) => (
        <ListItem key={index} {...itemProps} className={`flex gap-3 ${itemClassName}`}>
          <span className={`mt-1.5 h-2 w-2 rounded-full ${colorClasses[color]} shrink-0`} />
          <span>{item}</span>
        </ListItem>
      ))}
    </ul>
  )
}
