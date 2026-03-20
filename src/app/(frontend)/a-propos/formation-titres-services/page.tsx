'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { titresServicesPageContent } from '@/lib/content/pages/about-content'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { DarkIntroSection } from '@/components/ui/DarkIntroSection'

const Page = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrolled = window.scrollY - rect.top
        setScrollY(scrolled * 0.3)
      }
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

  if (!titresServicesPageContent) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const content = titresServicesPageContent

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/formation-titres-services.png"
            alt="Formation Titres-Services"
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
              {content.hero.subtitle}
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

      <DarkIntroSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-6">
          {content.firstSection.title}
        </h2>
        <p className="mb-6">{content.firstSection.description}</p>
        <ul className="space-y-2 list-disc list-inside">
          {content.firstSection.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </DarkIntroSection>

      {/* Compétences numériques - Parallax */}
      <section ref={parallaxRef} className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -inset-y-[100%]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY}px) scale(1.1)`,
              willChange: 'transform',
            }}
          >
            <Image
              src="/assets/operateur/parallax/integration-numerique.png"
              alt=""
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
              {content.competencesNumeriques.title}
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="solid" raw>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg dark:text-gray-200 leading-relaxed mb-8 text-center"
                >
                  {content.competencesNumeriques.description}
                </motion.p>
                <ul className="space-y-4 text-gray-100">
                  {content.competencesNumeriques.items.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageCardHero
        title={content.competencesBienEtre.title}
        imageSrc="/assets/operateur/formation-titres-services.png"
        imageAlt="Compétences bien-être et prévention"
        imageOnLeft
        description={content.competencesBienEtre.description}
        listItems={content.competencesBienEtre.items}
      />

      <ImageCardHero
        title={content.impact.title}
        imageSrc="/assets/operateur/parallax/integration-numerique.png"
        imageAlt="Impact des formations"
        imageOnLeft={false}
        description={content.impact.description}
        listItems={content.impact.contributions}
      />
    </div>
  )
}

export default Page
