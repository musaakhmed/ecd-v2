'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { TextWithImageOverlap } from '@/components/ui/TextWithImageOverlap'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { jeunesConnectesPage } from '@/lib/content/pages/inclusionNumeriqueData'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc={jeunesConnectesPage.hero.imageSrc}
        imageAlt={jeunesConnectesPage.hero.imageAlt}
        subtitle={jeunesConnectesPage.hero.subtitle}
        title={jeunesConnectesPage.hero.title}
        description={jeunesConnectesPage.hero.description}
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
            {/* Objectifs généraux */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={jeunesConnectesPage.sections.objectifs.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {jeunesConnectesPage.sections.objectifs.intro}
                </p>
                <BulletList items={jeunesConnectesPage.objectifsGeneraux} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Deux parcours */}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6"
            >
              {jeunesConnectesPage.sections.parcours.title}
            </motion.h2>

            {/* Parcours 1 : Stages informatiques (6–12 ans) */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={jeunesConnectesPage.sections.parcours1.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {jeunesConnectesPage.sections.parcours1.intro}
                </p>

                <div className="mb-6 bg-primary-700/30 rounded-xl p-6 border border-primary-600/50">
                  <h4 className="text-xl font-semibold text-primary-50 mb-4">
                    {jeunesConnectesPage.sections.parcours1.thymio.title}
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    {jeunesConnectesPage.sections.parcours1.thymio.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 bg-secondary-700/30 rounded-xl p-6 border border-secondary-600/50">
                  <h4 className="text-xl font-semibold text-secondary-50 mb-4">
                    {jeunesConnectesPage.sections.parcours1.microbit.title}
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    {jeunesConnectesPage.sections.parcours1.microbit.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-3 pr-4">
                  <p className="leading-relaxed text-gray-200">
                    <span className="font-semibold text-primary-50">
                      {jeunesConnectesPage.sections.parcours1.objectifLabel}
                    </span>{' '}
                    {jeunesConnectesPage.sections.parcours1.objectifText}
                  </p>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Parcours 2 : Jeunes connectés (12–18 ans) */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title={jeunesConnectesPage.sections.parcours2.title} raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  {jeunesConnectesPage.sections.parcours2.intro}
                </p>

                <div className="mb-6 bg-primary-700/30 rounded-xl p-6 border border-primary-600/50">
                  <h4 className="text-xl font-semibold text-primary-50 mb-4">
                    {jeunesConnectesPage.sections.parcours2.thymio.title}
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    {jeunesConnectesPage.sections.parcours2.thymio.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 bg-secondary-700/30 rounded-xl p-6 border border-secondary-600/50">
                  <h4 className="text-xl font-semibold text-secondary-50 mb-4">
                    {jeunesConnectesPage.sections.parcours2.microbit.title}
                  </h4>
                  <ul className="space-y-2 text-gray-200 mb-4">
                    {jeunesConnectesPage.sections.parcours2.microbit.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-200 font-medium mb-2">
                    {jeunesConnectesPage.sections.parcours2.microbit.creationsTitle}
                  </p>
                  <ul className="space-y-2 text-gray-200 list-disc list-inside ml-2">
                    {jeunesConnectesPage.sections.parcours2.microbit.creations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-3 pr-4">
                  <p className="leading-relaxed text-gray-200">
                    <span className="font-semibold text-primary-50">
                      {jeunesConnectesPage.sections.parcours2.objectifLabel}
                    </span>{' '}
                    {jeunesConnectesPage.sections.parcours2.objectifText}
                  </p>
                </div>
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
            {/* Créations & projets */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={jeunesConnectesPage.sections.creations.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-secondary-800 to-secondary-900 border-secondary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/epnm/initiation/microbit.jpg"
                    alt="Projet micro:bit réalisé par des jeunes"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
                    <p className="leading-relaxed mb-6 text-inherit">
                      {jeunesConnectesPage.sections.creations.intro}
                    </p>
                    <BulletList
                      items={jeunesConnectesPage.creationsProjets}
                      color="primary"
                      lightOnDark
                      animated={false}
                    />
                  </>
                }
              />
            </motion.div>

            {/* Organisation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={jeunesConnectesPage.sections.organisation.title}
                imagePosition="left"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/trello.jpg"
                    alt="Organisation de projet et suivi des taches"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={<BulletList items={jeunesConnectesPage.organisation} lightOnDark animated={false} />}
              />
            </motion.div>

            {/* Compétences développées */}
            <motion.div variants={fadeInUp} className="mb-8">
              <TextWithImageOverlap
                title={jeunesConnectesPage.sections.competences.title}
                imagePosition="right"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/services/perfectionnement/office.jpg"
                    alt="Competences numeriques et bureautiques"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={<BulletList items={jeunesConnectesPage.competences} lightOnDark animated={false} />}
              />
            </motion.div>

            {/* Pour qui ? */}
            <motion.div variants={fadeInUp}>
              <TextWithImageOverlap
                title={jeunesConnectesPage.sections.pourQui.title}
                imagePosition="left"
                className="bg-transparent py-0"
                cardClassName="bg-gradient-to-br from-primary-800 to-primary-900 border-primary-600/50"
                imageWrapperClassName="p-0 overflow-hidden"
                image={
                  <Image
                    src="/assets/epnm/initiation/informatique.jpeg"
                    alt="Public jeune accompagne en atelier numerique"
                    width={340}
                    height={260}
                    className="h-full w-full object-cover object-center"
                  />
                }
                content={
                  <>
                    <p className="leading-relaxed mb-4 text-inherit">
                      {jeunesConnectesPage.sections.pourQui.introStructures}
                    </p>
                    <BulletList
                      items={jeunesConnectesPage.pourQuiStructures}
                      lightOnDark
                      animated={false}
                      className="mb-6"
                    />
                    <p className="leading-relaxed mb-4 text-inherit">
                      {jeunesConnectesPage.sections.pourQui.introSouhaitant}
                    </p>
                    <BulletList items={jeunesConnectesPage.pourQuiSouhaitant} lightOnDark animated={false} />
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
