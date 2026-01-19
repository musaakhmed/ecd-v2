'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { quiSommesNousPageContent } from '@/lib/about-content'

const Page = () => {
  const content = quiSommesNousPageContent
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrolled = window.scrollY - rect.top
        // Parallax effect: background moves at 30% of scroll speed
        setScrollY(scrolled * 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/economie-sociale.png"
            alt="Qui sommes-nous"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/80 to-secondary-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              {content.introduction.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 dark:text-gray-200 leading-relaxed text-lg ${
                    index < content.introduction.paragraphs.length - 1 ? 'mb-4' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approche interculturelle */}
      <section ref={parallaxRef} className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -inset-y-[100%]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY}px) scale(1.1)`,
              willChange: 'transform',
            }}
          >
            <Image
              src="/assets/operateur/parallax/approche-participative.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Stronger overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/70 dark:from-gray-950/70 dark:via-gray-950/80 dark:to-gray-950/70 pointer-events-none" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
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
              {content.approche.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.approche.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                {content.approche.intro}
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.approche.objectifs.map((objectif, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{objectif}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-6">
                {content.approche.conclusion}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Domaines d'action */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-12"
            >
              {content.domaines.title}
            </motion.h2>

            {/* 1. Soutien scolaire */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100">
                  {content.domaines.soutienScolaire.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 ml-16">
                {content.domaines.soutienScolaire.description}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 ml-16">
                {content.domaines.soutienScolaire.points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-6 ml-16 italic">
                {content.domaines.soutienScolaire.conclusion}
              </p>
            </motion.div>

            {/* 2. Inclusion numérique */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100">
                  {content.domaines.inclusionNumerique.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 ml-16">
                {content.domaines.inclusionNumerique.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6 ml-16">
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {content.domaines.inclusionNumerique.publics.left.map((publicItem, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{publicItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    {content.domaines.inclusionNumerique.publics.right.map((publicItem, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                        <span>{publicItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 ml-16 font-semibold">
                {content.domaines.inclusionNumerique.interventions.title}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 ml-16">
                {content.domaines.inclusionNumerique.interventions.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-6 ml-16 italic">
                {content.domaines.inclusionNumerique.conclusion}
              </p>
            </motion.div>

            {/* 3. Formations Titres-Services */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100">
                  {content.domaines.formationsTitresServices.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 ml-16">
                {content.domaines.formationsTitresServices.description}
              </p>

              <div className="ml-16 grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-xl p-6 border border-primary-100 dark:border-primary-900/50">
                  <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
                    {content.domaines.formationsTitresServices.competencesNumeriques.title}
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    {content.domaines.formationsTitresServices.competencesNumeriques.items.map(
                      (item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-xl p-6 border border-secondary-100 dark:border-secondary-900/50">
                  <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
                    {content.domaines.formationsTitresServices.competencesBienEtre.title}
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                    {content.domaines.formationsTitresServices.competencesBienEtre.items.map(
                      (item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-6 ml-16 italic">
                {content.domaines.formationsTitresServices.conclusion}
              </p>
            </motion.div>

            {/* 4. Ateliers parentalité */}
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100">
                  {content.domaines.ateliersParentalite.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 ml-16">
                {content.domaines.ateliersParentalite.description}
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 ml-16">
                {content.domaines.ateliersParentalite.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page

