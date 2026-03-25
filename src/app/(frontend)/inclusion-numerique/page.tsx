'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { inclusionNumeriqueLanding } from '@/lib/content/pages/inclusionNumeriqueData'
import { epnmTestPageContent } from '@/lib/content/epnmTestPage'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc={inclusionNumeriqueLanding.hero.imageSrc}
        imageAlt={inclusionNumeriqueLanding.hero.imageAlt}
        subtitle={inclusionNumeriqueLanding.hero.subtitle}
        title={inclusionNumeriqueLanding.hero.title}
        description={inclusionNumeriqueLanding.hero.description}
      />

      {/* Intro – dispositif de proximité */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-100 mb-4">
                  {inclusionNumeriqueLanding.intro.title}
                </h2>
                <p className="text-primary-100/90 leading-relaxed text-lg mb-4">
                  {inclusionNumeriqueLanding.intro.paragraphs[0]}
                </p>
                <p className="text-primary-100/90 leading-relaxed text-lg">
                  {inclusionNumeriqueLanding.intro.paragraphs[1]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
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
              {inclusionNumeriqueLanding.programmesSection.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 text-center mb-12 max-w-2xl mx-auto"
            >
              {inclusionNumeriqueLanding.programmesSection.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
              {inclusionNumeriqueLanding.programmes.map((programme) => (
                <motion.div key={programme.href} variants={fadeInUp} className="flex min-h-0">
                  <Link href={programme.href} className="block w-full min-h-0 flex">
                    <DarkTextCard
                      variant={programme.variant}
                      title={programme.title}
                      hover
                      raw
                      className="rounded-2xl p-6 md:p-8 h-full flex flex-col w-full"
                    >
                      <p className="leading-relaxed text-inherit flex-1 mb-6">
                        {programme.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-inherit font-medium">
                        {inclusionNumeriqueLanding.programmesSection.linkLabel}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </DarkTextCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lieux d'intervention */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <DarkTextCard
                variant="solid"
                title={inclusionNumeriqueLanding.lieuxSection.title}
                raw
                hover
                className="rounded-2xl p-6 md:p-8"
              >
                <p className="leading-relaxed text-inherit mb-6">
                  {inclusionNumeriqueLanding.lieuxSection.intro}
                </p>
                <BulletList
                  items={inclusionNumeriqueLanding.lieuxIntervention}
                  lightOnDark
                  animated={false}
                />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {epnmTestPageContent.cta.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 leading-relaxed">
              {epnmTestPageContent.cta.description}
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href={epnmTestPageContent.cta.href}
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {epnmTestPageContent.cta.buttonLabel}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
