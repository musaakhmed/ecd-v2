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
            alt="Alpha, FLE et Numérique"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
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
              Inclusion Numérique
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Alpha, FLE et Numérique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-4"
            >
              Pour lutter contre les inégalités engendrées par la numérisation croissante de la
              société, ECD asbl intègre le numérique dans ses parcours de formation en
              alphabétisation (Alpha) et en Français Langue Étrangère (FLE).
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Aujourd&apos;hui, de nombreuses démarches essentielles passent par Internet : prendre
              un rendez-vous, envoyer un e-mail, remplir un formulaire, accéder à une plateforme
              communale ou rechercher une information fiable. Pour les personnes en parcours
              Alpha/FLE, ces démarches représentent souvent un double obstacle : la langue et le
              numérique.
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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Objectifs */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Objectifs
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Permettre aux apprenants d&apos;acquérir des outils numériques facilitant
                l&apos;apprentissage du français, afin de progresser en autonomie (vocabulaire,
                prononciation, lecture, écriture, compréhension) et de renforcer leur capacité à
                réaliser des démarches du quotidien. À travers des ateliers pratiques et progressifs,
                les participants pourront :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Apprendre à utiliser un smartphone, une tablette ou un ordinateur (clavier,
                    souris, Wi-Fi),
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Découvrir et utiliser des plateformes d&apos;apprentissage du français adaptées,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Améliorer la prononciation et la compréhension orale,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Enrichir le vocabulaire utile (emploi, santé, école, transport…),</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>S&apos;entraîner à lire et écrire (phrases simples, messages, e-mails),</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Utiliser des outils de soutien (audio, exercices autocorrectifs),</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Renforcer la sécurité numérique (mots de passe, arnaques, données personnelles).
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Outils d'apprentissage en ligne */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Outils d&apos;apprentissage en ligne
              </h2>

              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    J&apos;apprends – Apprentissage du français pour adultes migrants
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Plateforme conçue pour aider les adultes migrants à apprendre le français de
                    manière progressive. Travail sur vocabulaire, compréhension, phrases du quotidien.
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    ClicMaClasse (clicmaclass.fr) – Sons et prononciation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Outil utile pour la familiarisation avec les sons du français. Écouter, répéter
                    et différencier les sons (ex : ou/u, an/en, é/è).
                  </p>
                </div>

                <div className="pl-4 border-l-4 border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    Applications ludiques pour apprendre le français
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200 mt-2">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>
                        <strong>OrthoLud</strong> (ortholud.com) : exercices ludiques (orthographe,
                        grammaire, conjugaison, vocabulaire).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>
                        <strong>Le Point du FLE</strong> (lepointdufle.net) : ressources FLE par
                        niveaux (exercices, fiches, audio, activités).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pl-4 border-l-4 border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    RapidTyping (apprentissage du clavier)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    Outil pratique pour apprendre à taper au clavier, gagner en aisance et écrire plus
                    facilement sur PC.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Méthode pédagogique */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-secondary-100 dark:border-secondary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Méthode pédagogique
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les ateliers sont basés sur :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>Une approche simple et concrète (faire ensemble, étape par étape),</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>Des supports visuels et accessibles,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>La répétition et la mise en pratique,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>Un accompagnement individualisé selon le niveau des participants.</span>
                </li>
              </ul>
            </motion.div>

            {/* Formation des aidants numériques */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Formation des aidants numériques
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                ECD asbl propose également des formations et accompagnements pédagogiques en lien
                avec les TIC, afin de renforcer les compétences des professionnels de terrain. Nous
                intervenons notamment pour :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Former des formateurs,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Professionnaliser des aidants numériques,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Intégrer des outils numériques adaptés aux publics Alpha/FLE,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Accompagner la mise en place de démarches pédagogiques inclusives.</span>
                </li>
              </ul>
            </motion.div>

            {/* Partenariats */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Partenariats
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les asbl actives en alphabétisation (Alpha) et en Français Langue Étrangère (FLE)
                peuvent formuler leurs demandes afin de développer des partenariats avec ECD asbl.
                Ces partenariats peuvent porter sur :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 mb-6">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>L&apos;intégration du numérique dans les parcours Alpha/FLE,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>La mise en place d&apos;ateliers pratiques pour les apprenants,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Des formations TIC adaptées aux publics,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>La formation de formateurs et d&apos;aidants numériques,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Un accompagnement méthodologique et pédagogique sur mesure.</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Les structures intéressées peuvent nous contacter afin d&apos;analyser leurs besoins
                et construire ensemble une collaboration adaptée.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
