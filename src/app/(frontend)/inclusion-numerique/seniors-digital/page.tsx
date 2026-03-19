'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { seniorsDigitalPage } from '@/lib/content/pages/inclusionNumeriqueData'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc={seniorsDigitalPage.hero.imageSrc}
        imageAlt={seniorsDigitalPage.hero.imageAlt}
        subtitle={seniorsDigitalPage.hero.subtitle}
        title={seniorsDigitalPage.hero.title}
        description={seniorsDigitalPage.hero.description}
      />

      {/* Contenu principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Objectif général */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={seniorsDigitalPage.sections.objectif.title} raw hover>
                <p className="leading-relaxed text-inherit">
                  {seniorsDigitalPage.sections.objectif.paragraph}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Objectifs spécifiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard
                variant="gradient-secondary"
                title={seniorsDigitalPage.sections.objectifsSpecifiques.title}
                raw
                hover
              >
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.objectifsSpecifiques.intro}
                </p>
                <BulletList
                  items={seniorsDigitalPage.objectifsSpecifiques}
                  color="secondary"
                  lightOnDark
                  animated={false}
                />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Une approche de proximité */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard
                variant="solid"
                title={seniorsDigitalPage.sections.approche.title}
                raw
                hover
              >
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.approche.paragraphs[0]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.approche.paragraphs[1]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.approche.paragraphs[2]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.approche.paragraphs[3]}
                </p>
                <BulletList
                  items={seniorsDigitalPage.approcheProximite}
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="leading-relaxed text-inherit">
                  {seniorsDigitalPage.sections.approche.paragraphs[4]}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Impact et finalité */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title={seniorsDigitalPage.sections.impact.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.impact.paragraphs[0]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.impact.paragraphs[1]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {seniorsDigitalPage.sections.impact.paragraphs[2]}
                </p>
                <BulletList
                  items={seniorsDigitalPage.impactFinalite}
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="leading-relaxed text-inherit">
                  {seniorsDigitalPage.sections.impact.paragraphs[3]}
                </p>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


export default Page
