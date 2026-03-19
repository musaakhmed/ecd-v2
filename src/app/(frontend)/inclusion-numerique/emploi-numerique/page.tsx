'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { emploiNumeriquePage } from '@/lib/content/pages/inclusionNumeriqueData'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc={emploiNumeriquePage.hero.imageSrc}
        imageAlt={emploiNumeriquePage.hero.imageAlt}
        subtitle={emploiNumeriquePage.hero.subtitle}
        title={emploiNumeriquePage.hero.title}
        description={emploiNumeriquePage.hero.description}
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
            {/* Objectif */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={emploiNumeriquePage.sections.objectif.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.objectif.paragraphs[0]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.objectif.paragraphs[1]}
                </p>
                <BulletList items={emploiNumeriquePage.objectifList} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Public cible */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard
                variant="gradient-secondary"
                title={emploiNumeriquePage.sections.publicCible.title}
                raw
                hover
              >
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.publicCible.intro}
                </p>
                <BulletList
                  items={emploiNumeriquePage.publicCible}
                  color="secondary"
                  lightOnDark
                  animated={false}
                />
              </DarkTextCard>
            </motion.div>

            {/* Contenus pédagogiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={emploiNumeriquePage.sections.contenus.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.contenus.intro}
                </p>

                <div className="mb-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">
                    {emploiNumeriquePage.sections.contenus.modulesBase.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {emploiNumeriquePage.sections.contenus.modulesBase.intro}
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    {emploiNumeriquePage.sections.contenus.modulesBase.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">
                    {emploiNumeriquePage.sections.contenus.demarchesEmploi.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {emploiNumeriquePage.sections.contenus.demarchesEmploi.intro}
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    {emploiNumeriquePage.sections.contenus.demarchesEmploi.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">
                    {emploiNumeriquePage.sections.contenus.modulesAvances.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {emploiNumeriquePage.sections.contenus.modulesAvances.intro}
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    {emploiNumeriquePage.sections.contenus.modulesAvances.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Approche pédagogique */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard
                variant="gradient-secondary"
                title={emploiNumeriquePage.sections.approche.title}
                raw
                hover
              >
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.approche.paragraphs[0]}
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.approche.paragraphs[1]}
                </p>
                <BulletList
                  items={emploiNumeriquePage.approcheList}
                  color="secondary"
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="leading-relaxed text-inherit">
                  {emploiNumeriquePage.sections.approche.paragraphs[2]}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Suivi et évaluation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={emploiNumeriquePage.sections.suivi.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.suivi.paragraphs[0]}
                </p>
                <BulletList
                  items={emploiNumeriquePage.suiviItems}
                  lightOnDark
                  animated={false}
                  className="mb-6"
                />
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.suivi.paragraphs[1]}
                </p>
                <p className="leading-relaxed text-inherit">
                  {emploiNumeriquePage.sections.suivi.paragraphs[2]}
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Partenariats */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title={emploiNumeriquePage.sections.partenariats.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.partenariats.intro}
                </p>
                <BulletList items={emploiNumeriquePage.partenariatsList} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
