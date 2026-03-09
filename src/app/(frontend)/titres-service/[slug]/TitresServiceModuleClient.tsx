'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { TitreServiceCatalogueModule } from '@/lib/titresServices'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

export function TitresServiceModuleClient({
  module_,
}: {
  module_: TitreServiceCatalogueModule
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="space-y-8"
    >
      {/* Description */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">Description</h2>
        <div className="bg-white rounded-xl border border-primary-100 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {module_.description}
          </p>
        </div>
      </motion.section>

      {/* Objectifs */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">Objectifs</h2>
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 p-6 shadow-sm">
          <ul className="space-y-3">
            {module_.objectifs.map((obj, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                <span className="text-gray-700 leading-relaxed">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Modalités et pédagogie */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">
          Modalités et pédagogie
        </h2>
        <div className="bg-white rounded-xl border border-primary-100 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {module_.modalitesPédagogie}
          </p>
        </div>
      </motion.section>

      {/* Évaluation et suivi */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">
          Évaluation et suivi
        </h2>
        <div className="bg-white rounded-xl border border-primary-100 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {module_.evaluationSuivi}
          </p>
        </div>
      </motion.section>

      {/* Supports logistiques */}
      <motion.section variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary-900 mb-3">
          Supports logistiques
        </h2>
        <div className="bg-white rounded-xl border border-primary-100 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {module_.supportsLogistiques}
          </p>
        </div>
      </motion.section>
    </motion.div>
  )
}
