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
              ECD asbl développe un programme complet d&apos;initiation en informatique visant à
              offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre
              s&apos;adresse à un large public et s&apos;adapte aux besoins spécifiques de chacun.
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
                À propos de l&apos;initiation
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                ECD asbl développe un programme complet d&apos;initiation en informatique visant à
                offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre
                s&apos;adresse à un large public et s&apos;adapte aux besoins spécifiques de chacun.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publics ciblés */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
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
                  Découverte de l&apos;ordinateur, bonnes pratiques numériques, premiers usages
                  scolaires et citoyens.
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
                  Acquisition d&apos;autonomie dans l&apos;usage des outils numériques du quotidien
                  et administratifs.
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
                  Accompagnement progressif, sécurité en ligne, confiance dans l&apos;usage de
                  l&apos;ordinateur et du smartphone.
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
      <section className="py-12 bg-white dark:bg-gray-950">
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
              Objectifs généraux
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Favoriser l&apos;autonomie numérique au quotidien.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900/20 dark:via-gray-900 dark:to-primary-900/20 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Permettre l&apos;accès aux services en ligne (e-administration, recherche
                    d&apos;emploi, communication).
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Développer les compétences de base : utilisation d&apos;un ordinateur, gestion
                    de fichiers, navigation Internet.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900/20 dark:via-gray-900 dark:to-primary-900/20 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Renforcer la confiance, lutter contre l&apos;exclusion numérique et soutenir les
                    parcours d&apos;insertion.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenus des modules */}
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
              Contenus des modules
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              Les séances d&apos;initiation couvrent notamment :
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 dark:border-primary-900/50"
            >
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    La découverte de l&apos;ordinateur (clavier, souris, interfaces, organisation).
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    La navigation Internet et la recherche d&apos;informations fiables.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    La création et l&apos;utilisation d&apos;une adresse e-mail.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">Les démarches administratives de base.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Les outils essentiels : traitement de texte, applications pratiques, outils
                    collaboratifs simples.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    Les bases de la sécurité numérique : mots de passe, arnaques, bonnes pratiques.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  <span className="leading-relaxed">
                    L&apos;usage du smartphone pour les services du quotidien.
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partenaires */}
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-6"
            >
              Partenaires
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-12 text-center max-w-2xl mx-auto"
            >
              Les actions sont menées en collaboration avec :
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    Associations socioculturelles
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    Maisons de quartier
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    CPAS
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    Sociétés de logements sociaux
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    Centres d&apos;hébergement de primo-arrivants
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 rounded-2xl shadow-lg p-6 border-2 border-primary-300 dark:border-primary-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group md:col-span-2 lg:col-span-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/40 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    Et tout organisme souhaitant renforcer l&apos;inclusion numérique de son public.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="py-12 bg-white dark:bg-gray-950">
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
              Approche pédagogique
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Méthodes adaptées selon l&apos;âge, le niveau et la réalité linguistique des
                    participants.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900/20 dark:via-gray-900 dark:to-primary-900/20 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Exercices pratiques, mises en situation et accompagnement individuel si
                    nécessaire.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Supports visuels accessibles, vocabulaire simplifié et progression en petites
                    étapes.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900/20 dark:via-gray-900 dark:to-primary-900/20 rounded-2xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-900/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-200/30 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 text-white mb-4 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium">
                    Possibilité d&apos;organiser les modules dans les locaux des partenaires ou via
                    l&apos;Espace Public Numérique Mobile (EPNM).
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
