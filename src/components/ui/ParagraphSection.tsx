'use client'

import React from 'react'
import { ContentCard } from './ContentCard'

interface ParagraphSectionProps {
  title: string
  paragraphs: string[]
  variant?: 'default' | 'gradient-primary' | 'gradient-secondary'
}

export const ParagraphSection: React.FC<ParagraphSectionProps> = ({
  title,
  paragraphs,
  variant = 'default',
}) => {
  return (
    <ContentCard variant={variant} title={title}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-gray-700 dark:text-gray-200 leading-relaxed ${
            index < paragraphs.length - 1 ? 'mb-4' : ''
          }`}
        >
          {paragraph}
        </p>
      ))}
    </ContentCard>
  )
}
