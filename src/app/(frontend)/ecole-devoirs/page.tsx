'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { eddPageContent, eddSections, eddSectionMeta } from '@/lib/ecole-devoirs-content'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { DiscoverCard } from '@/components/ui/DiscoverCard'
import { HeroSection } from '@/components/ui/HeroSection'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero – aligned with nos-services design */}
      <HeroSection
        imageSrc="/assets/hero/devoirs.jpg"
        imageAlt="École de Devoirs Notre-Dame-Aux-Neiges"
        subtitle="École de Devoirs"
        title="Notre-Dame-Aux-Neiges"
        description="Un lieu bienveillant d'épanouissement et de réussite pour chaque enfant du quartier. Soutien scolaire, activités variées et coéducation avec les familles. L’asbl Espace Forma est un opérateur d’École de Devoirs sous l’appellation « Notre-Dame-Aux-Neiges », en référence au quartier où se déploie l’action."
      />

      {/* Intro – primary gradient card like nos-services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" raw>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-100 mb-6">
                  Accompagner chaque enfant vers la réussite
                </h2>
                <div className="space-y-4 text-primary-100/90">
                  {eddPageContent.intro.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section cards – dynamic from content, with images */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              Découvrir l&apos;École de Devoirs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-primary-700/80 dark:text-primary-100/80 mb-10 md:mb-14 max-w-2xl mx-auto text-sm md:text-base"
            >
              Projet pédagogique, activités, public, partenaires et petite histoire.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {eddSections.map((section) => {
                const meta = eddSectionMeta[section.slug]
                const imageSrc = meta?.image ?? '/assets/hero/devoirs.jpg'
                const imageAlt = meta?.imageAlt ?? section.menuTitle
                const description = meta?.shortDescription ?? ''
                return (
                  <DiscoverCard
                    key={section.slug}
                    href={`/ecole-devoirs/${section.slug}`}
                    title={section.menuTitle}
                    description={description}
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                    variants={fadeInUp}
                  />
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
