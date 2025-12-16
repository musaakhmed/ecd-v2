'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { esdPageContent } from '@/lib/about-content'

const Page = () => {
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

  if (!esdPageContent) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const content = esdPageContent

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-600 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4"
            >
              Opérateur d'économie sociale
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Entreprise Sociale et Démocratique : un dispositif d'insertion professionnelle
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 leading-relaxed">
              Espace Cultures & Développement est reconnue comme entreprise sociale d'insertion mandatée et
              spécifiquement agréée en tant qu'Entreprise Sociale et Démocratique (ESD). Cet agrément atteste d'un
              engagement structurel en faveur de l'inclusion, de l'emploi durable et du développement des compétences
              des publics éloignés du marché du travail.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Un dispositif d'insertion socioprofessionnelle
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Dans ce cadre, l'association a mis en place un dispositif d'insertion socioprofessionnelle (ISP) centré
                sur le métier d'animateur·trice – médiateur·trice numérique, fonction en plein essor dans le contexte de
                la transition digitale et de la lutte contre la fracture numérique.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                À travers ces missions, les travailleurs développent progressivement un référentiel de compétences
                professionnelles reconnu dans les secteurs du numérique social, de la formation et de l'éducation
                permanente.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-3">Repères clés</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                {content.reperePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Métier */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-6">
              {content.metier.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.metier.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.metier.missions.map((mission, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Parcours */}
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              {content.parcours.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              {content.parcours.description}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {content.parcours.dimensions.map((dimension, index) => (
                <motion.div
                  key={dimension.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-900/60"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">{dimension.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed ml-14">{dimension.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Public cible */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
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
              {content.publicCible.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.publicCible.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl border border-secondary-100 dark:border-secondary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.publicCible.publics.map((publicItem, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>{publicItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
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
              {content.accompagnement.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.accompagnement.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.accompagnement.elements.map((element, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-900/60"
                >
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{element}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAC */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
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
              {content.pac.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.pac.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.pac.objectifs.map((objectif, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{objectif}</span>
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

