'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { BulletList } from '@/components/ui/BulletList'
import { AlternatingImageCards } from '@/components/ui/AlternatingImageCards'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { connectesAutonomesPage } from '@/lib/content/pages/inclusionNumeriqueData'

const cardClassName = {
  primary: 'bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50',
  secondary: 'bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50',
} as const

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <HeroSection
        imageSrc={connectesAutonomesPage.hero.imageSrc}
        imageAlt={connectesAutonomesPage.hero.imageAlt}
        subtitle={connectesAutonomesPage.hero.subtitle}
        title={connectesAutonomesPage.hero.title}
        description={connectesAutonomesPage.hero.description}
      />

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-6 pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <AlternatingImageCards
              variants={fadeInUp}
              gapClassName="space-y-8"
              className="bg-transparent"
              items={[
                {
                  title: connectesAutonomesPage.sections.objectif.title,
                  imageSrc: '/assets/services/perfectionnement/outlook.jpg',
                  imageAlt: 'Seniors utilisent Outlook pour communiquer en ligne',
                  cardClassName: cardClassName.primary,
                  content: (
                    <p className="leading-relaxed text-inherit">
                      {connectesAutonomesPage.sections.objectif.paragraph}
                    </p>
                  ),
                },
                {
                  title: connectesAutonomesPage.sections.objectifsSpecifiques.title,
                  imageSrc: '/assets/services/perfectionnement/office.jpg',
                  imageAlt: 'Compétences numériques pour seniors',
                  cardClassName: cardClassName.secondary,
                  content: (
                    <>
                      <p className="leading-relaxed mb-6 text-inherit">
                        {connectesAutonomesPage.sections.objectifsSpecifiques.intro}
                      </p>
                      <BulletList
                        items={connectesAutonomesPage.objectifsSpecifiques}
                        color="secondary"
                        lightOnDark
                        animated={false}
                      />
                    </>
                  ),
                },
                {
                  title: connectesAutonomesPage.sections.approche.title,
                  imageSrc: '/assets/services/perfectionnement/ai-work.jpg',
                  imageAlt: "Atelier pour seniors autour de l'usage du numérique",
                  cardClassName: cardClassName.primary,
                  content: (
                    <>
                      <p className="leading-relaxed mb-6 text-inherit">
                        {connectesAutonomesPage.sections.approche.paragraphs[0]}
                      </p>
                      <p className="leading-relaxed mb-6 text-inherit">
                        {connectesAutonomesPage.sections.approche.paragraphs[1]}
                      </p>
                      <p className="leading-relaxed text-inherit">
                        {connectesAutonomesPage.sections.approche.paragraphs[2]}
                      </p>
                    </>
                  ),
                },
                {
                  title: connectesAutonomesPage.sections.impact.title,
                  imageSrc: '/assets/services/perfectionnement/trello.jpg',
                  imageAlt: 'Atelier et accompagnement numérique pour seniors',
                  cardClassName: cardClassName.secondary,
                  content: (
                    <p className="leading-relaxed text-inherit">
                      {connectesAutonomesPage.sections.impact.paragraph}
                    </p>
                  ),
                },
                {
                  title: connectesAutonomesPage.sections.lieuPeriode.title,
                  imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
                  imageAlt: 'Atelier numérique pour seniors à Bruxelles',
                  cardClassName: cardClassName.primary,
                  content: (
                    <p className="leading-relaxed text-inherit">
                      {connectesAutonomesPage.sections.lieuPeriode.paragraph}
                    </p>
                  ),
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
