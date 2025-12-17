'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { eddPageContent } from '@/lib/about-content'

const Page = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect()
        const scrolled = window.scrollY - rect.top
        // Parallax effect: background moves at 30% of scroll speed
        setScrollY(scrolled * 0.3)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/ecole-de-devoirs.png"
            alt="École de Devoirs"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/80 to-secondary-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4"
            >
              {content.hero.subtitle}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Espace Cultures & Développement est reconnu par l’ONE comme opérateur d’École de
              Devoirs. Nous accueillons principalement les enfants du quartier
              Notre-Dame-Aux-Neiges, avec une large participation de l’école fondamentale Congrès
              Dachsbeck (±80 %).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Un accueil orienté soutien scolaire
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                L’accueil est pensé pour soutenir la réussite scolaire des enfants du quartier. Nous
                offrons un cadre rassurant, des repères méthodologiques et un accompagnement
                rapproché afin de consolider les acquis, révéler les besoins et encourager la
                confiance.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl border border-primary-100 dark:border-primary-900/50 p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                Repères clés
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                {content.reperePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Axes */}
      <section ref={parallaxRef} className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -inset-y-[100%]">
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY}px) scale(1.1)`,
              willChange: 'transform',
            }}
          >
            <Image
              src="/assets/edd/ateliers-didactique.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Subtle overlay only in the middle for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-gray-950/40 pointer-events-none" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100"
            >
              Deux axes complémentaires
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {content.axes.map((axe) => (
                <motion.article
                  key={axe.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
                    {axe.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                    {axe.description}
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc list-inside">
                    {axe.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ateliers */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4"
            >
              Animations et ateliers
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Un programme hebdomadaire structuré du lundi au vendredi, combinant soutien scolaire,
              développement des compétences et temps de détente.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {content.ateliers.map((atelier) => (
                <motion.div
                  key={atelier.title}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.01 }}
                  className="group relative rounded-xl overflow-hidden shadow-lg border border-primary-100 dark:border-primary-900/60 min-h-[400px] cursor-pointer transition-all duration-300 ease-in-out"
                >
                  {atelier.image && (
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={atelier.image}
                          alt={atelier.title}
                          fill
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80 transition-all duration-300 ease-in-out" />
                    </>
                  )}
                  <div className="relative p-6 h-full flex flex-col justify-center items-center group-hover:justify-start text-white transition-all duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-white text-center group-hover:mb-2 transition-all duration-300 ease-in-out">
                      {atelier.title}
                    </h3>
                    <p className="text-white/95 mt-2 leading-relaxed hidden group-hover:block transition-opacity duration-300 ease-in-out">
                      {atelier.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-white/90 list-disc list-inside hidden group-hover:block transition-opacity duration-300 ease-in-out">
                      {atelier.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalités */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-10"
            >
              Modalités et rythme hebdomadaire
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-primary-100 dark:border-primary-900/60 p-6 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Vendredi : aide aux devoirs
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Séances ajustables selon les besoins, centrées sur la réalisation des travaux, la
                  remédiation et la méthodologie.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="rounded-xl border border-secondary-100 dark:border-secondary-900/60 p-6 bg-gradient-to-br from-secondary-50 to-white dark:from-secondary-900/20 dark:to-gray-900 shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                  Lundi à vendredi : animations
                </h3>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Parcours équilibré entre soutien scolaire, ateliers thématiques, activités
                  socio-éducatives et moments récréatifs pour un cadre serein.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
