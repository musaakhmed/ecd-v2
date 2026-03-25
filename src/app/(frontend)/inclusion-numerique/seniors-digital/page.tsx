'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroSection } from '@/components/ui/HeroSection'
import { BulletList } from '@/components/ui/BulletList'
import { TextWithImageOverlap } from '@/components/ui/TextWithImageOverlap'
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
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Objectif général */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={seniorsDigitalPage.sections.objectif.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/outlook.jpg"
                    alt="Seniors utilisent Outlook pour communiquer en ligne"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <p className="leading-relaxed text-inherit">
                    {seniorsDigitalPage.sections.objectif.paragraph}
                  </p>
                }
              />
            </motion.div>

            {/* Objectifs spécifiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={seniorsDigitalPage.sections.objectifsSpecifiques.title}
                imagePosition="left"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/office.jpg"
                    alt="Compétences bureautiques pour seniors"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
                    <p className="leading-relaxed mb-6 text-inherit">
                      {seniorsDigitalPage.sections.objectifsSpecifiques.intro}
                    </p>
                    <BulletList
                      items={seniorsDigitalPage.objectifsSpecifiques}
                      color="secondary"
                      lightOnDark
                      animated={false}
                    />
                  </>
                }
              />
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
              <TextWithImageOverlap
                title={seniorsDigitalPage.sections.approche.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/ai-work.jpg"
                    alt="Atelier pour seniors autour de l'usage du numérique"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
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
                  </>
                }
              />
            </motion.div>

            {/* Impact et finalité */}
            <motion.div variants={fadeInUp}>
              <TextWithImageOverlap
                title={seniorsDigitalPage.sections.impact.title}
                imagePosition="left"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/trello.jpg"
                    alt="Atelier et suivi de projets pour seniors"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
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
                  </>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
