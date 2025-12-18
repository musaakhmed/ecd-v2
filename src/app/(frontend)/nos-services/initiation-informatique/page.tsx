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
            src="/assets/hero/seniors-transition-numerique.jpg"
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
              Un programme complet d&apos;initiation visant à offrir un premier niveau de maîtrise des
              outils numériques essentiels, adapté aux besoins spécifiques de chacun.
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
                ECD asbl développe un programme complet d&apos;initiation en informatique visant à
                offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre
                s&apos;adresse à un large public et s&apos;adapte aux besoins spécifiques de chacun.
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
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-8"
            >
              Publics ciblés
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Jeunes
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Découverte de l&apos;ordinateur, bonnes pratiques numériques, premiers usages
                  scolaires et citoyens.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Adultes
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Acquisition d&apos;autonomie dans l&apos;usage des outils numériques du quotidien et
                  administratifs.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Seniors
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Accompagnement progressif, sécurité en ligne, confiance dans l&apos;usage de
                  l&apos;ordinateur et du smartphone.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-primary-100 dark:border-primary-900/50"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                  Apprenants en alpha et FLE
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Modules simplifiés, vocabulaire visuel, exercices pratiques adaptés aux niveaux
                  linguistiques.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectifs généraux */}
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
              Objectifs généraux
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-8 shadow-lg"
            >
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Favoriser l&apos;autonomie numérique au quotidien
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Permettre l&apos;accès aux services en ligne (e-administration, recherche d&apos;emploi,
                  communication)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Développer les compétences de base : utilisation d&apos;un ordinateur, gestion de
                  fichiers, navigation Internet
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Renforcer la confiance, lutter contre l&apos;exclusion numérique et soutenir les
                  parcours d&apos;insertion
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenus des modules */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
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
              Contenus des modules
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 mb-8 text-lg"
            >
              Les séances d&apos;initiation couvrent notamment :
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 list-disc list-inside">
                <li>La découverte de l&apos;ordinateur (clavier, souris, interfaces, organisation)</li>
                <li>La navigation Internet et la recherche d&apos;informations fiables</li>
                <li>La création et l&apos;utilisation d&apos;une adresse e-mail</li>
                <li>Les démarches administratives de base</li>
                <li>
                  Les outils essentiels : traitement de texte, applications pratiques, outils
                  collaboratifs simples
                </li>
                <li>
                  Les bases de la sécurité numérique : mots de passe, arnaques, bonnes pratiques
                </li>
                <li>L&apos;usage du smartphone pour les services du quotidien</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partenaires et Approche */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-2"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Partenaires
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                Les actions sont menées en collaboration avec :
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Associations socioculturelles
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Maisons de quartier
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  CPAS
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Sociétés de logements sociaux
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Centres d&apos;hébergement de primo-arrivants
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Et tout organisme souhaitant renforcer l&apos;inclusion numérique de son public
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Approche pédagogique
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Méthodes adaptées selon l&apos;âge, le niveau et la réalité linguistique des
                  participants
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Exercices pratiques, mises en situation et accompagnement individuel si
                  nécessaire
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Supports visuels accessibles, vocabulaire simplifié et progression en petites
                  étapes
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  Possibilité d&apos;organiser les modules dans les locaux des partenaires ou via
                  l&apos;Espace Public Numérique Mobile (EPNM)
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
