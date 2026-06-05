'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { BulletList } from '@/components/ui/BulletList'
import { AlternatingImageCards } from '@/components/ui/AlternatingImageCards'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { connectesAutonomesPage } from '@/lib/content/pages/inclusionNumeriqueData'
import { DarkIntroSection } from '@/components/ui/DarkIntroSection'
import Image from 'next/image'

const cardClassName = {
  primary: 'bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50',
  secondary: 'bg-gradient-to-br from-secondary-800 to-secondary-900 ',
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

      <DarkIntroSection classes="!bg-gradient-to-br bg-gradient-to-br from-primary-800 to-primary-900 !-mb-15">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-200 mb-6">
          {connectesAutonomesPage.sections.objectif.title}
        </h2>
        <p className="text-primary-50">
          Le projet
          <span className="font-semibold">
            « Connectés & Autonomes : l’informatique au service des seniors »
          </span>{' '}
          a pour objectif de lutter contre la fracture numérique touchant les personnes âgées en
          renforçant leurs compétences numériques et leur autonomie dans l’utilisation des outils
          digitaux du quotidien.
        </p>
      </DarkIntroSection>

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
              className="bg-transparent mb-8"
              items={[
                {
                  title: connectesAutonomesPage.sections.objectifsSpecifiques.title,
                  imageSrc: '/assets/seniors/seniors-objectif.jpg',
                  imageAlt: 'Compétences numériques pour seniors',
                  cardClassName: cardClassName.primary,
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
                  imageSrc: '/assets/seniors/seniors-groupe.jpg',
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
                  imageSrc: '/assets/seniors/senior-atelier.jpg',
                  imageAlt: 'Atelier et accompagnement numérique pour seniors',
                  cardClassName: cardClassName.primary,
                  content: (
                    <p className="leading-relaxed text-inherit">
                      {connectesAutonomesPage.sections.impact.paragraph}
                    </p>
                  ),
                },
                {
                  title: connectesAutonomesPage.sections.lieuPeriode.title,
                  imageSrc: '/assets/seniors/senior-campus.jpg',
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
            <DarkIntroSection classes="!bg-gradient-to-br from-primary-800 to-primary-900 !mb-0 mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-200 mb-6 text-center">
                Projet soutenu par la Loterie Nationale et ses joueurs
              </h2>

              <Image
                className="mx-auto"
                src="/assets/partenaires/Logo_LOTNAT_RGB_Baseline_Horiz.png"
                alt="La Lotterie Nationale soutient l'inclusion numérique des seniors"
                width={400}
                height={400}
              />
            </DarkIntroSection>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
