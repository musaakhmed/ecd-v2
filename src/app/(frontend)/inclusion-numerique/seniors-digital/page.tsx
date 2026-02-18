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
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/seniors-transition-numerique.jpg"
            alt="Seniors & le digital"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 py-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white/80 mb-1 md:mb-2"
            >
              Inclusion Numérique
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 md:mb-3"
            >
              Accompagner les seniors dans la transition numérique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              De nombreux services du quotidien sont devenus numériques. Pour une partie des seniors,
              ces démarches restent complexes. ECD asbl propose un accompagnement numérique adapté
              et accessible, pour utiliser les outils en toute sécurité, à son rythme et dans un
              cadre bienveillant.
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
            {/* Objectif général */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Objectif général
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Permettre aux seniors de gagner en autonomie numérique, afin de réaliser leurs
                démarches quotidiennes en ligne en toute confiance et en toute sécurité, tout en
                réduisant le sentiment d&apos;exclusion lié à la digitalisation croissante des
                services.
              </p>
            </motion.div>

            {/* Objectifs spécifiques */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-secondary-100 dark:border-secondary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Objectifs spécifiques
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                À travers ces ateliers, ECD asbl vise à :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Renforcer l&apos;autonomie numérique dans les usages du quotidien : recherche
                    d&apos;informations, prise de rendez-vous, téléchargement de documents, démarches
                    simples en ligne.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Développer les compétences de base sur smartphone, tablette et ordinateur :
                    connexion Wi-Fi, navigation Internet, clavier, gestion des applications, photos et
                    documents.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Faciliter la communication avec les proches et les services grâce à
                    l&apos;e-mail, aux messageries instantanées et aux appels vidéo.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Accompagner l&apos;accès aux services essentiels en ligne, notamment les
                    plateformes communales, administratives, sociales ou de santé.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Renforcer la sécurité numérique : reconnaissance des arnaques, protection des
                    données personnelles, gestion des mots de passe, bonnes pratiques pour
                    l&apos;e-banking et les paiements en ligne.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Redonner confiance et lutter contre l&apos;isolement, grâce à un apprentissage
                    progressif, l&apos;entraide et la valorisation des acquis.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                  <span>
                    Adapter les apprentissages au rythme des seniors, avec une pédagogie simple, des
                    explications pas à pas et un accompagnement personnalisé.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Une approche de proximité */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Une approche de proximité, centrée sur les besoins
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Une frange importante de la société, et plus particulièrement les seniors, reste
                aujourd&apos;hui à l&apos;écart des opportunités offertes par le numérique.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Pour lever ces freins, les activités sont organisées directement dans les lieux
                fréquentés par les seniors : centres récréatifs, permanences sociales, maisons de
                repos, associations et collectifs, afin de faciliter l&apos;accès et proposer un
                cadre rassurant.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les participants peuvent choisir les thématiques à développer, en lien direct avec
                leur quotidien et leurs besoins réels.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les contenus et la méthodologie sont élaborés en concertation avec les partenaires et
                les seniors, dans une démarche qui vise à :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 mb-6">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Répondre aux priorités exprimées,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Proposer des contenus ciblés et utiles,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>Favoriser l&apos;apprentissage par la pratique.</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Les participants peuvent travailler avec leurs propres appareils (PC, tablette ou
                smartphone).
              </p>
            </motion.div>

            {/* Impact et finalité */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                Impact et finalité
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Cet accompagnement constitue un levier concret de lutte contre l&apos;exclusion sociale
                et numérique.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                À terme, l&apos;objectif est de combattre l&apos;illettrisme numérique, dont les
                seniors sont parmi les premières victimes.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Les actions permettent notamment :
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 mb-6">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>De découvrir les innovations numériques et les simplifications administratives,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>De se familiariser avec les plateformes et procédures en ligne,</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    D&apos;utiliser les guichets électroniques et services numériques de manière
                    autonome.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Une attention particulière est portée à la sécurité, à la prévention et à la
                protection des données personnelles, afin d&apos;assurer un usage responsable et
                serein du numérique.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
