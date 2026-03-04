'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const objectifList = [
  'Consulter des offres,',
  'Postuler en ligne,',
  'Suivre un dossier,',
  'Communiquer avec des employeurs ou organismes,',
  'Gérer des comptes sur des plateformes officielles.',
]

const publicCible = [
  "Demandeurs d'emploi,",
  "Bénéficiaires CPAS ou en parcours d'activation,",
  "Personnes suivies par des dispositifs ISP,",
  "Publics ayant peu ou pas de maîtrise informatique,",
  "Publics souhaitant se perfectionner pour mieux gérer leurs démarches en ligne.",
]

const approcheList = [
  'pratique (apprendre en faisant)',
  'progressive (pas à pas, sans pression)',
  'inclusive (adaptée aux niveaux et aux rythmes)',
  'collective (entraide et échanges)',
]

const suiviItems = [
  'Évaluation de la compréhension et de la progression,',
  'Difficultés rencontrées,',
  'Besoins exprimés,',
  'Ajustements pédagogiques,',
  'Dynamique de groupe et implication.',
]

const partenariatsList = [
  "Services emploi des CPAS",
  "Boutiques de l'emploi",
  "Missions locales",
  "Structures ISP et organismes d'accompagnement socioprofessionnel",
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc="/assets/hero/transition-numerique.png"
        imageAlt="Emploi & Numérique"
        subtitle="Inclusion Numérique"
        title="Emploi & Numérique"
        description="ECD asbl propose des ateliers informatiques pour les personnes en recherche d'emploi ou en activation sociale, en complément des ISP : un volet numérique concret et adapté aux démarches pour accéder à l'emploi."
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
            {/* Objectif */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Objectif" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  L&apos;objectif est d&apos;accompagner les demandeurs d&apos;emploi dans
                  l&apos;acquisition des compétences numériques essentielles à la recherche,
                  l&apos;orientation et aux démarches professionnelles, afin de progresser vers une
                  véritable autonomie numérique.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  Ce dispositif répond à une réalité de terrain : de nombreux candidats rencontrent
                  des difficultés dans l&apos;usage de l&apos;informatique, alors que le numérique est
                  aujourd&apos;hui indispensable et déterminant pour :
                </p>
                <BulletList items={objectifList} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Public cible */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Public cible" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Ces ateliers s&apos;adressent aux :
                </p>
                <BulletList items={publicCible} color="secondary" lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Contenus pédagogiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Contenus pédagogiques" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Les contenus sont proposés de l&apos;initiation à la mise en situation, jusqu&apos;au
                  perfectionnement, selon le niveau du groupe.
                </p>

                <div className="mb-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">Modules de base</h3>
                  <p className="text-gray-200 leading-relaxed mb-4">Les ateliers abordent notamment :</p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Découverte de l&apos;ordinateur et des périphériques</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Bases de Windows / Android / iOS</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Utilisation d&apos;Internet et des navigateurs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Applications de base et outils du quotidien</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Messagerie électronique (création, envoi, pièces jointes)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Recherche en ligne et navigation efficace</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Traitement de texte : mise en page, CV et lettre de motivation</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">Démarches emploi en ligne</h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Les participants apprennent également à réaliser leurs démarches concrètes :
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Inscription et utilisation de My Actiris</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Inscription et suivi via des agences d&apos;intérim</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Recherche d&apos;offres et candidature en ligne</span>
                    </li>
                  </ul>
                </div>

                <div className="pl-4 border-l-4 border-primary-400 bg-primary-700/30 rounded-r-lg py-4 pr-4">
                  <h3 className="text-xl font-semibold text-primary-50 mb-4">Modules avancés (selon besoins)</h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Pour les publics plus autonomes, des séances peuvent porter sur :
                  </p>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Plateformes emploi : LinkedIn, Indeed, etc.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Optimisation de profil et candidature numérique</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span>Préparation à une validation de compétences (si pertinent)</span>
                    </li>
                  </ul>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Approche pédagogique */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Approche pédagogique" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  La première séance est consacrée à un diagnostic des compétences et besoins, à
                  travers des questions simples et des exercices guidés.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  L&apos;animation privilégie une approche :
                </p>
                <BulletList items={approcheList} color="secondary" lightOnDark animated={false} className="mb-6" />
                <p className="leading-relaxed text-inherit">
                  Les exercices sont directement liés aux réalités du parcours emploi : démarches,
                  candidatures, utilisation d&apos;outils en ligne, recherche d&apos;informations, etc.
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Suivi et évaluation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Suivi et évaluation" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Tout au long des ateliers, les animateurs réalisent des notes de séance permettant
                  d&apos;assurer le suivi, incluant :
                </p>
                <BulletList items={suiviItems} lightOnDark animated={false} className="mb-6" />
                <p className="leading-relaxed mb-6 text-inherit">
                  Une évaluation individuelle est également réalisée avec chaque participant afin
                  d&apos;identifier les acquis et les besoins futurs.
                </p>
                <p className="leading-relaxed text-inherit">
                  Les conseillers emploi encadrant le groupe peuvent également transmettre au formateur
                  des observations utiles pour adapter l&apos;accompagnement au plus près de la réalité
                  de chaque candidat.
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Partenariats */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title="Partenariats" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  ECD asbl développe des partenariats avec des acteurs tels que :
                </p>
                <BulletList items={partenariatsList} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
