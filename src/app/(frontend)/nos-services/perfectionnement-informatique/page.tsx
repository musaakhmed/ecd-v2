'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ModuleImageCard } from '@/components/ui/ModuleImageCard'
import { perfectionnementInformatiquePageContent as content } from '@/lib/content/nosServices/perfectionnementInformatiquePage'

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

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50">
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
        <div className="absolute inset-0 bg-linear-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
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
              className="text-xl md:text-2xl lg:text-4xl! font-bold leading-tight mb-2 md:mb-3"
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
              className="bg-linear-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <h2 className="text-3xl font-bold text-primary-100 mb-6">
                  {content.intro.title}
                </h2>
                <ul className="space-y-4 text-primary-100/90">
                  {content.intro.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenus des modules */}
      <section className="py-12 bg-linear-to-b from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-4 md:mb-6"
            >
              {content.modules.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-sm md:text-base text-primary-700/80 mb-10 md:mb-14 max-w-3xl mx-auto"
            >
              {content.modules.description}
            </motion.p>

            <div className="space-y-8 md:space-y-10">
              {content.modules.items.map((m) => (
                <motion.article key={m.number} variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={m.number}
                    imageSrc={m.imageSrc}
                    imageAlt={m.imageAlt}
                    title={m.title}
                    badge={m.badge}
                    contentClassName={
                      m.columns ? `grid gap-4 ${m.columns.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}` : undefined
                    }
                  >
                    {m.columns ? (
                      m.columns.map((col, idx) =>
                        col.title ? (
                          <div key={`${m.number}-${idx}`}>
                            <h4 className="text-sm font-semibold text-primary-100 mb-2">{col.title}</h4>
                            <ul className="space-y-2 text-sm text-primary-100/85">
                              {col.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <ul key={`${m.number}-${idx}`} className="space-y-2 text-sm text-primary-100/85">
                            {col.items.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ),
                      )
                    ) : (
                      <ul className="space-y-2 text-sm text-primary-100/85">
                        {m.bullets?.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ModuleImageCard>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publics concernés */}
      <section className="py-12 bg-white">
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-8"
            >
              {content.publics.title}
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" raw>
                <ul className="space-y-4 text-inherit">
                  {content.publics.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
