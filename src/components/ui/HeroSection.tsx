'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
  subtitle: string
  title: string
  description: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  imageAlt,
  subtitle,
  title,
  description,
}) => {
  return (
    <section className="relative text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/80 to-secondary-600/80" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
