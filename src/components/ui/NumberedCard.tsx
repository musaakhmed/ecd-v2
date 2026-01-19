'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface NumberedCardProps {
  number: number
  title: string
  description?: string
  hover?: boolean
}

export const NumberedCard: React.FC<NumberedCardProps> = ({
  number,
  title,
  description,
  hover = false,
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
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-900/60"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">{title}</h3>
      </div>
      {description && (
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed ml-14 mt-3">
          {description}
        </p>
      )}
    </motion.div>
  )
}
