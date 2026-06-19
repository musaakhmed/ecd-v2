'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  serviceCardsContent,
  type ServiceCardContent,
} from '@/lib/content/partnersAndServicesContent'

interface CardData {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  image: string
  link: string
}

const NosServices = () => {
  const cardsData: CardData[] = serviceCardsContent.cards as unknown as ServiceCardContent[]

  return (
    <section className="w-full py-12 px-4 bg-primary-50" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-header mb-8  text-center">
          {serviceCardsContent.sectionTitle}
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cardsData.map((card, index) => (
            <Link key={card.id} href={card.link}>
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg
                         hover:shadow-xl hover:scale-105 transition-all duration-300
                         h-[500px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Card Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-2">
                    <div className="text-white bg-white/20 backdrop-blur-sm md:p-3 rounded-b-2xl">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h3>
                      <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2">
                        {card.shortDescription}
                      </p>
                      <div
                        className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                                   font-semibold transition-colors duration-300 text-sm md:text-base
                                   mt-2 text-center"
                      >
                        {serviceCardsContent.ctaLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {cardsData.map((card, index) => (
            <Link key={card.id} href={card.link}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg bg-azure-500
                         hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Card Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{card.shortDescription}</p>
                  <div
                    className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                               font-semibold transition-colors duration-300 text-sm w-full text-center"
                  >
                    {serviceCardsContent.ctaLabel}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-2xl border border-primary-100 bg-white/80 backdrop-blur-sm shadow-md overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
            <div className="relative h-36 w-full md:h-24 md:w-36 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={serviceCardsContent.autreFormation.image}
                alt={serviceCardsContent.autreFormation.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 144px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-header mb-2">
                {serviceCardsContent.autreFormation.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {serviceCardsContent.autreFormation.description}
              </p>
            </div>
            <Link
              href={serviceCardsContent.autreFormation.href}
              className="shrink-0 bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm md:text-base text-center md:self-center"
            >
              {serviceCardsContent.autreFormation.ctaLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NosServices
