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

  const activities = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: 'Aide aux devoirs',
      description:
        'Accompagnement personnalisé pour réaliser les devoirs et comprendre les leçons dans toutes les matières.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Remédiation scolaire',
      description:
        'Soutien ciblé pour surmonter les difficultés d\'apprentissage et renforcer les acquis.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Animations didactiques',
      description:
        'Activités éducatives ludiques pour apprendre en s\'amusant et développer la curiosité.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: 'Développement personnel',
      description:
        'Activités favorisant la confiance en soi, l\'autonomie et l\'épanouissement de chaque enfant.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const benefits = [
    'Amélioration des résultats scolaires',
    'Renforcement de la confiance en soi',
    'Développement de l\'autonomie',
    'Encouragement de la curiosité et de la créativité',
    'Création d\'un environnement bienveillant et stimulant',
    'Accompagnement personnalisé selon les besoins de chaque enfant',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/assets/hero/devoirs.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Agréé ONE jusqu&apos;en 2025
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              École de Devoirs
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6"
            >
              Programme &quot;Notre-Dame-Aux-Neiges&quot; - Un accompagnement scolaire de qualité
              pour révéler le potentiel de chaque enfant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is EDD Section */}
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
              Qu&apos;est-ce qu&apos;une École de Devoirs ?
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                L&apos;École de Devoirs (EDD) est un espace d&apos;accueil extrascolaire qui
                propose un accompagnement éducatif aux enfants et aux jeunes. Notre programme
                &quot;Notre-Dame-Aux-Neiges&quot; est reconnu et agréé par l&apos;Office de la
                Naissance et de l&apos;Enfance (ONE) jusqu&apos;en 2025.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous accueillons principalement les enfants du quartier, notamment ceux fréquentant
                l&apos;école fondamentale Congrès Dachsbeck, et leur offrons un environnement
                bienveillant pour apprendre, grandir et s&apos;épanouir.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
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
              Nos Activités
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Un programme complet pour accompagner chaque enfant dans son parcours scolaire et
              personnel
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="text-primary-600 mb-4">{activity.icon}</div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
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
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12 text-center"
            >
              Les Bénéfices pour Votre Enfant
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary-500"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-24 bg-white">
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
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12 text-center"
            >
              Horaires et Informations Pratiques
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Jours</h3>
                    <p className="text-gray-700">
                      Lundi, Mardi, Jeudi et Vendredi (hors vacances scolaires)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Horaires</h3>
                    <p className="text-gray-700">De 15h30 à 17h30</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Lieu</h3>
                    <p className="text-gray-700">
                      Rue du Gouvernement Provisoire 34A, 1000 Bruxelles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Public</h3>
                    <p className="text-gray-700">
                      Enfants du quartier, notamment ceux de l&apos;école fondamentale Congrès
                      Dachsbeck
                    </p>
                  </div>
                </div>
              </div>
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
              Inscrivez Votre Enfant
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Rejoignez notre École de Devoirs et offrez à votre enfant un accompagnement scolaire
              de qualité dans un environnement bienveillant.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Inscription
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
