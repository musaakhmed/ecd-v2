'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface BulletListProps {
  items: string[]
  color?: 'primary' | 'secondary'
  className?: string
  itemClassName?: string
  animated?: boolean
}

export const BulletList: React.FC<BulletListProps> = ({
  items,
  color = 'primary',
  className = '',
  itemClassName = '',
  animated = true,
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
  }

  const ListItem = animated ? motion.li : 'li'
  const itemProps = animated ? { variants: fadeInUp } : {}

  return (
    <ul className={`space-y-4 text-gray-700 dark:text-gray-200 ${className}`}>
      {items.map((item, index) => (
        <ListItem key={index} {...itemProps} className={`flex gap-3 ${itemClassName}`}>
          <span className={`mt-1.5 h-2 w-2 rounded-full ${colorClasses[color]} shrink-0`} />
          <span>{item}</span>
        </ListItem>
      ))}
    </ul>
  )
}
