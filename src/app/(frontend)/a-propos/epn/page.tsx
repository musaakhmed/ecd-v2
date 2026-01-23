'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { epnPageContent } from '@/lib/about-content'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ContentSection } from '@/components/ui/ContentSection'
import { BulletList } from '@/components/ui/BulletList'
import { ContentCard } from '@/components/ui/ContentCard'

const Page = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrolled = window.scrollY - rect.top
        // Parallax effect: background moves at 30% of scroll speed
        setScrollY(scrolled * 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
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

  const content = epnPageContent

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/epnm.png"
            alt="EPN Mobile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
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
              {content.hero.subtitle}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* First Section */}
      <SectionWrapper maxWidth="xl">
        <ContentSection
          title=""
          intro={content.firstSection.intro}
          items={content.firstSection.items}
          conclusion={content.firstSection.conclusion}
          variant="gradient-primary"
          bulletColor="primary"
          descriptionCentered={false}
        />
      </SectionWrapper>

      {/* Publics cibles */}
      <section ref={parallaxRef} className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -inset-y-[100%]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY}px) scale(1.1)`,
              willChange: 'transform',
            }}
          >
            <Image
              src="/assets/operateur/parallax/inclusion-numerique.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Stronger overlay for text readability */}
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
              {content.publicsCibles.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.publicsCibles.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.publicsCibles.publics.map((publicItem, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{publicItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interventions */}
      <SectionWrapper
        title={content.interventions.title}
        maxWidth="xl"
        bgVariant="gradient-primary"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <ContentCard variant="gradient-primary">
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6"
            >
              {content.interventions.intro}
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-6">
              <BulletList items={content.interventions.items} color="primary" />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 dark:text-gray-200 leading-relaxed pt-4 border-t border-primary-100 dark:border-primary-900/50 mb-6"
            >
              {content.interventions.conclusion}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <BulletList items={content.interventions.garanties} color="primary" />
            </motion.div>
          </ContentCard>
        </motion.div>
      </SectionWrapper>

      {/* Connectoo */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
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
              {content.connectoo.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.connectoo.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl border border-secondary-100 dark:border-secondary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.connectoo.attestations.map((attestation, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>{attestation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
