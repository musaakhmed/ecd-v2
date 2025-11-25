'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Inclusion',
      description: 'Promouvoir l\'intégration et l\'insertion de tous les publics, sans discrimination.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Innovation',
      description: 'Utiliser les outils numériques pour créer des opportunités d\'apprentissage modernes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: 'Éducation',
      description: 'Offrir des programmes éducatifs de qualité accessibles à tous.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: 'Bienveillance',
      description: 'Accompagner chaque personne avec respect, patience et empathie.',
    },
  ]

  const agreements = [
    {
      title: 'Opérateur École de Devoirs',
      organization: 'ONE (Office de la Naissance et de l\'Enfance)',
      period: 'Agréé jusqu\'en 2025',
      description: 'Reconnaissance officielle pour notre programme d\'accompagnement scolaire.',
    },
    {
      title: 'Espace Public Numérique Mobile',
      organization: 'Label EPNM',
      period: 'Service actif',
      description: 'Service mobile de formation numérique pour réduire la fracture digitale.',
    },
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
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              À Propos de Nous
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
            >
              Espace Cultures & Développement asbl favorise l&apos;intégration et l&apos;insertion
              de tous les publics grâce à la promotion de la culture, l&apos;accès aux outils
              numériques, et la lutte contre la fracture numérique.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              Notre Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
            >
              Depuis notre création, nous nous engageons à créer un espace d&apos;apprentissage
              inclusif où chacun peut développer ses compétences, découvrir de nouvelles
              opportunités et s&apos;épanouir dans un environnement bienveillant et stimulant.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">Nos Objectifs</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>
                    Réduire la fracture numérique en offrant des formations accessibles à tous les
                    publics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>
                    Accompagner les enfants et les jeunes dans leur parcours scolaire et leur
                    développement personnel
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>
                    Former les travailleurs aux outils numériques pour améliorer leurs compétences
                    professionnelles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>
                    Promouvoir la culture et l&apos;éducation comme leviers d&apos;intégration
                    sociale
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos Valeurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100"
                >
                  <div className="text-primary-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreements Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
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
              Nos Agréments et Reconnaissances
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {agreements.map((agreement, index) => (
                <motion.div
                  key={agreement.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {agreement.title}
                    </h3>
                    <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {agreement.period}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">{agreement.organization}</p>
                  <p className="text-gray-600 leading-relaxed">{agreement.description}</p>
                </motion.div>
              ))}
            </div>
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
              Rejoignez Notre Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Ensemble, construisons un avenir plus inclusif et numérique pour tous.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
