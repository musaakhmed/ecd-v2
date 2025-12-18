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

  const competencesNumeriques = [
    {
      title: 'Identité numérique & démarches administratives',
      description: 'Utilisation de l\'eID, Itsme, portails administratifs (Mutuelles, ONEM, My Belgium…).',
    },
    {
      title: 'Navigation Internet & recherches en ligne',
      description: 'Méthodes de recherche, vérification des sources, pratiques sécurisées.',
    },
    {
      title: 'Messagerie électronique',
      description: 'Gestion professionnelle des e-mails, pièces jointes, organisation, bonnes pratiques.',
    },
    {
      title: 'Outils de visioconférence (Teams & Zoom)',
      description: 'Création de réunions, partage d&apos;écran, règles de communication à distance.',
    },
    {
      title: 'Signatures électroniques',
      description: 'Introduction aux outils de signature numérique, validation, sécurité.',
    },
    {
      title: 'Découverte de ChatGPT et outils IA accessibles',
      description: 'Premiers usages, rédaction assistée, résumé, organisation, bonnes pratiques.',
    },
  ]

  const bienEtreModules = [
    {
      title: 'Sécurité sur le lieu de travail',
      description: 'Identification des dangers, gestes préventifs, protocoles simples pour éviter les accidents.',
    },
    {
      title: 'Ergonomie & prévention des TMS',
      description: 'Bonnes postures, techniques pour réduire les efforts, optimisation des mouvements, choix du matériel.',
    },
    {
      title: 'Organisation du travail',
      description: 'Gestion du temps, priorisation, structuration des tâches, efficacité au quotidien.',
    },
    {
      title: 'Communication professionnelle',
      description: 'Posture face aux clients, gestion des demandes, résolution de situations délicates.',
    },
    {
      title: 'Gestion du stress & motivation',
      description: 'Stratégies de bien-être, équilibre émotionnel, prévention de l\'épuisement.',
    },
    {
      title: 'Prévention des risques domestiques & psychosociaux',
      description: 'Sécurité en intervention à domicile, gestion des imprévus, respect des limites professionnelles.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/titres-services.jpg"
            alt="Formations en Titres Services"
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
              Formations en Titres Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Offre complète de formations destinées aux travailleurs, encadrants et équipes
              administratives, alliant compétences numériques, sécurité, ergonomie et bien-être au
              travail.
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
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                ECD asbl propose une offre complète de formations destinées aux travailleurs,
                encadrants et équipes administratives. Ces modules permettent d&apos;acquérir les
                compétences numériques essentielles et les bonnes pratiques de bien-être au travail,
                tout en favorisant l&apos;efficacité professionnelle et la prévention des risques.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compétences numériques */}
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
              Compétences numériques professionnelles
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto text-lg"
            >
              Ces formations visent à renforcer l&apos;autonomie numérique des travailleurs et leur
              capacité à utiliser efficacement les outils nécessaires à leurs fonctions.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {competencesNumeriques.map((module, index) => (
                <motion.div
                  key={module.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
                    {module.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-6 shadow-lg max-w-3xl mx-auto"
            >
              <p className="text-center text-gray-700 dark:text-gray-200 font-medium">
                <strong>Objectif</strong> : développer l&apos;autonomie, la maîtrise des outils
                essentiels et la capacité à réaliser des tâches numériques en toute confiance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bien-être et prévention */}
      <section className="py-16 md:py-20">
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
              Compétences de bien-être, ergonomie & prévention
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto text-lg"
            >
              Ces modules améliorent les conditions de travail, réduisent la pénibilité et
              renforcent la sécurité, particulièrement pour les métiers d&apos;intervention à domicile
              ou de proximité.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bienEtreModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
                    {module.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
