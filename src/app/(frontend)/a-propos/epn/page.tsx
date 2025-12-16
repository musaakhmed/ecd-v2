'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { epnPageContent } from '@/lib/about-content'

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

  const content = epnPageContent

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
              Opérateur d'EPN labellisé
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Inclusion numérique mobile : un dispositif labellisé et itinérant
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 leading-relaxed">
              Espace Cultures & Développement est un opérateur d'inclusion numérique labellisé en Région bruxelloise
              et détenteur du label fédéral Connectoo, attestant d'une expertise dans l'accompagnement de divers
              publics.
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
                {content.label.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{content.label.description}</p>
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

      {/* Critères */}
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
              {content.label.criteres.title}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.label.criteres.items.map((item, index) => (
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

      {/* Équipement */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              {content.equipement.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {content.equipement.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {content.equipement.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md border border-primary-100 dark:border-primary-900/60 text-center"
                >
                  <p className="text-gray-700 dark:text-gray-200 font-medium">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publics cibles */}
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
              {content.publicsCibles.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.publicsCibles.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl border border-secondary-100 dark:border-secondary-900/50 shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.publicsCibles.publics.map((publicItem, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{publicItem}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interventions */}
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
              {content.interventions.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.interventions.description}
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {content.interventions.types.map((type, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-primary-100 dark:border-primary-900/60"
                >
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl border border-primary-100 dark:border-primary-900/50 shadow-lg p-8"
            >
              <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-4 text-center">
                L'EPNM garantit :
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                {content.interventions.garanties.map((garantie, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>{garantie}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Connectoo */}
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
              {content.connectoo.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              {content.connectoo.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl border border-secondary-100 dark:border-secondary-900/50 shadow-lg p-8"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                {content.connectoo.attestations.map((attestation, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>{attestation}</span>
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

