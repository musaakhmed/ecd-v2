'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/utils/animations'

export type DarkTextCardVariant = 'solid' | 'gradient-primary' | 'gradient-secondary'

interface DarkTextCardProps {
  /** Card title (optional) */
  title?: string
  children: React.ReactNode
  /** solid = dark neutral background; gradient-primary / gradient-secondary = dark gradient with accent */
  variant?: DarkTextCardVariant
  className?: string
  hover?: boolean
  /** When true, children are not wrapped in default light text styling (use for custom content) */
  raw?: boolean
}

const variantClasses: Record<DarkTextCardVariant, string> = {
  solid: 'bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50 text-primary-100',
  'gradient-primary':
    'bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50 text-primary-100',
  'gradient-secondary':
    'bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50 text-secondary-100',
}

const titleClasses: Record<DarkTextCardVariant, string> = {
  solid: 'text-white',
  'gradient-primary': 'text-primary-50',
  'gradient-secondary': 'text-secondary-50',
}

export const DarkTextCard: React.FC<DarkTextCardProps> = ({
  title,
  children,
  variant = 'solid',
  className = '',
  hover = false,
  raw = false,
}) => {
  const hoverProps = hover
    ? {
        whileHover: { scale: 1.01 },
      }
    : {}

  return (
    <motion.div
      variants={fadeInUp}
      {...hoverProps}
      className={`rounded-2xl shadow-lg p-8 border ${variantClasses[variant]} ${
        hover ? 'transition-all duration-300' : ''
      } ${className}`}
    >
      {title && title.trim() && (
        <h2 className={`text-3xl! font-bold mb-4 ${titleClasses[variant]}`}>{title}</h2>
      )}
      {raw ? (
        children
      ) : (
        <div className="leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0">{children}</div>
      )}
    </motion.div>
  )
}
