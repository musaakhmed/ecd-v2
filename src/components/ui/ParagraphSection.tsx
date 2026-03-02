'use client'

import React from 'react'
import { DarkTextCard } from './DarkTextCard'

interface ParagraphSectionProps {
  title: string
  paragraphs: string[]
  variant?: 'default' | 'gradient-primary' | 'gradient-secondary'
}

const mapVariant = (
  v: ParagraphSectionProps['variant']
): 'solid' | 'gradient-primary' | 'gradient-secondary' =>
  v === 'gradient-secondary' ? 'gradient-secondary' : v === 'gradient-primary' ? 'gradient-primary' : 'solid'

export const ParagraphSection: React.FC<ParagraphSectionProps> = ({
  title,
  paragraphs,
  variant = 'default',
}) => {
  return (
    <DarkTextCard variant={mapVariant(variant)} title={title}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`leading-relaxed text-inherit ${
            index < paragraphs.length - 1 ? 'mb-4' : ''
          }`}
        >
          {paragraph}
        </p>
      ))}
    </DarkTextCard>
  )
}
