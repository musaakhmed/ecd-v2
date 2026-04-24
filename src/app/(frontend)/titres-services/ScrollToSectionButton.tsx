'use client'

import { CircleArrowDown } from 'lucide-react'

export function ScrollToSectionButton({
  targetId,
  className,
  ariaLabel = 'Aller à la section suivante',
}: {
  targetId: string
  className?: string
  ariaLabel?: string
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        const el = document.getElementById(targetId)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
    >
      <CircleArrowDown className="w-15 h-15 text-primary-500 animate-bounce" />
    </button>
  )
}

