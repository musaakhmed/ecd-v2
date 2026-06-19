'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { fadeInUp, staggerContainer } from '@/lib/utils/animations'
import type { AutresFormationCatalogueModule } from '@/lib/data/autres-formations/autresFormations'

const gradientBlockClassName =
  'bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border border-primary-600 relative overflow-hidden'

const GradientBlock = ({ children }: { children: React.ReactNode }) => (
  <div className={gradientBlockClassName}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-16 -mt-16" />
    <div className="relative z-10">{children}</div>
  </div>
)

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </div>
  </section>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    variants={fadeInUp}
    className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-8 md:mb-12"
  >
    {children}
  </motion.h2>
)

export function AutresFormationModuleClient({
  module_,
}: {
  module_: AutresFormationCatalogueModule
}) {
  const organisationBlocks = [
    {
      variant: 'gradient-primary' as const,
      ...module_.organisation.formule,
    },
    {
      variant: 'gradient-secondary' as const,
      ...module_.organisation.participants,
    },
    {
      variant: 'gradient-primary' as const,
      ...module_.organisation.duree,
    },
  ]

  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <SectionTitle>{module_.contexte.title}</SectionTitle>
        <motion.div variants={fadeInUp}>
          <GradientBlock>
            <div className="space-y-4 text-primary-100/90 leading-relaxed text-lg">
              {module_.contexte.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </GradientBlock>
        </motion.div>
      </Section>

      {module_.imageSections.map((section, index) => (
        <ImageCardHero
          key={section.key}
          title={section.title}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imageOnLeft={index % 2 === 0}
          description={section.description}
          intro={section.intro}
          listItems={section.listItems}
          conclusion={section.conclusion}
          compactSpacing
        />
      ))}

      <Section className="bg-white">
        <SectionTitle>{module_.organisation.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
          {organisationBlocks.map((block) => (
            <motion.div
              key={block.title}
              variants={fadeInUp}
              className="flex min-h-0 [&_.rounded-2xl]:rounded-2xl"
            >
              <DarkTextCard
                variant={block.variant}
                title={block.title}
                raw
                className="rounded-2xl p-6 md:p-8 h-full w-full"
              >
                <ul className="space-y-3 text-inherit">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start leading-relaxed">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base text-center"
          >
            Demander une offre
          </Link>
        </motion.div>
      </Section>

      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <SectionTitle>{module_.contenuPedagogique.title}</SectionTitle>
        <div className="space-y-6">
          {module_.contenuPedagogique.modules.map((moduleItem, index) => (
            <motion.div
              key={moduleItem.title}
              variants={fadeInUp}
              className="[&_.rounded-2xl]:rounded-2xl"
            >
              <DarkTextCard
                variant={index % 2 === 0 ? 'gradient-primary' : 'gradient-secondary'}
                raw
                className="rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl font-semibold mb-4">{moduleItem.title}</h3>
                <ul className="space-y-3 text-inherit">
                  {moduleItem.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start leading-relaxed">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </DarkTextCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <SectionTitle>{module_.resultatsAttendus.title}</SectionTitle>
        <motion.div variants={fadeInUp} className="[&_.rounded-2xl]:rounded-2xl mb-12">
          <DarkTextCard variant="solid" raw className="rounded-2xl p-6 md:p-8">
            <ul className="space-y-3 text-inherit">
              {module_.resultatsAttendus.items.map((item) => (
                <li key={item} className="flex gap-3 items-start leading-relaxed">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DarkTextCard>
        </motion.div>

        <SectionTitle>{module_.attestation.title}</SectionTitle>
        <motion.div variants={fadeInUp}>
          <GradientBlock>
            <p className="text-primary-100/90 leading-relaxed text-lg">{module_.attestation.text}</p>
          </GradientBlock>
        </motion.div>
      </Section>
    </>
  )
}
