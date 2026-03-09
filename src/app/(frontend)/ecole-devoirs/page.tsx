'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { eddPageContent, eddSections } from '@/lib/ecole-devoirs-content'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const sectionDescriptions: Record<string, string> = {
  'petite-histoire':
    "L'histoire du quartier du Congrès et de la création de l'École de Devoirs depuis 2015.",
  'projet-pedagogique':
    "Nos objectifs éducatifs et notre approche inclusive : élève, école et parents.",
  'activites-et-programmes':
    "Aide aux devoirs, ateliers créatifs, numérique, sorties, jeux, cuisine et bien plus.",
  'cafe-parents':
    "Un espace d'échange et de parole pour les parents, en partenariat avec la Maison Médicale Enseignement.",
  partenaires:
    "ONE, CEDD, école Congrès Dachsbeck, Maison Médicale et acteurs du quartier.",
  'public-cible':
    "Enfants 6-12 ans, quartier du Congrès et environs : mixité, accessibilité et continuité.",
}

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: "url('/assets/hero/devoirs.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10 py-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold mb-2"
            >
              École de Devoirs
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/95 font-medium"
            >
              Notre-Dame-Aux-Neiges
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              {eddPageContent.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 text-center"
            >
              Découvrir l&apos;École de Devoirs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Projet pédagogique, activités, public, partenaires et petite histoire.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eddSections.map((section) => (
                <motion.div key={section.slug} variants={fadeInUp}>
                  <Link
                    href={`/ecole-devoirs/${section.slug}`}
                    className="block h-full bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 shadow-md hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {section.menuTitle}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {sectionDescriptions[section.slug]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary-600 text-sm font-medium">
                      Lire plus
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
