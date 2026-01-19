'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { esdPageContent } from '@/lib/about-content'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { HeroSection } from '@/components/ui/HeroSection'
import { ParallaxSection } from '@/components/ui/ParallaxSection'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ParagraphSection } from '@/components/ui/ParagraphSection'
import { ContentSection } from '@/components/ui/ContentSection'
import { NumberedCard } from '@/components/ui/NumberedCard'

const Page = () => {
  const content = esdPageContent

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <HeroSection
        imageSrc="/assets/operateur/economie-sociale.png"
        imageAlt="Économie Sociale"
        subtitle={content.hero.subtitle}
        title={content.hero.title}
        description={content.hero.description}
      />

      {/* Présentation */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <ParagraphSection
            title={content.presentation.title}
            paragraphs={content.presentation.paragraphs}
          />
        </motion.div>
      </SectionWrapper>

      {/* Métier */}
      <ParallaxSection imageSrc="/assets/operateur/parallax/metier-social.png" overlayType="strong">
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
            {content.metier.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
          >
            {content.metier.description}
          </motion.p>
          <ContentSection
            title=""
            items={content.metier.missions}
            conclusion={content.metier.conclusion}
            variant="transparent"
            bulletColor="primary"
            descriptionCentered={false}
          />
        </motion.div>
      </ParallaxSection>

      {/* Parcours */}
      <SectionWrapper
        title={content.parcours.title}
        description={content.parcours.description}
        bgVariant="gradient-primary"
        maxWidth="full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {content.parcours.dimensions.map((dimension, index) => (
            <NumberedCard
              key={dimension.title}
              number={index + 1}
              title={dimension.title}
              description={dimension.description}
              hover
            />
          ))}
        </div>
        {content.parcours.conclusion && (
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed text-lg"
          >
            {content.parcours.conclusion}
          </motion.p>
        )}
      </SectionWrapper>

      {/* Public cible */}
      <SectionWrapper
        title={content.publicCible.title}
        description={content.publicCible.description}
        maxWidth="xl"
      >
        <ContentSection
          title=""
          items={content.publicCible.publics}
          conclusion={content.publicCible.conclusion}
          variant="gradient-secondary"
          bulletColor="secondary"
          descriptionCentered={false}
        />
      </SectionWrapper>

      {/* Accompagnement */}
      <SectionWrapper
        title={content.accompagnement.title}
        maxWidth="xl"
        bgVariant="gradient-primary"
      >
        <ContentSection
          title=""
          description={content.accompagnement.description}
          items={content.accompagnement.elements}
          variant="gradient-primary"
          bulletColor="primary"
          descriptionCentered={false}
        />
      </SectionWrapper>

      {/* PAC */}
      <SectionWrapper title={content.pac.title} description={content.pac.description} maxWidth="xl">
        <ContentSection
          title=""
          intro={content.pac.intro}
          items={content.pac.objectifs}
          conclusion={content.pac.conclusion}
          variant="gradient-primary"
          bulletColor="primary"
          descriptionCentered={false}
        />
      </SectionWrapper>
    </div>
  )
}

export default Page
