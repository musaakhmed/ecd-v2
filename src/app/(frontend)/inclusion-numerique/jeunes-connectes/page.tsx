'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const objectifsGeneraux = [
  'Découvrir la programmation et la pensée logique',
  'Développer la logique algorithmique et la résolution de problèmes',
  'Explorer la robotique éducative avec Thymio et Micro:bit',
  'Réaliser des projets créatifs (jeux, robots, animations, objets interactifs)',
  "Stimuler la créativité, l'autonomie, la coopération et la communication",
  'Comprendre le numérique et ses usages au quotidien',
]

const creationsProjets = [
  'Robots autonomes et intelligents',
  'Mini-jeux interactifs',
  'Animations numériques',
  'Parcours logiques et défis de programmation',
  'Objets connectés simples (alertes, signaux, capteurs)',
  'Défis "Hackathon" (12–18 ans) : créer une solution en équipe en temps limité',
]

const organisation = [
  '2 heures par séance',
  'Ateliers organisés chaque semaine',
  'Programme sur plusieurs semaines',
  'Alternance : découverte – entraînement – défis – création – présentation finale',
]

const competences = [
  'Logique & pensée algorithmique',
  'Créativité, imagination & innovation',
  'Travail en équipe & communication',
  'Autonomie & gestion de projet',
  'Résolution de problèmes',
  'Culture numérique et usage responsable des outils',
]

const pourQuiStructures = [
  'Écoles',
  'Maisons de quartier',
  'Associations',
  'Structures périscolaires et extrascolaires',
]

const pourQuiSouhaitant = [
  'Proposer des activités innovantes',
  'Initier les jeunes aux compétences numériques de demain',
  "Enrichir l'offre éducative et ludique",
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc="/assets/hero/robotics.jpg"
        imageAlt="Jeunes connectés"
        subtitle="Inclusion Numérique"
        title="Jeunes connectés"
        description="ECD asbl propose des stages et ateliers pour les 6-18 ans (informatique, programmation, robotique, création numérique). Un parcours ludique pour développer ses compétences tout en s'amusant."
      />

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
              <DarkTextCard variant="solid" title="Objectifs généraux" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Ces stages permettent aux participants de :
                </p>
                <BulletList items={objectifsGeneraux} lightOnDark animated={false} />
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
              <DarkTextCard variant="solid" title="Parcours 1 : Stages informatiques (6–12 ans)" raw hover>
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
              <DarkTextCard variant="solid" title="Parcours 2 : Jeunes connectés (12–18 ans)" raw hover>
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

          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Créations & projets */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Créations & projets" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Chaque participant réalise des projets inspirés de ses idées ou de défis proposés, par
                  exemple :
                </p>
                <BulletList items={creationsProjets} color="primary" lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Organisation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Organisation" raw hover>
                <BulletList items={organisation} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Compétences développées */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Compétences développées" raw hover>
                <BulletList items={competences} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Pour qui ? */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title="Pour qui ?" raw hover>
                <p className="leading-relaxed mb-4 text-inherit">Ce programme s&apos;adresse aux :</p>
                <BulletList items={pourQuiStructures} lightOnDark animated={false} className="mb-6" />
                <p className="leading-relaxed mb-4 text-inherit">Souhaitant :</p>
                <BulletList items={pourQuiSouhaitant} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
