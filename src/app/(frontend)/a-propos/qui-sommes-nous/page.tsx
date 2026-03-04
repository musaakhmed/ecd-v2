'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { quiSommesNousPageContent } from '@/lib/about-content'
import { DarkIntroSection } from '@/components/ui/DarkIntroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'

const Page = () => {
  const content = quiSommesNousPageContent
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/economie-sociale.png"
            alt="Qui sommes-nous"
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
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-relaxed max-w-3xl"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <DarkIntroSection>
        {content.introduction.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index < content.introduction.paragraphs.length - 1 ? 'mb-4' : ''}
          >
            {paragraph}
          </p>
        ))}
      </DarkIntroSection>

      {/* Approche interculturelle */}
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
              src="/assets/operateur/parallax/approche-participative.png"
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
              {content.approche.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.approche.description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="solid" raw className="rounded-2xl p-8">
                <p className="text-inherit leading-relaxed mb-6">{content.approche.intro}</p>
                <BulletList
                  items={content.approche.objectifs}
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="text-inherit leading-relaxed">{content.approche.conclusion}</p>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Domaines d'action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-12"
            >
              {content.domaines.title}
            </motion.h2>

            {/* 1. Soutien scolaire */}
            <motion.div variants={fadeInUp} className="mb-12">
              <DarkTextCard
                variant="solid"
                title={`1. ${content.domaines.soutienScolaire.title}`}
                raw
                hover
                className="rounded-2xl p-8 md:p-10"
              >
                <p className="text-inherit leading-relaxed mb-6">
                  {content.domaines.soutienScolaire.description}
                </p>
                <BulletList
                  items={content.domaines.soutienScolaire.points}
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="text-inherit leading-relaxed italic">
                  {content.domaines.soutienScolaire.conclusion}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* 2. Inclusion numérique */}
            <motion.div variants={fadeInUp} className="mb-12">
              <DarkTextCard
                variant="gradient-secondary"
                title={`2. ${content.domaines.inclusionNumerique.title}`}
                raw
                hover
                className="rounded-2xl p-8 md:p-10"
              >
                <p className="text-inherit leading-relaxed mb-6">
                  {content.domaines.inclusionNumerique.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <BulletList
                    items={content.domaines.inclusionNumerique.publics.left}
                    color="secondary"
                    lightOnDark
                    animated={false}
                  />
                  <BulletList
                    items={content.domaines.inclusionNumerique.publics.right}
                    color="secondary"
                    lightOnDark
                    animated={false}
                  />
                </div>
                <p className="text-inherit font-semibold mb-4">
                  {content.domaines.inclusionNumerique.interventions.title}
                </p>
                <BulletList
                  items={content.domaines.inclusionNumerique.interventions.items}
                  color="secondary"
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="text-inherit leading-relaxed italic">
                  {content.domaines.inclusionNumerique.conclusion}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* 3. Formations Titres-Services */}
            <motion.div variants={fadeInUp} className="mb-12">
              <DarkTextCard
                variant="solid"
                title={`3. ${content.domaines.formationsTitresServices.title}`}
                raw
                hover
                className="rounded-2xl p-8 md:p-10"
              >
                <p className="text-inherit leading-relaxed mb-6">
                  {content.domaines.formationsTitresServices.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div className="bg-primary-700/30 rounded-xl p-6 border border-primary-600/50">
                    <h4 className="text-lg font-semibold text-primary-50 mb-4">
                      {content.domaines.formationsTitresServices.competencesNumeriques.title}
                    </h4>
                    <BulletList
                      items={content.domaines.formationsTitresServices.competencesNumeriques.items}
                      lightOnDark
                      animated={false}
                    />
                  </div>
                  <div className="bg-secondary-700/30 rounded-xl p-6 border border-secondary-600/50">
                    <h4 className="text-lg font-semibold text-secondary-50 mb-4">
                      {content.domaines.formationsTitresServices.competencesBienEtre.title}
                    </h4>
                    <BulletList
                      items={content.domaines.formationsTitresServices.competencesBienEtre.items}
                      color="secondary"
                      lightOnDark
                      animated={false}
                    />
                  </div>
                </div>
                <p className="text-inherit leading-relaxed italic">
                  {content.domaines.formationsTitresServices.conclusion}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* 4. Ateliers parentalité */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard
                variant="gradient-primary"
                title={`4. ${content.domaines.ateliersParentalite.title}`}
                raw
                hover
                className="rounded-2xl p-8 md:p-10"
              >
                <p className="text-inherit leading-relaxed mb-6">
                  {content.domaines.ateliersParentalite.description}
                </p>
                <BulletList
                  items={content.domaines.ateliersParentalite.items}
                  lightOnDark
                  animated={false}
                />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page

