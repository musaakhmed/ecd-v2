'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/transition-numerique.png"
            alt="Initiation en informatique"
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
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4"
            >
              Nos Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Initiation en informatique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              ECD asbl développe un programme complet d'initiation en informatique visant à offrir un
              premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un
              large public et s'adapte aux besoins spécifiques de chacun.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                À propos de l'initiation
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                ECD asbl développe un programme complet d'initiation en informatique visant à offrir un
                premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un
                large public et s'adapte aux besoins spécifiques de chacun.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publics ciblés */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-12"
            >
              Publics ciblés
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Jeunes
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Découverte de l'ordinateur, bonnes pratiques numériques, premiers usages scolaires
                  et citoyens.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Adultes
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Acquisition d'autonomie dans l'usage des outils numériques du quotidien et
                  administratifs.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Seniors
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Accompagnement progressif, sécurité en ligne, confiance dans l'usage de
                  l'ordinateur et du smartphone.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Apprenants en alpha et FLE
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Modules simplifiés, vocabulaire visuel, exercices pratiques adaptés aux niveaux
                  linguistiques.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectifs généraux */}
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-8"
            >
              Objectifs généraux
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>Favoriser l'autonomie numérique au quotidien.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Permettre l'accès aux services en ligne (e-administration, recherche d'emploi,
                    communication).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Développer les compétences de base : utilisation d'un ordinateur, gestion de
                    fichiers, navigation Internet.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Renforcer la confiance, lutter contre l'exclusion numérique et soutenir les
                    parcours d'insertion.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
