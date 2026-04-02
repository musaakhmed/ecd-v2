'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/utils/animations'

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
    default: 'bg-azure-500 text-white',
    'gradient-primary': 'bg-gradient-to-br from-azure-500 to-azure-600 text-white',
    'gradient-secondary': 'bg-gradient-to-br from-azure-500 to-azure-600 text-white',
    transparent: 'bg-azure-500/95 text-white backdrop-blur-sm',
  }

  const borderClasses =
    variant === 'transparent'
      ? 'border border-azure-600/40'
      : 'border border-azure-600/40'

  const hoverProps = hover
    ? {
        whileHover: { scale: 1.01 },
      }
    : {}

  return (
    <motion.div
      variants={fadeInUp}
      {...hoverProps}
      className={`rounded-2xl shadow-lg p-8 ${variantClasses[variant]} ${borderClasses} ${
        hover ? 'transition-all duration-300' : ''
      } ${className}`}
    >
      {title && title.trim() && (
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      )}
      {children}
    </motion.div>
  )
}
