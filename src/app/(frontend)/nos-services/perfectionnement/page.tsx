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

  const modules = [
    {
      title: 'Bureautique professionnelle avancée',
      items: [
        {
          subtitle: 'Word',
          points: [
            'Création de modèles institutionnels, automatisation via styles et champs',
            'Table des matières, index, références croisées',
            'Formulaires dynamiques et documents interactifs',
          ],
        },
        {
          subtitle: 'Excel',
          points: [
            'Fonctions avancées : RECHERCHE, INDEX/EQUIV, conditions imbriquées',
            'Tableaux structurés, automatisation, macros simples (VBA d\'initiation)',
            'Tableaux croisés dynamiques complexes, segmentation et analyse de données',
          ],
        },
        {
          subtitle: 'PowerPoint',
          points: [
            'Conception visuelle avancée, charte graphique, storytelling',
            'Modèles professionnels, animations complexes, vidéos intégrées',
            'Présentations interactives (plan de navigation, liens internes)',
          ],
        },
      ],
    },
    {
      title: 'Environnements collaboratifs & digital workplace',
      points: [
        'Structuration d\'un écosystème numérique : Teams / SharePoint / OneDrive ou Google Workspace',
        'Gestion documentaire avancée : versions, métadonnées, droits d\'accès, workflows',
        'Coédition en temps réel, gestion de projets numériques, automatisation des flux',
        'Utilisation professionnelle de Teams (canaux thématiques, applications intégrées, réunions enrichies)',
      ],
    },
    {
      title: 'Gestion avancée des communications professionnelles',
      points: [
        'Techniques de rédaction professionnelle assistée par IA',
        'Gestion avancée d\'Outlook : règles, automatisations, signatures multiples, boîtes partagées',
        'Organisation de réunions complexes, planification d\'équipe, formulaires d\'inscription',
      ],
    },
    {
      title: 'Cybersécurité appliquée aux organisations',
      points: [
        'Analyse des risques numériques courants dans les structures sociales et associatives',
        'Paramétrage de la double authentification, gestion des accès, bonnes pratiques RGPD',
        'Détection des tentatives de phishing, prévention des fuites de données',
        'Sécurisation des appareils mobiles utilisés dans le cadre professionnel',
      ],
    },
    {
      title: 'Intelligence artificielle appliquée au travail',
      points: [
        'Utilisation de Copilot, ChatGPT, Gemini Pro dans les tâches quotidiennes',
        'Création de prompts professionnels pour : rédaction, analyse, synthèse, traduction, gestion de projets',
        'Automatisation de documents, procédures internes, modèles de mails',
        'Limites de l\'IA, confidentialité, bonnes pratiques responsables',
      ],
    },
    {
      title: 'Outils métiers & productivité',
      points: [
        'Tableaux de bord (Excel / Google Sheets)',
        'Outils de gestion d\'équipe : Trello, Planner, Notion',
        'Création de formulaires avancés (Microsoft Forms / Google Forms) + analyse de données',
        'Introduction aux automatisations simples : Power Automate, Zapier (selon contexte)',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/devoirs.jpg"
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
              Développez une expertise opérationnelle sur les suites bureautiques et
              collaboratives, automatisez vos tâches et renforcez la maîtrise des outils numériques
              professionnels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-8"
            >
              Objectifs
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-8 md:p-10 shadow-lg"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Développer une expertise opérationnelle sur les suites bureautiques et
                    collaboratives les plus utilisées
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Structurer et automatiser les tâches répétitives pour améliorer l&apos;efficacité
                    individuelle et collective
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Renforcer la maîtrise des outils numériques professionnels, y compris les
                    solutions cloud, les outils de gestion documentaire et les plateformes de
                    communication
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Intégrer les usages avancés de l&apos;intelligence artificielle appliquée au travail
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Soutenir les organisations dans la montée en compétences de leurs équipes et dans
                    la modernisation de leurs processus internes
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
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
              Contenus des modules – Niveau avancé
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed text-lg"
            >
              Des modules approfondis pour maîtriser les outils numériques professionnels et
              développer une expertise opérationnelle.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2">
              {modules.map((module, index) => (
                <motion.article
                  key={module.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-lg p-6 md:p-8 transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100">
                      {module.title}
                    </h3>
                  </div>
                  {module.items ? (
                    <div className="space-y-5">
                      {module.items.map((item, itemIndex) => (
                        <div
                          key={item.subtitle}
                          className={`${
                            itemIndex > 0 ? 'pt-5 border-t border-primary-200 dark:border-primary-800' : ''
                          }`}
                        >
                          <h4 className="text-base font-semibold text-primary-700 dark:text-primary-300 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            {item.subtitle}
                          </h4>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                            {item.points.map((point, idx) => (
                              <li key={idx} className="flex gap-2 text-sm leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0"></span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2.5 text-gray-700 dark:text-gray-200">
                      {module.points?.map((point, idx) => (
                        <li key={idx} className="flex gap-2.5 text-sm leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publics concernés */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              Publics concernés
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed text-lg"
            >
              Ces formations s&apos;adressent à tous les professionnels souhaitant développer leurs
              compétences numériques avancées.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {[
                {
                  title: 'Encadrants & Responsables',
                  description: 'Encadrants, responsables d\'équipes, travailleurs administratifs',
                },
                {
                  title: 'Secteur Associatif',
                  description:
                    'Professionnels du secteur associatif, maisons de quartier, CPAS, structures d\'accueil',
                },
                {
                  title: 'Titres-Services',
                  description:
                    'Entreprises Titres-Services (encadrants, responsables de planning, administratifs)',
                },
                {
                  title: 'Travailleurs en Transition',
                  description:
                    'Travailleurs en transition, Article 60/ACS cherchant une montée en compétences rapide',
                },
              ].map((publicItem, index) => (
                <motion.div
                  key={publicItem.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-xl border border-primary-100 dark:border-primary-900/50 p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    {publicItem.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
                    {publicItem.description}
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
