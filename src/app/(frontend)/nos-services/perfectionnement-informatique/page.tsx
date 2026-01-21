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
            alt="Perfectionnement en informatique"
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
              Perfectionnement en informatique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Approfondissez vos connaissances informatiques et maîtrisez des outils avancés pour
              optimiser votre productivité et développer de nouvelles compétences professionnelles.
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
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Perfectionnement en informatique
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Développer une expertise opérationnelle sur les suites bureautiques et
                    collaboratives les plus utilisées.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Structurer et automatiser les tâches répétitives pour améliorer
                    l&apos;efficacité individuelle et collective.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Renforcer la maîtrise des outils numériques professionnels, y compris les
                    solutions cloud, les outils de gestion documentaire et les plateformes de
                    communication.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Intégrer les usages avancés de l&apos;intelligence artificielle appliquée au
                    travail.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Soutenir les organisations dans la montée en compétences de leurs équipes et
                    dans la modernisation de leurs processus internes.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenus des modules */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-12"
            >
              Contenus des modules – Niveau avancé
            </motion.h2>

            {/* Module 1 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  1. Bureautique professionnelle avancée
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-3">
                      Word
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-200 ml-4">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          Création de modèles institutionnels, automatisation via styles et champs.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>Table des matières, index, références croisées.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>Formulaires dynamiques et documents interactifs.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-3">
                      Excel
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-200 ml-4">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          Fonctions avancées : RECHERCHE, INDEX/EQUIV, conditions imbriquées.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          Tableaux structurés, automatisation, macros simples (VBA
                          d&apos;initiation).
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          Tableaux croisés dynamiques complexes, segmentation et analyse de données.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-3">
                      PowerPoint
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-200 ml-4">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>Conception visuelle avancée, charte graphique, storytelling.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>Modèles professionnels, animations complexes, vidéos intégrées.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          Présentations interactives (plan de navigation, liens internes).
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 2 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  2. Environnements collaboratifs & digital workplace
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Structuration d&apos;un écosystème numérique : Teams / SharePoint / OneDrive
                      ou Google Workspace.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Gestion documentaire avancée : versions, métadonnées, droits d&apos;accès,
                      workflows.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Coédition en temps réel, gestion de projets numériques, automatisation des
                      flux.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Utilisation professionnelle de Teams (canaux thématiques, applications
                      intégrées, réunions enrichies).
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Module 3 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  3. Gestion avancée des communications professionnelles
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Techniques de rédaction professionnelle assistée par IA.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Gestion avancée d&apos;Outlook : règles, automatisations, signatures
                      multiples, boîtes partagées.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Organisation de réunions complexes, planification d&apos;équipe, formulaires
                      d&apos;inscription.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Module 4 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  4. Cybersécurité appliquée aux organisations
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Analyse des risques numériques courants dans les structures sociales et
                      associatives.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Paramétrage de la double authentification, gestion des accès, bonnes pratiques
                      RGPD.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Détection des tentatives de phishing, prévention des fuites de données.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Sécurisation des appareils mobiles utilisés dans le cadre professionnel.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Module 5 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  5. Intelligence artificielle appliquée au travail
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Utilisation de Copilot, ChatGPT, Gemini Pro dans les tâches quotidiennes.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Création de prompts professionnels pour : rédaction, analyse, synthèse,
                      traduction, gestion de projets.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Automatisation de documents, procédures internes, modèles de mails.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Limites de l&apos;IA, confidentialité, bonnes pratiques responsables.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Module 6 */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-6">
                  6. Outils métiers & productivité
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Tableaux de bord (Excel / Google Sheets).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Outils de gestion d&apos;équipe : Trello, Planner, Notion.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Création de formulaires avancés (Microsoft Forms / Google Forms) + analyse de
                      données.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>
                      Introduction aux automatisations simples : Power Automate, Zapier (selon
                      contexte).
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publics concernés */}
      <section className="py-12 bg-white dark:bg-gray-950">
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
              Publics concernés
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Encadrants, responsables d&apos;équipes, travailleurs administratifs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Professionnels du secteur associatif, maisons de quartier, CPAS, structures
                    d&apos;accueil.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Entreprises Titres-Services (encadrants, responsables de planning,
                    administratifs).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Travailleurs en transition, Article 60/ACS cherchant une montée en compétences
                    rapide.
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
