'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DarkTextCard } from '@/components/ui/DarkTextCard'

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
            src="/assets/hero/robotics.jpg"
            alt="Jeunes connectés"
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
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              Jeunes connectés
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              ECD asbl propose des stages et ateliers pour les 6-18 ans (informatique, programmation,
              robotique, création numérique). Un parcours ludique pour développer ses compétences
              tout en s&apos;amusant.
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
            {/* Objectifs généraux */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Objectifs généraux" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Ces stages permettent aux participants de :
                </p>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Découvrir la programmation et la pensée logique</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Développer la logique algorithmique et la résolution de problèmes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Explorer la robotique éducative avec Thymio et Micro:bit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Réaliser des projets créatifs (jeux, robots, animations, objets interactifs)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Stimuler la créativité, l&apos;autonomie, la coopération et la communication
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Comprendre le numérique et ses usages au quotidien</span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Deux parcours */}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-100 mb-6"
            >
              Deux parcours adaptés à l&apos;âge
            </motion.h2>

            {/* Parcours 1 : Stages informatiques (6–12 ans) */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Parcours 1 : Stages informatiques (6–12 ans)" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Un programme ludique et progressif, adapté au rythme des enfants.
                </p>

                <div className="mb-6 bg-primary-700/30 rounded-xl p-6 border border-primary-600/50">
                  <h4 className="text-xl font-semibold text-primary-50 mb-4">
                    Thymio – Découverte de la robotique
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Comprendre les capteurs, mouvements et comportements</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Tester différents modes (suivi de ligne, évitement, lumière, sons)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Premiers pas en programmation visuelle</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 bg-secondary-700/30 rounded-xl p-6 border border-secondary-600/50">
                  <h4 className="text-xl font-semibold text-secondary-50 mb-4">
                    Micro:bit – Initiation au codage
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Découvrir MakeCode (programmation simple et visuelle)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Créer des mini-jeux et animations</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Réaliser des signaux lumineux et petits objets interactifs</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-3 pr-4">
                  <p className="leading-relaxed text-gray-200">
                    <span className="font-semibold text-primary-50">Objectif :</span>{' '}
                    apprendre en jouant et développer la confiance dans le numérique.
                  </p>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Parcours 2 : Jeunes connectés (12–18 ans) */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Parcours 2 : Jeunes connectés (12–18 ans)" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Un programme axé sur des défis, des mini-projets et une logique de création de
                  solutions.
                </p>

                <div className="mb-6 bg-primary-700/30 rounded-xl p-6 border border-primary-600/50">
                  <h4 className="text-xl font-semibold text-primary-50 mb-4">
                    Thymio – Robotique & programmation avancée
                  </h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Programmation conditionnelle, boucles, scénarios</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>
                        Défis : parcours chronométrés, labyrinthe, évitement d&apos;obstacles
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>
                        Projet final : robot autonome (mission, course, secours, etc.)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 bg-secondary-700/30 rounded-xl p-6 border border-secondary-600/50">
                  <h4 className="text-xl font-semibold text-secondary-50 mb-4">
                    Micro:bit – Coding & objets connectés
                  </h4>
                  <ul className="space-y-2 text-gray-200 mb-4">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>MakeCode niveau intermédiaire à avancé</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Utilisation de variables, conditions, événements, boucles</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                      <span>Capteurs : mouvement, température, lumière, boussole</span>
                    </li>
                  </ul>
                  <p className="text-gray-200 font-medium mb-2">Créations possibles :</p>
                  <ul className="space-y-2 text-gray-200 list-disc list-inside ml-2">
                    <li>Mini-jeux programmés</li>
                    <li>Compteur de pas / alarme intelligente</li>
                    <li>Système d&apos;alerte lumineux</li>
                    <li>Prototypes d&apos;objets autonomes (&quot;smart objects&quot;)</li>
                  </ul>
                </div>

                <div className="mt-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-3 pr-4">
                  <p className="leading-relaxed text-gray-200">
                    <span className="font-semibold text-primary-50">Objectif :</span>{' '}
                    passer de l&apos;apprentissage à une production numérique concrète, en individuel
                    et en équipe.
                  </p>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Créations & projets */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Créations & projets" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Chaque participant réalise des projets inspirés de ses idées ou de défis proposés, par
                  exemple :
                </p>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Robots autonomes et intelligents</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Mini-jeux interactifs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Animations numériques</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Parcours logiques et défis de programmation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Objets connectés simples (alertes, signaux, capteurs)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Défis &quot;Hackathon&quot; (pour les 12–18 ans) : créer une solution en équipe en temps
                      limité
                    </span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Organisation" raw>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>2 heures par séance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Ateliers organisés chaque semaine</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Programme sur plusieurs semaines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>
                      Alternance entre : découverte – entraînement – défis – création – présentation
                      finale
                    </span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Compétences développées */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Compétences développées" raw>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Logique & pensée algorithmique</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Créativité, imagination & innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Travail en équipe & communication</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Autonomie & gestion de projet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Résolution de problèmes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Culture numérique et usage responsable des outils</span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Pour qui ? */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title="Pour qui ?" raw>
                <p className="leading-relaxed mb-4 text-inherit">
                  Ce programme s&apos;adresse aux :
                </p>
                <ul className="space-y-3 text-inherit mb-6">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Écoles</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Maisons de quartier</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Associations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Structures périscolaires et extrascolaires</span>
                  </li>
                </ul>
                <p className="leading-relaxed mb-4 text-inherit">
                  Souhaitant :
                </p>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Proposer des activités innovantes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Initier les jeunes aux compétences numériques de demain</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Enrichir l&apos;offre éducative et ludique</span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
