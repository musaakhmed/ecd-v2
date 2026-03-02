'use client'

import React from 'react'
import { DarkTextCard } from './DarkTextCard'

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
  return (
    <DarkTextCard variant="solid" hover={hover} raw className="rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {description && (
        <p className="text-gray-200 leading-relaxed ml-14 mt-3">{description}</p>
      )}
    </DarkTextCard>
  )
}
