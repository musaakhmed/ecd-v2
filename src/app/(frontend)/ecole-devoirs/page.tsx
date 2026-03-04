'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { eddPageContent } from '@/lib/ecole-devoirs-content'

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

  const content = eddPageContent

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[url('/assets/hero/devoirs.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
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
      <section className="py-16 md:py-24" id="intro">
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
              {content.intro.map((paragraph, i) => (
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

      {/* Activités et programmes */}
      <section className="py-16 md:py-24 bg-white" id="activites-programmes">
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
              Activités et programmes
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              {content.activites.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-700 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              <ul className="space-y-3 text-gray-700 mt-4">
                {content.activites.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Public cible */}
      <section className="py-16 md:py-24" id="public-cible">
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
              Public cible
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              {content.publicCible.map((paragraph, i) => (
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

      {/* Notre projet pédagogique */}
      <section className="py-16 md:py-24 bg-white" id="projet-pedagogique">
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
              Notre projet pédagogique
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100 mb-8"
            >
              {content.projetPedagogique.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-secondary-900 mb-6 text-center"
            >
              Nos objectifs prioritaires
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 text-center mb-8"
            >
              Nous visons à développer :
            </motion.p>
            <div className="space-y-4">
              {content.projetPedagogique.objectifs.map((obj, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100"
                >
                  <h4 className="text-lg font-semibold text-secondary-900 mb-1">
                    {obj.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{obj.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Café-Parents */}
      <section className="py-16 md:py-24" id="cafe-parents">
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
              Café-Parents
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              {content.cafeParents.map((paragraph, i) => (
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

      {/* La petite histoire */}
      <section className="py-16 md:py-24 bg-white" id="petite-histoire">
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
              La petite histoire de l&apos;École de Devoirs
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-primary-100"
            >
              {content.petiteHistoire.map((paragraph, i) => (
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
    </div>
  )
}

export default Page
