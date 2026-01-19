'use client'

import React from 'react'
import Image from 'next/image'
import { useParallax } from '@/hooks/useParallax'

interface ParallaxSectionProps {
  imageSrc: string
  imageAlt?: string
  overlayType?: 'strong' | 'subtle'
  children: React.ReactNode
  className?: string
  parallaxSpeed?: number
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageSrc,
  imageAlt = '',
  overlayType = 'strong',
  children,
  className = '',
  parallaxSpeed = 0.3,
}) => {
  const { parallaxRef, scrollY } = useParallax(parallaxSpeed)

  const overlayClasses =
    overlayType === 'strong'
      ? 'bg-gradient-to-b from-white/70 via-white/80 to-white/70 dark:from-gray-950/70 dark:via-gray-950/80 dark:to-gray-950/70'
      : 'bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-gray-950/40'

  return (
    <section ref={parallaxRef} className={`relative py-16 md:py-20 overflow-hidden ${className}`}>
      <div className="absolute inset-0 -inset-y-[100%]">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY}px) scale(1.1)`,
            willChange: 'transform',
          }}
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        </div>
        <div className={`absolute inset-0 ${overlayClasses} pointer-events-none`} />
      </div>
      <div className="container mx-auto px-6 relative z-10">{children}</div>
    </section>
  )
}
