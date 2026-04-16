'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { initiationInformatiquePageContent as content } from '@/lib/content/nosServices/initiationInformatiquePage'

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

  const objectifsGeneraux = [
    {
      variant: 'gradient-primary' as const,
      iconBg: 'bg-primary-500/80',
      iconPath:
        'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      text: content.objectifsGeneraux.items[0],
    },
    {
      variant: 'gradient-secondary' as const,
      iconBg: 'bg-secondary-500/80',
      iconPath:
        'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      text: content.objectifsGeneraux.items[1],
    },
    {
      variant: 'gradient-primary' as const,
      iconBg: 'bg-primary-500/80',
      iconPath:
        'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      text: content.objectifsGeneraux.items[2],
    },
    {
      variant: 'gradient-secondary' as const,
      iconBg: 'bg-secondary-500/80',
      iconPath:
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      text: content.objectifsGeneraux.items[3],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.hero.imageSrc}
            alt={content.hero.imageAlt}
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
              {content.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3 text-justify [text-align-last:start]"
            >
              {content.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Publics ciblés */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12"
            >
              {content.publicsCibles.title}
            </motion.h2>
            <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl">
              <DarkTextCard variant="solid" raw className="rounded-2xl p-6 md:p-8">
                <ul className="space-y-5 text-inherit">
                  {content.publicsCibles.items.map((item) => (
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
      <section className="py-12 bg-white">
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12"
            >
              {content.objectifsGeneraux.title}
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

      {/* Contenus des modules */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-6"
            >
              {content.modules.title}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-200 leading-relaxed mb-8 text-center"
              >
              {content.modules.intro}
              </motion.p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <ul className="relative z-10 space-y-4 text-primary-100">
                {content.modules.items.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-6"
            >
              {content.partenaires.title}
            </motion.h2>

            <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl">
              <DarkTextCard variant="solid" raw className="rounded-2xl p-6 md:p-8">
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-gray-200 leading-relaxed mb-12 text-center max-w-2xl mx-auto"
                >
              {content.partenaires.intro}
                </motion.p>
                <ul className="space-y-3 text-inherit">
              {content.partenaires.items.map((name) => (
                    <li key={name} className="leading-relaxed flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="py-12 bg-white">
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12"
            >
              {content.approchePedagogique.title}
            </motion.h2>
            <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl">
              <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <ul className="space-y-4 text-primary-100">
                    {content.approchePedagogique.items.map((text) => (
                      <li key={text} className="flex gap-4 items-start">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                        <span className="leading-relaxed text-lg font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
