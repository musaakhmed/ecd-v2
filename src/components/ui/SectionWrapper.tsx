'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'

interface SectionWrapperProps {
  children: React.ReactNode
  title?: string
  description?: string
  bgVariant?: 'white' | 'gradient-primary' | 'gradient-secondary'
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  titleCentered?: boolean
  descriptionCentered?: boolean
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  description,
  bgVariant = 'white',
  className = '',
  maxWidth = 'xl',
  titleCentered = true,
  descriptionCentered = true,
}) => {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-950',
    'gradient-primary':
      'bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950',
    'gradient-secondary':
      'bg-gradient-to-b from-secondary-50 to-white dark:from-gray-900 dark:to-gray-950',
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-4xl',
    '2xl': 'max-w-5xl',
    full: '',
  }

  return (
    <section className={`py-12 ${bgClasses[bgVariant]} ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className={maxWidth !== 'full' ? `${maxWidthClasses[maxWidth]} mx-auto` : ''}
        >
          {title && (
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-6 ${
                titleCentered ? 'text-center' : ''
              }`}
            >
              {title}
            </motion.h2>
          )}
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
          {children}
        </motion.div>
      </div>
    </section>
  )
}
