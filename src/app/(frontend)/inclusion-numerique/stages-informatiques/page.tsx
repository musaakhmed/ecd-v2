'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
      {/* Stages Informatiques Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Title */}
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                Stages informatiques (6–12 ans)
              </h2>
              <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 font-semibold mb-4">
                Apprendre, coder, créer : un parcours ludique pour découvrir le numérique
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                ECD asbl propose des stages scolaires destinés aux enfants de 6 à 12 ans, centrés sur
                l&apos;initiation à l&apos;informatique, la programmation et la robotique. À travers des
                activités créatives et des défis ludiques, les jeunes développent leurs compétences
                numériques tout en s&apos;amusant.
              </p>
            </motion.div>

            {/* Objectifs du stage */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Objectifs du stage
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Découvrir la programmation et la pensée logique</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Explorer la robotique éducative avec Thymio et Micro:bit</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Réaliser des créations technologiques inspirées ou imaginées par les enfants
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Stimuler l&apos;ingéniosité, la coopération et la créativité</span>
                </li>
              </ul>
            </motion.div>

            {/* Des ateliers pratiques et motivants */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Des ateliers pratiques et motivants
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les enfants expérimentent différents outils numériques et robotiques :
              </p>

              {/* Thymio */}
              <div className="mb-6 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-xl p-6 border border-primary-100 dark:border-primary-900/50">
                <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
                  Thymio
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Compréhension des capteurs, mouvements et comportements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Tests des différents modes (suivi de ligne, évitement, lumière, sons)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Premiers pas en programmation visuelle</span>
                  </li>
                </ul>
              </div>

              {/* Micro:bit */}
              <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-xl p-6 border border-secondary-100 dark:border-secondary-900/50">
                <h4 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
                  Micro:bit
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Initiation au codage (MakeCode)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Création d&apos;outils interactifs : mini-jeux, détecteurs, signaux lumineux
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Assemblages simples pour construire des objets autonomes</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Créations & projets */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-secondary-100 dark:border-secondary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Créations & projets
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Chaque enfant réalise son propre projet : robots autonomes, mini-jeux programmés,
                parcours logiques, animations interactives… Un espace d&apos;expression libre où
                l&apos;imagination devient réalité.
              </p>
            </motion.div>

            {/* Organisation */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Organisation
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>2 heures de séance par semaine</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Ateliers répartis sur plusieurs semaines</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Alternance entre découverte, défis, programmation et création personnelle
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Compétences développées */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Compétences développées
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Logique & pensée algorithmique</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Créativité et imagination</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Travail en équipe & communication</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Résolution de problèmes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Compréhension du numérique et de ses usages</span>
                </li>
              </ul>
            </motion.div>

            {/* Pour qui ? */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Pour qui ?
              </h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Écoles, maisons de quartier, associations, structures périscolaires souhaitant :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 text-primary-600 dark:text-primary-400 font-bold shrink-0">
                    ✓
                  </span>
                  <span>proposer des activités innovantes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 text-primary-600 dark:text-primary-400 font-bold shrink-0">
                    ✓
                  </span>
                  <span>initier les enfants aux compétences numériques de demain</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 text-primary-600 dark:text-primary-400 font-bold shrink-0">
                    ✓
                  </span>
                  <span>enrichir leur offre éducative et ludique</span>
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
