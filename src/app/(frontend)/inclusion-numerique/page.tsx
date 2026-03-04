'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const programmes = [
  {
    title: 'Jeunes connectés',
    href: '/inclusion-numerique/jeunes-connectes',
    description:
      "Stages et ateliers 6–18 ans : programmation, robotique (Thymio, Micro:bit), création numérique. Développer ses compétences en s'amusant.",
    variant: 'gradient-primary' as const,
  },
  {
    title: 'Seniors & le digital',
    href: '/inclusion-numerique/seniors-digital',
    description:
      "Accompagnement pour gagner en autonomie numérique : démarches en ligne, smartphone, tablette, sécurité. À son rythme, dans un cadre bienveillant.",
    variant: 'gradient-secondary' as const,
  },
  {
    title: 'Alpha, FLE et Numérique',
    href: '/inclusion-numerique/alpha-fle-numerique',
    description:
      "Intégration du numérique dans les parcours Alpha et FLE. Accès aux démarches en ligne malgré le double obstacle langue et numérique.",
    variant: 'gradient-primary' as const,
  },
  {
    title: 'Emploi & Numérique',
    href: '/inclusion-numerique/emploi-numerique',
    description:
      "Ateliers informatiques pour demandeurs d'emploi et publics en activation : recherche d'emploi, candidatures, plateformes, CV en ligne.",
    variant: 'gradient-secondary' as const,
  },
]

const lieuxIntervention = [
  'Associations et collectifs',
  'Écoles de devoirs',
  'Maisons de quartier',
  'Permanences sociales',
  'Centres communautaires',
  'Logements sociaux',
  'Structures partenaires',
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc="/assets/hero/transition-numerique.png"
        imageAlt="Inclusion numérique"
        subtitle="Espace Public Numérique Mobile"
        title="Inclusion numérique"
        description="ECD asbl déploie un accompagnement mobile et inclusif : ateliers et permanences numériques au plus près des habitants, dans les lieux de proximité."
      />

      {/* Intro – dispositif de proximité */}
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
              className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-100 mb-4">
                  Un dispositif de proximité
                </h2>
                <p className="text-primary-100/90 leading-relaxed text-lg mb-4">
                  Aujourd&apos;hui, de plus en plus de démarches essentielles se font en ligne :
                  prendre un rendez-vous, consulter ses documents, accéder à une administration,
                  envoyer un e-mail, utiliser une application bancaire ou rechercher une information
                  fiable. Pour une partie de la population, ces gestes restent complexes ou
                  inaccessibles. Le manque d&apos;équipement, de compétences ou de confiance
                  renforce la fracture numérique et les inégalités.
                </p>
                <p className="text-primary-100/90 leading-relaxed text-lg">
                  Pour répondre à ces enjeux, ECD asbl déploie l&apos;EPNM – Espace Public Numérique
                  Mobile – et propose des ateliers et permanences numériques directement sur le
                  terrain, au plus près des habitants.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              Nos programmes
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 text-center mb-12 max-w-2xl mx-auto"
            >
              Découvrez les actions d&apos;inclusion numérique adaptées à chaque public.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch">
              {programmes.map((programme) => (
                <motion.div key={programme.href} variants={fadeInUp} className="flex min-h-0">
                  <Link href={programme.href} className="block w-full min-h-0 flex">
                    <DarkTextCard
                      variant={programme.variant}
                      title={programme.title}
                      hover
                      raw
                      className="rounded-2xl p-6 md:p-8 h-full flex flex-col w-full"
                    >
                      <p className="leading-relaxed text-inherit flex-1 mb-6">
                        {programme.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-inherit font-medium">
                        Découvrir
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </DarkTextCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lieux d'intervention */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <DarkTextCard
                variant="solid"
                title="Lieux d'intervention"
                raw
                hover
                className="rounded-2xl p-6 md:p-8"
              >
                <p className="leading-relaxed text-inherit mb-6">
                  Les ateliers et permanences sont organisés dans des lieux de proximité, en
                  partenariat avec :
                </p>
                <BulletList items={lieuxIntervention} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
