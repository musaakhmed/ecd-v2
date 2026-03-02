'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { eddPageContent } from '@/lib/about-content'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { DarkIntroSection } from '@/components/ui/DarkIntroSection'

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
    <div className="min-h-screen dark:bg-gray-950 flex flex-col gap-12">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/ecole-de-devoirs.png"
            alt="École de Devoirs"
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
              {content.hero.subtitle}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2 md:mb-3"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              Espace Cultures & Développement est reconnu par l&apos;ONE comme opérateur
              d&apos;École de Devoirs « Notre-Dame-Aux-Neiges ». L&apos;accueil est orienté vers le
              soutien scolaire des enfants du quartier, avec une majorité issue de l&apos;école
              Congrès Dachsbeck (~80 % des participants).
            </motion.p>
          </motion.div>
        </div>
      </section>

      <DarkIntroSection>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-100 mb-6">
          Un accueil orienté soutien scolaire
        </h2>
        <p className="mb-6">
          L&apos;accueil est pensé pour soutenir la réussite scolaire des enfants du quartier. Nous
          offrons un cadre rassurant, des repères méthodologiques et un accompagnement rapproché
          afin de consolider les acquis, révéler les besoins et encourager la confiance.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          {content.reperePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </DarkIntroSection>

      {/* Modalités */}
      <section className=" bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                Modalités et rythme hebdomadaire
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                Un programme adapté aux besoins des enfants, alliant soutien scolaire et activités
                d&apos;épanouissement
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-xl">
                <DarkTextCard variant="gradient-primary" hover raw className="rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                      V
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-50">
                      Vendredi : aide aux devoirs
                    </h3>
                  </div>
                  <p className="leading-relaxed text-inherit">
                    Séances ajustables selon les besoins, centrées sur la réalisation des travaux, la
                    remédiation et la méthodologie.
                  </p>
                </DarkTextCard>
              </motion.div>
              <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-xl">
                <DarkTextCard variant="gradient-secondary" hover raw className="rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold">
                      L-V
                    </div>
                    <h3 className="text-2xl font-semibold text-secondary-50">
                      Lundi à vendredi : animations
                    </h3>
                  </div>
                  <p className="leading-relaxed text-inherit">
                    Parcours équilibré entre soutien scolaire, ateliers thématiques, activités
                    socio-éducatives et moments récréatifs pour un cadre serein.
                  </p>
                </DarkTextCard>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Axes */}
      <section ref={parallaxRef} className="relative py-16 md:py-20 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 -inset-y-[100%] ">
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
              className="object-cover "
              priority
            />
          </div>
          {/* Subtle overlay only in the middle for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-transparent dark:via-gray-950/40 pointer-events-none" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="space-y-10 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-6">
                Les activités proposées s&apos;articulent autour de deux axes complémentaires :
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              {content.axes.map((axe, index) => {
                const romanNumerals = ['I', 'II']
                return (
                  <motion.article key={axe.title} variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl">
                    <DarkTextCard variant="solid" hover raw className="rounded-2xl p-8 shadow-xl">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                          {romanNumerals[index]}
                        </div>
                        <h3 className="text-2xl font-semibold text-white pt-2">
                          {axe.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed mb-5 pl-16 text-inherit">
                        {axe.description}
                      </p>
                    {index === 0 && (
                      <ul className="space-y-2.5 text-inherit pl-16">
                        {axe.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {index === 1 && (
                      <p className="text-inherit pl-16">{axe.points[0]}</p>
                    )}
                    </DarkTextCard>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ateliers - ImageCardHero per atelier */}
      <section className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6 pt-12 pb-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 mb-3"
            >
              II. Animations didactiques, éducatives et ludiques
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-3"
            >
              {content.axes[1].description}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg font-semibold text-primary-900 dark:text-primary-100 max-w-3xl mx-auto mb-0"
            >
              {content.axes[1].points[0]} :
            </motion.p>
          </motion.div>
        </div>
        {content.ateliers.map((atelier, index) =>
          atelier.image ? (
            <ImageCardHero
              key={atelier.title}
              title={atelier.title}
              titleInCard
              compactSpacing
              imageSrc={atelier.image}
              imageAlt={atelier.title}
              imageOnLeft={index % 2 === 0}
              description={atelier.description}
              listItems={atelier.items}
            />
          ) : null
        )}
      </section>
    </div>
  )
}

export default Page
