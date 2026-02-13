'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CardData {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  image: string
  link: string
}

const NosServices = () => {
  const cardsData: CardData[] = [
    {
      id: 1,
      title: 'Formations en Titres Services',
      shortDescription:
        'Offre complète de formations pour travailleurs, encadrants et équipes administratives : compétences numériques et bien-être au travail.',
      longDescription:
        "ECD asbl propose une offre complète de formations destinées aux travailleurs, encadrants et équipes administratives. Ces modules permettent d'acquérir les compétences numériques essentielles (identité numérique, messagerie, visioconférence, IA) et les bonnes pratiques de bien-être au travail (sécurité, ergonomie, communication, gestion du stress). L'objectif est de favoriser l'efficacité professionnelle et la prévention des risques dans le secteur des titres-services.",
      image: '/assets/operateur/formation-titres-services.png',
      link: '/nos-services/formations-titres-services',
    },
    {
      id: 2,
      title: 'Initiation en informatique',
      shortDescription:
        "Programme complet d'initiation pour acquérir un premier niveau de maîtrise des outils numériques essentiels, adapté à tous.",
      longDescription:
        "ECD asbl développe un programme complet d'initiation en informatique visant à offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un large public (jeunes, adultes, seniors, apprenants en alpha et FLE) et s'adapte aux besoins spécifiques de chacun. Les modules couvrent la découverte de l'ordinateur, la navigation Internet, la messagerie électronique, les démarches administratives, la sécurité numérique et l'usage du smartphone. L'objectif est de favoriser l'autonomie numérique, l'accès aux services en ligne et lutter contre l'exclusion numérique.",
      image: '/assets/hero/transition-numerique.png',
      link: '/nos-services/initiation-informatique',
    },
    {
      id: 3,
      title: 'Maintenance & Dépannage',
      shortDescription:
        'Service professionnel de maintenance et dépannage pour garantir le bon fonctionnement de vos équipements informatiques.',
      longDescription:
        "Un service de maintenance et de dépannage informatique professionnel pour garantir le bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques. Nos services incluent : installation et configuration (PC, logiciels, réseaux), serveurs et réseaux sécurisés, maintenance préventive, cybersécurité, sauvegarde et restauration, dépannage et réparation, ainsi qu'un support et accompagnement continu. Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à jour et d'optimisation.",
      image: '/assets/services/maintenance.jpg',
      link: '/nos-services/maintenance-depannage-informatiques',
    },
    {
      id: 4,
      title: 'Perfectionnement en informatique',
      shortDescription:
        "Formations avancées pour développer une expertise opérationnelle sur les outils bureautiques, collaboratifs et l'intelligence artificielle.",
      longDescription:
        "Formations de perfectionnement destinées aux personnes qui maîtrisent déjà les bases de l'informatique. Développez une expertise opérationnelle sur les suites bureautiques et collaboratives (Word, Excel, PowerPoint avancés), structurez et automatisez les tâches répétitives, renforcez la maîtrise des outils numériques professionnels (Teams, SharePoint, cloud), intégrez les usages avancés de l'intelligence artificielle appliquée au travail (Copilot, ChatGPT), et maîtrisez la cybersécurité appliquée aux organisations. Nos modules de niveau avancé soutiennent les organisations dans la montée en compétences de leurs équipes et la modernisation de leurs processus internes.",
      image: '/assets/services/perfectionnement.jpg',
      link: '/nos-services/perfectionnement-informatique',
    },
  ]

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-primary-50" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-header mb-8 md:mb-12 text-center">
          Nos Services
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
                        En savoir plus
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
                className="relative rounded-2xl overflow-hidden shadow-lg bg-white
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
                  <h3 className="text-xl font-bold text-header mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{card.shortDescription}</p>
                  <div
                    className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                               font-semibold transition-colors duration-300 text-sm w-full text-center"
                  >
                    En savoir plus
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NosServices
