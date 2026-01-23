'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ServiceSection } from '@/components/ui/ServiceSection'
import { maintenanceSections } from '@/lib/maintenance-services'

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
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/transition-numerique.png"
            alt="Maintenance & Dépannage Informatiques"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
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
              Nos Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Maintenance & Dépannage Informatiques
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Un service de maintenance et de dépannage informatique professionnel pour garantir le
              bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques.
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50"
            >
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                À propos de nos services de maintenance
              </h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Notre équipe de techniciens expérimentés vous propose des services de maintenance
                préventive et de dépannage pour tous vos équipements informatiques : ordinateurs,
                tablettes, smartphones, et périphériques.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce
                soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à
                jour et d&apos;optimisation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {maintenanceSections.map((section, index) => (
        <ServiceSection
          key={index}
          section={section}
          index={index}
          fadeInUp={fadeInUp}
          staggerContainer={staggerContainer}
        />
      ))}
    </div>
  )
}

export default Page
