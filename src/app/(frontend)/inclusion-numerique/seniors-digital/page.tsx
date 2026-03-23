'use client'

import React from 'react'
import { HeroSection } from '@/components/ui/HeroSection'
import { ImageCardHero } from '@/components/ui/ImageCardHero'
import { seniorsDigitalPage } from '@/lib/content/pages/inclusionNumeriqueData'

const Page = () => {
  const imageSections: Array<{
    title: string
    imageSrc: string
    imageAlt: string
    description?: string
    intro?: string
    listItems: string[]
    conclusion?: string
  }> = [
    {
      title: seniorsDigitalPage.sections.objectif.title,
      imageSrc: seniorsDigitalPage.hero.imageSrc,
      imageAlt: seniorsDigitalPage.hero.imageAlt,
      description: seniorsDigitalPage.sections.objectif.paragraph,
      listItems: [],
    },
    {
      title: seniorsDigitalPage.sections.objectifsSpecifiques.title,
      imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
      imageAlt: 'Initiation aux competences numeriques de base',
      intro: seniorsDigitalPage.sections.objectifsSpecifiques.intro,
      listItems: seniorsDigitalPage.objectifsSpecifiques,
    },
    {
      title: seniorsDigitalPage.sections.approche.title,
      imageSrc: '/assets/about/ecd.jpg',
      imageAlt: 'Accompagnement et equipe pedagogique',
      description: seniorsDigitalPage.sections.approche.paragraphs.join(' '),
      listItems: seniorsDigitalPage.approcheProximite,
    },
    {
      title: seniorsDigitalPage.sections.impact.title,
      imageSrc: '/assets/services/perfectionnement/outlook.jpg',
      imageAlt: 'Communication et usages des services en ligne',
      description: seniorsDigitalPage.sections.impact.paragraphs.join(' '),
      listItems: seniorsDigitalPage.impactFinalite,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc={seniorsDigitalPage.hero.imageSrc}
        imageAlt={seniorsDigitalPage.hero.imageAlt}
        subtitle={seniorsDigitalPage.hero.subtitle}
        title={seniorsDigitalPage.hero.title}
        description={seniorsDigitalPage.hero.description}
      />

      {/* Sections image + texte */}
      {imageSections.map((section, index) => (
        <ImageCardHero
          key={section.title}
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
    </div>
  )
}


export default Page
