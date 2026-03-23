'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ImageCardHero } from '@/components/ui/ImageCardHero'

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

  const publicsCibles = [
    {
      title: 'Jeunes',
      description:
        "Découverte de l'ordinateur, bonnes pratiques numériques, premiers usages scolaires et citoyens.",
    },
    {
      title: 'Adultes',
      description:
        "Acquisition d'autonomie dans l'usage des outils numériques du quotidien et administratifs.",
    },
    {
      title: 'Seniors',
      description:
        "Accompagnement progressif, sécurité en ligne, confiance dans l'usage de l'ordinateur et du smartphone.",
    },
    {
      title: 'Apprenants en alpha et FLE',
      description:
        'Modules simplifiés, vocabulaire visuel, exercices pratiques adaptés aux niveaux linguistiques.',
    },
  ]

  const objectifsGeneraux = [
    {
      variant: 'gradient-primary' as const,
      iconBg: 'bg-primary-500/80',
      iconPath:
        'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      text: "Favoriser l'autonomie numérique au quotidien.",
    },
    {
      variant: 'gradient-secondary' as const,
      iconBg: 'bg-secondary-500/80',
      iconPath:
        'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      text: "Permettre l'accès aux services en ligne (e-administration, recherche d'emploi, communication).",
    },
    {
      variant: 'gradient-primary' as const,
      iconBg: 'bg-primary-500/80',
      iconPath:
        'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      text: "Développer les compétences de base : utilisation d'un ordinateur, gestion de fichiers, navigation Internet.",
    },
    {
      variant: 'gradient-secondary' as const,
      iconBg: 'bg-secondary-500/80',
      iconPath:
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      text: "Renforcer la confiance, lutter contre l'exclusion numérique et soutenir les parcours d'insertion.",
    },
  ]

  const moduleContents = [
    "La découverte de l'ordinateur (clavier, souris, interfaces, organisation).",
    "La navigation Internet et la recherche d'informations fiables.",
    "La création et l'utilisation d'une adresse e-mail.",
    'Les démarches administratives de base.',
    'Les outils essentiels : traitement de texte, applications pratiques, outils collaboratifs simples.',
    'Les bases de la sécurité numérique : mots de passe, arnaques, bonnes pratiques.',
    "L'usage du smartphone pour les services du quotidien.",
  ]

  const partenaires = [
    'Associations socioculturelles',
    'Maisons de quartier',
    'CPAS',
    'Sociétés de logements sociaux',
    "Centres d'hébergement de primo-arrivants",
    "Et tout organisme souhaitant renforcer l'inclusion numérique de son public.",
  ]

  const approchesPedagogiques = [
    {
      iconPaths: [
        'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      ],
      text: "Méthodes adaptées selon l'âge, le niveau et la réalité linguistique des participants.",
    },
    {
      iconPaths: [
        'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      ],
      text: 'Exercices pratiques, mises en situation et accompagnement individuel si nécessaire.',
    },
    {
      iconPaths: [
        'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
        'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      ],
      text: 'Supports visuels accessibles, vocabulaire simplifié et progression en petites étapes.',
    },
    {
      iconPaths: ['M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'],
      text: "Possibilité d'organiser les modules dans les locaux des partenaires ou via l'Espace Public Numérique Mobile (EPNM).",
    },
  ]

  const imageSections: Array<{
    title: string
    imageSrc: string
    imageAlt: string
    description?: string
    intro?: string
    listItems: string[]
    conclusion?: string
  }> = [
    {
      title: 'Publics cibles',
      imageSrc: '/assets/epnm/initiation/informatique.jpeg',
      imageAlt: "Participants en atelier d'initiation informatique",
      intro: "L'initiation en informatique s'adresse notamment a :",
      listItems: publicsCibles.map((item) => `${item.title} : ${item.description}`),
      conclusion:
        'Chaque parcours est ajuste au rythme, aux besoins et au contexte des apprenants.',
    },
    {
      title: 'Contenus des modules',
      imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
      imageAlt: "Apprentissage des competences numeriques de base",
      intro: "Les seances d'initiation couvrent notamment :",
      listItems: moduleContents,
      conclusion:
        'Les modules combinent acquisition des bases et application immediate dans la vie quotidienne.',
    },
    {
      title: 'Partenaires',
      imageSrc: '/assets/services/perfectionnement/office.jpg',
      imageAlt: 'Travail collaboratif entre partenaires associatifs',
      intro: 'Les actions sont menees en collaboration avec :',
      listItems: partenaires,
      conclusion:
        "Ce reseau de partenaires permet de deployer des actions de proximite et d'inclusion numerique.",
    },
    {
      title: 'Approche pedagogique',
      imageSrc: '/assets/epnm/initiation/microbit.jpg',
      imageAlt: "Animation pedagogique autour d'outils numeriques",
      description:
        'Une pedagogie progressive, concrete et inclusive est mise en place pour favoriser la confiance numerique.',
      listItems: approchesPedagogiques.map((item) => item.text),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
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
              Nos Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              Initiation en informatique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3 text-justify [text-align-last:start]"
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
              className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <h2 className="text-3xl font-bold text-primary-100 mb-4">
                  À propos de l&apos;initiation
                </h2>
                <p className="text-primary-100/90 leading-relaxed text-lg">
                  ECD asbl développe un programme complet d&apos;initiation en informatique visant à
                  offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre
                  s&apos;adresse à un large public et s&apos;adapte aux besoins spécifiques de
                  chacun.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publics cibles */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="sr-only">
              Publics cibles
            </motion.h2>
            <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl">
              <DarkTextCard variant="solid" raw className="rounded-2xl p-6 md:p-8">
                <ul className="space-y-5 text-inherit">
                  {publicsCibles.map((item) => (
                    <li key={item.title} className="leading-relaxed">
                      <span className="font-semibold block mb-1">{item.title}</span>
                      <span className="text-inherit/90">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-stretch auto-rows-fr">
              {objectifsGeneraux.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex min-h-0 [&_.rounded-2xl]:rounded-2xl"
                >
                  <DarkTextCard
                    variant={item.variant}
                    hover
                    raw
                    className="rounded-2xl p-8 h-full w-full flex flex-col"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.iconBg} text-white mb-4 shadow-md`}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <p className="leading-relaxed text-lg font-medium text-inherit flex-1">
                      {item.text}
                    </p>
                  </DarkTextCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections image + texte */}
      {imageSections.map((section, index) => (
        <ImageCardHero
          key={section.title}
          title={section.title}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imageOnLeft={index % 2 === 0}
          description={section.description}
          intro={section.intro}
          listItems={section.listItems}
          conclusion={section.conclusion}
          compactSpacing
        />
      ))}
    </div>
  )
}

export default Page
