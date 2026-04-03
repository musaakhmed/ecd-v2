'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { esdPageContent } from '@/lib/content/pages/about-content'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { HeroSection } from '@/components/ui/HeroSection'
import { ParallaxSection } from '@/components/ui/ParallaxSection'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ContentSection } from '@/components/ui/ContentSection'
import { NumberedCard } from '@/components/ui/NumberedCard'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { DarkIntroSection } from '@/components/ui/DarkIntroSection'

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

      <DarkIntroSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-6">
          {content.presentation.title}
        </h2>
        {content.presentation.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index < content.presentation.paragraphs.length - 1 ? 'mb-4' : ''}
          >
            {paragraph}
          </p>
        ))}
      </DarkIntroSection>

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

      <ImageCardHero
        title={content.publicCible.title}
        imageSrc="/assets/operateur/ESD/public-cible-partenariat.jpg"
        imageAlt="Public cible en partenariat"
        imageOnLeft
        description={content.publicCible.description}
        listItems={content.publicCible.publics}
        conclusion={content.publicCible.conclusion}
      />

      <ImageCardHero
        title={content.accompagnement.title}
        imageSrc="/assets/operateur/ESD/accompagnement.jpg"
        imageAlt="Accompagnement professionnel et social"
        imageOnLeft={false}
        description={content.accompagnement.description}
        listItems={content.accompagnement.elements}
      />

      <ImageCardHero
        title={content.pac.title}
        imageSrc="/assets/operateur/ESD/acquisition-de-competences.jpg"
        imageAlt="Plan d'Acquisition de Compétences"
        imageOnLeft
        description={content.pac.description}
        intro={content.pac.intro}
        listItems={content.pac.objectifs}
        conclusion={content.pac.conclusion}
      />
    </div>
  )
}

export default Page
