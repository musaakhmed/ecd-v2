'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { formationsTitresServicesPageContent as content } from '@/lib/content/nosServices/formationsTitresServicesPage'
import { commonLabels } from '@/lib/content/commonLabels'

const Page = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const rect = parallaxRef.current.getBoundingClientRect()
      const scrolled = window.scrollY - rect.top
      setScrollY(scrolled * 0.3)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.hero.imageSrc}
            alt={content.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
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
              {content.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3 text-justify [text-align-last:start]"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Compétences numériques professionnelles (parallax background) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 -z-20 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('${content.competencesNumeriques.backgroundImage}')` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950/80 via-primary-900/80 to-primary-950/85" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow-md"
            >
              {content.competencesNumeriques.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg  leading-relaxed mb-8 text-center max-w-3xl mx-auto"
            >
              {content.competencesNumeriques.description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="solid" title={content.competencesNumeriques.cardTitle} raw>
                <ul className="space-y-4 text-inherit">
                  {content.competencesNumeriques.modules.map((m) => (
                    <li key={m.title} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <div>
                        <span className="font-semibold">{m.title}</span>
                        <p className="text-sm text-gray-200 mt-1">{m.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-600/60">
                  <p className="leading-relaxed text-inherit">
                    <span className="font-semibold text-white">{content.competencesNumeriques.objectifLabel}</span>{' '}
                    {content.competencesNumeriques.objectifText}
                  </p>
                </div>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compétences de bien-être, ergonomie & prévention */}
      <section ref={parallaxRef} className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 -inset-y-[100%]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY}px) scale(1.1)`,
              willChange: 'transform',
            }}
          >
            <Image
              src={content.bienEtre.parallaxImage.src}
              alt={content.bienEtre.parallaxImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/70 dark:from-gray-950/70 dark:via-gray-950/80 dark:to-gray-950/70 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-6"
            >
              {content.bienEtre.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.bienEtre.description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-secondary" title={content.bienEtre.cardTitle} raw>
                <ul className="space-y-4 text-inherit">
                  {content.bienEtre.modules.map((m) => (
                    <li key={m.title} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <div>
                        <span className="font-semibold">{m.title}</span>
                        <p className="text-sm text-secondary-100/80 mt-1">{m.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center flex flex-col gap-6"
          >
            <motion.div className="font-semibold">
              {content.cta.text}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href={content.cta.href}>
                <motion.button
                  className="relative text-white px-8 py-4 rounded-lg font-semibold cursor-pointer overflow-hidden group text-lg"
                  style={{ backgroundColor: 'var(--color-primary-600)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(66, 142, 189, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className="relative z-10" initial={false} whileHover={{ x: 2 }}>
                    {content.cta.buttonLabel ?? commonLabels.ctas.learnMore}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--color-secondary-600)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
