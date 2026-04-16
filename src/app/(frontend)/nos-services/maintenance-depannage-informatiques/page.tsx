'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { maintenanceDepannageInformatiquePageContent as content } from '@/lib/content/nosServices/maintenanceDepannageInformatiquePage'

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

      {/* Première carte : à propos (inchangée, fond sombre) */}
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
              className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
              <div className="relative z-10 text-primary-100">
                <h2 className="text-3xl font-bold text-primary-100 mb-4">
                  {content.about.title}
                </h2>
                {(content.about.paragraphs ?? []).map((p) => (
                  <p key={p} className="text-primary-100/90 leading-relaxed text-lg mb-6 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sections image + texte (ImageCardHero) */}
      {content.sections.map((section, index) => (
        <ImageCardHero
          key={index}
          title={section.title}
          imageSrc={section.image}
          imageAlt={section.imageAlt}
          imageOnLeft={index % 2 === 0}
          description={'description' in section ? section.description : undefined}
          intro={'intro' in section ? section.intro : undefined}
          listItems={[...section.listItems]}
          conclusion={'conclusion' in section ? section.conclusion : undefined}
          compactSpacing
        />
      ))}
    </div>
  )
}

export default Page
