'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export interface ProjectCardItem {
  title: string
  description: string
  image: string
  link: string
}

interface ProjectCardProps {
  project: ProjectCardItem
  index?: number
  animationDelay?: number
}

const ProjectCard = ({ project, index = 0, animationDelay }: ProjectCardProps) => {
  const delay = animationDelay ?? index * 0.1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <Link href={project.link} className="block h-full">
        <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl overflow-hidden border border-primary-600 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group-hover:border-primary-500 min-h-[380px] md:min-h-[420px]">
          <div className="relative h-40 md:h-44 flex-shrink-0 overflow-hidden rounded-t-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-800/95 via-primary-800/50 to-transparent" />
          </div>
          <div className="p-5 md:p-6 flex flex-col flex-1 min-h-0 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-12 -mt-12" />
            <div className="relative z-10 flex flex-col flex-1 min-h-0">
              <h3 className="text-xl font-semibold text-white mb-2 flex-shrink-0">
                {project.title}
              </h3>
              <p className="text-primary-100 text-sm md:text-base leading-relaxed flex-1 min-h-0 line-clamp-3 mb-4">
                {project.description}
              </p>
              <span className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm border border-white/20 flex-shrink-0 mt-auto">
                En savoir plus
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
