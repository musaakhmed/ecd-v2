'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { autresFormationsPageContent as content } from '@/lib/content/nosServices/autresFormationsPage'
import { commonLabels } from '@/lib/content/commonLabels'

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
                <h2 className="text-2xl md:text-3xl font-bold text-primary-100 mb-4">
                  {content.intro.title}
                </h2>
                {content.intro.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-primary-100/90 leading-relaxed text-lg mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-primary-50 to-white">
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
              {content.secteurs.title}
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="solid" raw>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto"
                >
                  {content.secteurs.description}
                </motion.p>
                <h3 className="font-semibold text-white py-2">{content.secteurs.cardTitle}</h3>
                <ul className="space-y-4 text-inherit">
                  {content.secteurs.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                      <div>
                        <span className="font-semibold">{item.title}</span>
                        <p className="text-sm text-gray-200 mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center flex flex-col gap-6"
          >
            <motion.div className="font-semibold">{content.cta.text}</motion.div>
            <motion.div variants={fadeInUp}>
              <Link href={content.cta.href}>
                <motion.button
                  className="relative text-white px-8 py-4 rounded-lg font-semibold cursor-pointer overflow-hidden group text-lg"
                  style={{ backgroundColor: 'var(--color-primary-600)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(66, 142, 189, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className="relative z-10" initial={false} whileHover={{ x: 2 }}>
                    {content.cta.buttonLabel ?? commonLabels.ctas.learnMore}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--color-secondary-600)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
