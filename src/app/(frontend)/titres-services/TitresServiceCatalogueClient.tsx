'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CourseModuleCard } from '@/components/ui/CourseModuleCard'

type CatalogueCategoryKey = 'outils-numeriques' | 'techniques-prevention' | 'bien-etre-savoir-faire'

export type TitresServiceCatalogueCardModule = {
  slug: string
  titre: string
  category: CatalogueCategoryKey
  imageSrc: string
  imageAlt: string
  isPlaceholder?: boolean | null
}

const groupes: Array<{ key: CatalogueCategoryKey; title: string }> = [
  { key: 'outils-numeriques', title: 'Outils numériques' },
  { key: 'techniques-prevention', title: 'Techniques et prévention' },
  { key: 'bien-etre-savoir-faire', title: 'Bien-être et savoir faire' },
]

export function TitresServiceCatalogueClient({
  modules,
}: {
  modules: TitresServiceCatalogueCardModule[]
}) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial="visible" animate="visible" variants={staggerContainer}>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 text-center"
          >
            Nos thèmes de formation{' '}
          </motion.h2>

          {groupes.map((g) => (
            <div key={g.key} className="mb-14 last:mb-0">
              <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl mb-2">
                <h3 className="font-semibold bg-linear-to-br from-azure-600 to-azure-700 text-primary-100 inline-block p-1 px-2 rounded-sm">
                  {g.title}
                </h3>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
                {modules
                  .filter((m) => m.category === g.key)
                  .slice()
                  .reverse()
                  .map((mod) => (
                    <div key={mod.slug} className="h-full">
                      <CourseModuleCard
                        href={`/titres-services/${mod.slug}`}
                        title={mod.titre}
                        imageSrc={mod.imageSrc}
                        imageAlt={mod.imageAlt}
                        ctaLabel="Voir la fiche"
                        badgeLabel={mod.isPlaceholder ? 'Contenu à venir' : undefined}
                        variants={fadeInUp}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
