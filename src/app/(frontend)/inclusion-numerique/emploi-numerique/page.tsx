'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { TextWithImageOverlap } from '@/components/ui/TextWithImageOverlap'
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
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Objectif */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard
                variant="solid"
                title={emploiNumeriquePage.sections.objectif.title}
                raw
                hover
              >
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
              <DarkTextCard
                variant="solid"
                title={emploiNumeriquePage.sections.contenus.title}
                raw
                hover
              >
                <p className="leading-relaxed mb-6 text-inherit">
                  {emploiNumeriquePage.sections.contenus.intro}
                </p>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-primary-500/40 bg-primary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-primary-500/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-100">
                      Module de base
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-primary-50">
                      {emploiNumeriquePage.sections.contenus.modulesBase.title}
                    </h4>
                    <p className="mb-4 leading-relaxed text-primary-100/90">
                      {emploiNumeriquePage.sections.contenus.modulesBase.intro}
                    </p>
                    <ul className="space-y-1 text-primary-100/90">
                      {emploiNumeriquePage.sections.contenus.modulesBase.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-secondary-500/40 bg-secondary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-secondary-500/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-100">
                      Démarches emploi
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-secondary-50">
                      {emploiNumeriquePage.sections.contenus.demarchesEmploi.title}
                    </h4>
                    <p className="mb-4 leading-relaxed text-secondary-100/90">
                      {emploiNumeriquePage.sections.contenus.demarchesEmploi.intro}
                    </p>
                    <ul className="space-y-1 text-secondary-100/90">
                      {emploiNumeriquePage.sections.contenus.demarchesEmploi.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-primary-500/40 bg-primary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-primary-500/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-100">
                      Module avancé
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-primary-50">
                      {emploiNumeriquePage.sections.contenus.modulesAvances.title}
                    </h4>
                    <p className="mb-4 leading-relaxed text-primary-100/90">
                      {emploiNumeriquePage.sections.contenus.modulesAvances.intro}
                    </p>
                    <ul className="space-y-1 text-primary-100/90">
                      {emploiNumeriquePage.sections.contenus.modulesAvances.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Approche pédagogique */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={emploiNumeriquePage.sections.approche.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/bureautique.jpeg"
                    alt="Approche pedagogique numerique orientee emploi"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
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
                  </>
                }
              />
            </motion.div>

            {/* Suivi et évaluation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={emploiNumeriquePage.sections.suivi.title}
                imagePosition="left"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/outlook.jpg"
                    alt="Suivi numerique des demarches emploi"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
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
                  </>
                }
              />
            </motion.div>

            {/* Partenariats */}
            <motion.div variants={fadeInUp}>
              <TextWithImageOverlap
                title={emploiNumeriquePage.sections.partenariats.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/about/ecd.jpg"
                    alt="Partenariats ECD autour de l'emploi et du numerique"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
                    <p className="leading-relaxed mb-6 text-inherit">
                      {emploiNumeriquePage.sections.partenariats.intro}
                    </p>
                    <BulletList
                      items={emploiNumeriquePage.partenariatsList}
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
    </div>
  )
}

export default Page
