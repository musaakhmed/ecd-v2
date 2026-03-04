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
            src="/assets/hero/transition-numerique.png"
            alt="Emploi & Numérique"
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
              Emploi & Numérique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              ECD asbl propose des ateliers informatiques pour les personnes en recherche
              d&apos;emploi ou en activation sociale, en complément des ISP : un volet numérique
              concret et adapté aux démarches pour accéder à l&apos;emploi.
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
            {/* Objectif */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Objectif" raw>
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
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Consulter des offres,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Postuler en ligne,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Suivre un dossier,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Communiquer avec des employeurs ou organismes,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Gérer des comptes sur des plateformes officielles.</span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Public cible */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Public cible" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Ces ateliers s&apos;adressent aux :
                </p>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Demandeurs d&apos;emploi,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Bénéficiaires CPAS ou en parcours d&apos;activation,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Personnes suivies par des dispositifs ISP,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Publics ayant peu ou pas de maîtrise informatique,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>Publics souhaitant se perfectionner pour mieux gérer leurs démarches en ligne.</span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>

            {/* Contenus pédagogiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Contenus pédagogiques" raw>
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
              <DarkTextCard variant="gradient-secondary" title="Approche pédagogique" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  La première séance est consacrée à un diagnostic des compétences et besoins, à
                  travers des questions simples et des exercices guidés.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  L&apos;animation privilégie une approche :
                </p>
                <ul className="space-y-3 text-inherit mb-6">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>pratique (apprendre en faisant)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>progressive (pas à pas, sans pression)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>inclusive (adaptée aux niveaux et aux rythmes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <span>collective (entraide et échanges)</span>
                  </li>
                </ul>
                <p className="leading-relaxed text-inherit">
                  Les exercices sont directement liés aux réalités du parcours emploi : démarches,
                  candidatures, utilisation d&apos;outils en ligne, recherche d&apos;informations, etc.
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Suivi et évaluation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Suivi et évaluation" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  Tout au long des ateliers, les animateurs réalisent des notes de séance permettant
                  d&apos;assurer le suivi, incluant :
                </p>
                <ul className="space-y-3 text-inherit mb-6">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Évaluation de la compréhension et de la progression,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Difficultés rencontrées,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Besoins exprimés,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Ajustements pédagogiques,</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Dynamique de groupe et implication.</span>
                  </li>
                </ul>
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
              <DarkTextCard variant="gradient-primary" title="Partenariats" raw>
                <p className="leading-relaxed mb-6 text-inherit">
                  ECD asbl développe des partenariats avec des acteurs tels que :
                </p>
                <ul className="space-y-3 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Services emploi des CPAS</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Boutiques de l&apos;emploi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Missions locales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span>Structures ISP et organismes d&apos;accompagnement socioprofessionnel</span>
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
