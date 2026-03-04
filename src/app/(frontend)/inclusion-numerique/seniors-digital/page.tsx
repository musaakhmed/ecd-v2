'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const objectifsSpecifiques = [
  "Renforcer l'autonomie numérique dans les usages du quotidien : recherche d'informations, prise de rendez-vous, téléchargement de documents, démarches simples en ligne.",
  "Développer les compétences de base sur smartphone, tablette et ordinateur : connexion Wi-Fi, navigation Internet, clavier, gestion des applications, photos et documents.",
  "Faciliter la communication avec les proches et les services grâce à l'e-mail, aux messageries instantanées et aux appels vidéo.",
  "Accompagner l'accès aux services essentiels en ligne, notamment les plateformes communales, administratives, sociales ou de santé.",
  "Renforcer la sécurité numérique : reconnaissance des arnaques, protection des données personnelles, gestion des mots de passe, bonnes pratiques pour l'e-banking et les paiements en ligne.",
  "Redonner confiance et lutter contre l'isolement, grâce à un apprentissage progressif, l'entraide et la valorisation des acquis.",
  "Adapter les apprentissages au rythme des seniors, avec une pédagogie simple, des explications pas à pas et un accompagnement personnalisé.",
]

const approcheProximite = [
  'Répondre aux priorités exprimées,',
  'Proposer des contenus ciblés et utiles,',
  "Favoriser l'apprentissage par la pratique.",
]

const impactFinalite = [
  "De découvrir les innovations numériques et les simplifications administratives,",
  "De se familiariser avec les plateformes et procédures en ligne,",
  "D'utiliser les guichets électroniques et services numériques de manière autonome.",
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc="/assets/hero/seniors-transition-numerique.jpg"
        imageAlt="Seniors & le digital"
        subtitle="Inclusion Numérique"
        title="Accompagner les seniors dans la transition numérique"
        description="De nombreux services du quotidien sont devenus numériques. ECD asbl propose un accompagnement numérique adapté et accessible, pour utiliser les outils en toute sécurité, à son rythme et dans un cadre bienveillant."
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
            {/* Objectif général */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Objectif général" raw hover>
                <p className="leading-relaxed text-inherit">
                  Permettre aux seniors de gagner en autonomie numérique, afin de réaliser leurs
                  démarches quotidiennes en ligne en toute confiance et en toute sécurité, tout en
                  réduisant le sentiment d&apos;exclusion lié à la digitalisation croissante des
                  services.
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Objectifs spécifiques */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="gradient-secondary" title="Objectifs spécifiques" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  À travers ces ateliers, ECD asbl vise à :
                </p>
                <BulletList items={objectifsSpecifiques} color="secondary" lightOnDark animated={false} />
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
            {/* Une approche de proximité */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Une approche de proximité, centrée sur les besoins" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Une frange importante de la société, et plus particulièrement les seniors, reste
                  aujourd&apos;hui à l&apos;écart des opportunités offertes par le numérique.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  Pour lever ces freins, les activités sont organisées directement dans les lieux
                  fréquentés par les seniors : centres récréatifs, permanences sociales, maisons de
                  repos, associations et collectifs, afin de faciliter l&apos;accès et proposer un
                  cadre rassurant.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  Les participants peuvent choisir les thématiques à développer, en lien direct avec
                  leur quotidien et leurs besoins réels.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  Les contenus et la méthodologie sont élaborés en concertation avec les partenaires et
                  les seniors, dans une démarche qui vise à :
                </p>
                <BulletList items={approcheProximite} lightOnDark animated={false} className="mb-6" />
                <p className="leading-relaxed text-inherit">
                  Les participants peuvent travailler avec leurs propres appareils (PC, tablette ou
                  smartphone).
                </p>
              </DarkTextCard>
            </motion.div>

            {/* Impact et finalité */}
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" title="Impact et finalité" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Cet accompagnement constitue un levier concret de lutte contre l&apos;exclusion sociale
                  et numérique.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  À terme, l&apos;objectif est de combattre l&apos;illettrisme numérique, dont les
                  seniors sont parmi les premières victimes.
                </p>
                <p className="leading-relaxed mb-6 text-inherit">
                  Les actions permettent notamment :
                </p>
                <BulletList items={impactFinalite} lightOnDark animated={false} className="mb-6" />
                <p className="leading-relaxed text-inherit">
                  Une attention particulière est portée à la sécurité, à la prévention et à la
                  protection des données personnelles, afin d&apos;assurer un usage responsable et
                  serein du numérique.
                </p>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


export default Page
