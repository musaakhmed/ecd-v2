'use client'

import React from 'react'
import { motion } from 'framer-motion'

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

  const modules = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Messagerie électronique',
      description:
        "Maîtrisez l'envoi et la réception d'emails professionnels, la gestion de votre boîte mail et l'organisation de vos communications.",
      duration: '4 heures',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Applications mobiles professionnelles',
      description:
        'Découvrez et utilisez les applications essentielles pour votre travail : gestion du temps, communication, organisation.',
      duration: '6 heures',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Gestion documentaire',
      description:
        'Apprenez à créer, modifier et organiser vos documents numériques : textes, tableaux, présentations.',
      duration: '8 heures',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Tableurs et calculs',
      description:
        'Utilisez les tableurs pour organiser vos données, effectuer des calculs et créer des tableaux professionnels.',
      duration: '6 heures',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Sécurité et confidentialité',
      description:
        'Protégez vos données professionnelles et personnelles : gestion des mots de passe, identification des risques.',
      duration: '4 heures',
    },
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
        <div className="absolute inset-0 bg-[url('/assets/hero/titres-services.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
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
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/90 leading-relaxed mb-4"
            >
              Les formations sont pratiques et adaptées aux réalités du terrain : outils numériques
              du quotidien, organisation du temps, communication professionnelle et prévention de la
              surcharge mentale. Elles visent à renforcer l&apos;autonomie, l&apos;efficacité et le
              confort de travail des participants.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-white/90 leading-relaxed mb-6"
            >
              Organisées en inter-entreprise ou au sein de votre structure, ces formations
              s&apos;inscrivent dans les dispositifs de financement existants et sont animées par
              des formateurs expérimentés, à l&apos;écoute des besoins du secteur Titres-Services.
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

      {/* Modalités de partenariat - First section */}
      <section className="py-16 md:py-24">
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

      {/* What is Titres-Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 text-center"
            >
              Programme de Formation Numérique
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dans le cadre du secteur des Titres-Services, nous proposons des formations
                spécialement adaptées aux travailleurs des entreprises agréées. L&apos;objectif est
                de familiariser ces professionnels avec les outils numériques essentiels pour
                améliorer leur efficacité au travail et leur autonomie dans l&apos;utilisation des
                technologies modernes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos formations sont conçues pour être pratiques, accessibles et directement
                applicables dans le contexte professionnel des travailleurs Titres-Services. Nous
                nous déplaçons directement sur les sites des entreprises partenaires pour offrir une
                formation sur mesure.
              </p>
            </motion.div>
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
              Modules de Formation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Des modules pratiques et progressifs pour maîtriser les outils numériques
              professionnels
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {modules.map((module) => (
                <motion.div
                  key={module.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-transparent rounded-full -mr-12 -mt-12 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="text-primary-600 mb-4">{module.icon}</div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-secondary-900">{module.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{module.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary-600 font-medium">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
