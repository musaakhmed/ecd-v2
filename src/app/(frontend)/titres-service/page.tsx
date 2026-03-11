'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { catalogueModules } from '@/lib/titresServices'

const Page = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const groupes = [
    { key: 'outils-numeriques' as const, title: 'Outils numériques' },
    { key: 'techniques-prevention' as const, title: 'Techniques et prévention' },
    { key: 'bien-etre-savoir-faire' as const, title: 'Bien-être et savoir faire' },
  ]

  const benefits = [
    {
      title: 'Amélioration des compétences',
      description:
        'Développez vos compétences numériques pour être plus efficace dans votre travail.',
    },
    {
      title: 'Formation sur site',
      description: 'Nous venons directement dans votre entreprise pour vous former à votre rythme.',
    },
    {
      title: 'Équipements fournis',
      description: 'Tous les équipements nécessaires sont apportés sur place pour la formation.',
    },
    {
      title: 'Accompagnement personnalisé',
      description: 'Un formateur dédié vous accompagne selon vos besoins et votre niveau.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: "url('/assets/services/perfectionnement/office.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:!text-4xl font-bold mb-2"
            >
              Titres Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/95 font-medium mb-6"
            >
              Notre catalogue
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/90 leading-relaxed mb-4"
            >
              ECD asbl accompagne les entreprises dans le renforcement des compétences numériques,
              l&apos;amélioration de l&apos;organisation du travail et la promotion du bien-être des
              équipes.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Formation professionnelle
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Sur site
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Adapté aux besoins
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <p className="text-lg leading-relaxed mb-6">
                  Les formations sont pratiques et adaptées aux réalités du terrain : outils
                  numériques du quotidien, organisation du temps, communication professionnelle et
                  prévention de la surcharge mentale. Elles visent à renforcer l&apos;autonomie,
                  l&apos;efficacité et le confort de travail des participants.
                </p>
                <p className="text-lg leading-relaxed mb-0">
                  Organisées en inter-entreprise ou au sein de votre structure, ces formations
                  s&apos;inscrivent dans les dispositifs de financement existants et sont animées
                  par des formateurs expérimentés, à l&apos;écoute des besoins du secteur
                  Titres-Services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modalités de partenariat (parallax background) */}
      <section className="relative isolate py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/epnm/initiation/informatique.jpeg')" }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary-950/85 via-primary-900/80 to-primary-950/85" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-md"
            >
              Modalités de partenariat
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: 'Format',
                  description:
                    'Formations en inter-entreprise ou au sein de votre structure. Une salle de formation équipée à Bruxelles est mise à votre disposition.',
                },
                {
                  title: 'Financement',
                  description:
                    'Bénéficiez du remboursement des frais de formation via le Fonds de Formation de Bruxelles, Forem Formation ou FORM TS.',
                },
                {
                  title: 'Participants',
                  description:
                    "L'effectif par session est de 6-12 participants. Le suivi de présence des participants est assuré par les partenaires.",
                },
                {
                  title: 'Tarifs',
                  description:
                    'Les tarifs sont proposés par participant ou par groupe, avec un forfait de déplacement inclus.',
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-600 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                    <p className="text-primary-100 leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 text-center"
            >
              Modules de formation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Une offre structurée en trois axes. Cliquez sur un module pour accéder à sa fiche.
            </motion.p>

            {groupes.map((g) => (
              <div key={g.key} className="mb-14 last:mb-0">
                <motion.h3
                  variants={fadeInUp}
                  className="text-xl md:text-2xl font-semibold text-primary-700 mb-6 text-center"
                >
                  {g.title}
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                  {catalogueModules
                    .filter((m) => m.category === g.key)
                    .map((mod) => (
                      <motion.div
                        key={mod.slug}
                        variants={fadeInUp}
                        whileHover={{ y: -4 }}
                        className="h-full w-full sm:w-[calc(50%-0.5rem)] lg:w-[240px] xl:w-[220px]"
                      >
                        <Link
                          href={`/titres-service/${mod.slug}`}
                          className="group block h-full overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative h-36 md:h-40 w-full overflow-hidden">
                            <Image
                              src={mod.imageSrc}
                              alt={mod.imageAlt}
                              fill
                              className="object-cover transition duration-700 group-hover:scale-105"
                              sizes="(min-width: 1280px) 16rem, (min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/55 via-secondary-900/10 to-transparent" />
                            {mod.isPlaceholder && (
                              <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-auxiliary-50 px-3 py-1 text-[11px] font-semibold text-auxiliary-800 ring-1 ring-auxiliary-200">
                                Contenu à venir
                              </span>
                            )}
                          </div>
                          <div className="p-4 md:p-5 flex flex-col h-[220px]">
                            <h4 className="text-base md:text-lg font-semibold text-secondary-900 mb-2">
                              {mod.titre}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">
                              {mod.descriptionCourte}
                            </p>
                            <span className="mt-auto text-primary-600 text-sm font-medium inline-flex items-center gap-1">
                              Voir la fiche
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12 text-center"
            >
              Avantages de Nos Formations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary-500"
                >
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12 text-center"
            >
              Modalités de Participation
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Contact entreprise',
                    description:
                      "L'entreprise agréée Titres-Services nous contacte pour organiser une formation pour ses travailleurs.",
                  },
                  {
                    step: '02',
                    title: 'Évaluation des besoins',
                    description:
                      "Nous évaluons les besoins spécifiques de l'entreprise et adaptons le programme de formation.",
                  },
                  {
                    step: '03',
                    title: 'Planification',
                    description:
                      'Nous planifions les sessions de formation sur site avec les équipements nécessaires.',
                  },
                  {
                    step: '04',
                    title: 'Formation',
                    description:
                      'Nos formateurs interviennent directement sur site pour former les travailleurs.',
                  },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-primary-50 rounded-lg p-6 border border-primary-100">
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 text-center"
            >
              Partenariats
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous collaborons avec de nombreuses entreprises agréées Titres-Services en Belgique
                pour offrir des formations numériques de qualité à leurs travailleurs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si vous êtes une entreprise agréée Titres-Services et souhaitez proposer des
                formations numériques à vos travailleurs, n&apos;hésitez pas à nous contacter pour
                discuter de vos besoins et organiser une intervention sur votre site.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Intéressé par nos Formations ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 leading-relaxed">
              Contactez-nous pour organiser une formation sur site pour vos travailleurs
              Titres-Services.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Demander une Formation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
