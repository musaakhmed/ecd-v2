'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface ContentCardProps {
  title?: string
  children: React.ReactNode
  variant?: 'default' | 'gradient-primary' | 'gradient-secondary' | 'transparent'
  className?: string
  hover?: boolean
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  children,
  variant = 'default',
  className = '',
  hover = false,
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-900',
    'gradient-primary':
      'bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900',
    'gradient-secondary':
      'bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900',
    transparent: 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm',
  }

  const borderClasses =
    variant === 'transparent'
      ? 'border border-primary-100 dark:border-primary-900/50'
      : variant === 'gradient-secondary'
        ? 'border border-secondary-100 dark:border-secondary-900/50'
        : 'border border-primary-100 dark:border-primary-900/50'

  const hoverProps = hover
    ? {
        whileHover: { scale: 1.01 },
        className: `${className} transition-all duration-300`,
      }
    : { className }

  return (
    <motion.div
      variants={fadeInUp}
      {...hoverProps}
      className={`rounded-2xl shadow-lg p-8 ${variantClasses[variant]} ${borderClasses} ${hoverProps.className}`}
    >
      {title && title.trim() && (
        <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
          {title}
        </h2>
      )}
      {children}
    </motion.div>
  )
}
