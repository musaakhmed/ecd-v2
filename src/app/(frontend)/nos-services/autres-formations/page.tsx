'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { CourseModuleCard } from '@/components/ui/CourseModuleCard'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import { autresFormationsPageContent as content } from '@/lib/content/nosServices/autresFormationsPage'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <HeroSection
        imageSrc={content.hero.imageSrc}
        imageAlt={content.hero.imageAlt}
        subtitle={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
      />

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

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-4"
            >
              {content.formationsSection.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto"
            >
              {content.formationsSection.description}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.courses.map((course) => (
                <CourseModuleCard
                  key={course.slug}
                  href={`/nos-services/autres-formations/${course.slug}`}
                  title={course.title}
                  imageSrc={course.imageSrc}
                  imageAlt={course.imageAlt}
                  ctaLabel={content.formationsSection.linkLabel}
                  variants={fadeInUp}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
