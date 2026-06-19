'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CourseModuleCard } from '@/components/ui/CourseModuleCard'
import {
  autresFormationsCatalogueSections,
} from '@/lib/content/pages/autresFormationsPageData'

export type AutresFormationCatalogueCardModule = {
  slug: string
  titre: string
  imageSrc: string
  imageAlt: string
}

export function AutresFormationsCatalogueClient({
  modules,
}: {
  modules: AutresFormationCatalogueCardModule[]
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <section className="py-12 bg-white" id="autres-formations-modules">
      <div className="container mx-auto px-4">
        <motion.div initial="visible" animate="visible" variants={staggerContainer}>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center"
          >
            {autresFormationsCatalogueSections.modulesTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div key={mod.slug} className="h-full">
                <CourseModuleCard
                  href={`/autres-formations/${mod.slug}`}
                  title={mod.titre}
                  imageSrc={mod.imageSrc}
                  imageAlt={mod.imageAlt}
                  ctaLabel={autresFormationsCatalogueSections.viewModuleLabel}
                  variants={fadeInUp}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
