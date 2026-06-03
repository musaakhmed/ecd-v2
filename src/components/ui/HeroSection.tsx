'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'

interface HeroSectionProps {
  children?: React.ReactNode
  imageSrc: string
  imageAlt: string
  subtitle: string
  title: string
  description: string
  customBgOverlay?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  imageSrc,
  imageAlt,
  subtitle,
  title,
  description,
  customBgOverlay,
}) => {
  return (
    <section className="relative text-white h-[35vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-700/90 via-teal-900/80 to-cyan-900/80 !${customBgOverlay}`}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-6 relative z-10 py-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white/80 mb-1 md:mb-2"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-white/90 leading-snug line-clamp-3 text-justify [text-align-last:start] py-2"
          >
            {description}
          </motion.p>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
