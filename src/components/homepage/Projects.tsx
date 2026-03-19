'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data/homepage/projects'
import ProjectCard from '@/components/ui/ProjectCard'

const Projects = () => {
  return (
    <section
      id="projets"
      className="w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-primary-800 to-primary-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nos Projets
        </motion.h2>
        <motion.p
          className="text-primary-100 text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Face à la digitalisation croissante des services, Espace Cultures & Développement
          développe des actions d&apos;inclusion numérique de proximité à destination des seniors,
          des familles, des élèves et des habitants de logements sociaux. À travers des dispositifs
          concrets tels que Connectés & Autonomes, le Digital Bus au pied des écoles et Numérique
          en bas de chez toi, l&apos;objectif est de renforcer l&apos;autonomie numérique,
          l&apos;accès aux droits et l&apos;égalité des chances. En allant à la rencontre des
          publics, ces projets font du numérique un outil de lien social, d&apos;émancipation et de
          participation citoyenne, accessible à toutes et tous.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
