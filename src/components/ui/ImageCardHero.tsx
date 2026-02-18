'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface ImageCardHeroProps {
  /** Section title shown above the hero block (or inside the card when titleInCard is true) */
  title: string
  /** Image source URL */
  imageSrc: string
  /** Image alt text */
  imageAlt: string
  /** When true: image on left, card on right. When false: image on right, card on left */
  imageOnLeft?: boolean
  /** When true: render title inside the text card instead of above the block */
  titleInCard?: boolean
  /** When true: use tighter vertical spacing (less padding between sections) */
  compactSpacing?: boolean
  /** Optional lead paragraph in the card */
  description?: string
  /** Optional intro line before the list (e.g. "Il permet de :") */
  intro?: string
  /** List items shown as bullet list in the card */
  listItems?: string[]
  /** Optional conclusion paragraph after the list */
  conclusion?: string
}

const motionConfig = {
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export function ImageCardHero({
  title,
  imageSrc,
  imageAlt,
  imageOnLeft = true,
  titleInCard = false,
  compactSpacing = false,
  description,
  intro,
  listItems,
  conclusion,
}: ImageCardHeroProps) {
  const imageOffset = imageOnLeft ? -80 : 80
  const cardOffset = imageOnLeft ? 80 : -80

  const imageClasses = imageOnLeft
    ? 'w-full lg:w-[68%] rounded-3xl overflow-hidden shrink-0'
    : 'w-full lg:w-[68%] lg:ml-auto rounded-3xl overflow-hidden shrink-0'

  const cardPositionClasses = imageOnLeft
    ? 'lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2'
    : 'lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2'

  const sectionPadding = compactSpacing ? 'py-8 md:py-12' : 'py-16 md:py-24'
  const titleMargin = compactSpacing ? 'mb-4 md:mb-6' : 'mb-8 md:mb-10'

  return (
    <section className={`w-full bg-background ${sectionPadding} px-4 md:px-8 lg:px-16`}>
      <div className="max-w-6xl mx-auto">
        {!titleInCard && (
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 ${titleMargin}`}>
            {title}
          </h2>
        )}
        <div className="relative flex flex-col lg:block">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imageOffset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={motionConfig.viewport}
            transition={motionConfig.transition}
            className={imageClasses}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 68vw"
              />
            </div>
          </motion.div>

          {/* Text card */}
          <motion.div
            initial={{ opacity: 0, x: cardOffset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={motionConfig.viewport}
            transition={motionConfig.transition}
            className={`mt-4 w-full lg:max-w-md lg:mt-0 bg-secondary-800 rounded-3xl shadow-lg p-6 md:p-8 ${cardPositionClasses}`}
          >
            <div className="space-y-4 text-secondary-100">
              {titleInCard && (
                <h3 className="text-xl md:text-2xl font-bold text-secondary-100">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-secondary-100/90 text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              )}
              {intro && (
                <p className="text-secondary-100/90 text-sm md:text-base leading-relaxed font-medium">
                  {intro}
                </p>
              )}
              {listItems && listItems.length > 0 && (
                <ul className="space-y-2 text-secondary-100/90 text-sm md:text-base leading-relaxed list-disc list-inside">
                  {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {conclusion && (
                <p className="text-secondary-100/90 text-sm md:text-base leading-relaxed pt-2">
                  {conclusion}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
