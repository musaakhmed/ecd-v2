'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
        'Programme complet d&apos;initiation pour acquérir un premier niveau de maîtrise des outils numériques essentiels, adapté à tous.',
      longDescription:
        "ECD asbl développe un programme complet d'initiation en informatique visant à offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un large public (jeunes, adultes, seniors, apprenants en alpha et FLE) et s'adapte aux besoins spécifiques de chacun. Les modules couvrent la découverte de l'ordinateur, la navigation Internet, la messagerie électronique, les démarches administratives, la sécurité numérique et l'usage du smartphone. L'objectif est de favoriser l'autonomie numérique, l'accès aux services en ligne et lutter contre l'exclusion numérique.",
      image: '/assets/hero/transition-numerique.png',
      link: '/nos-services/initiation-informatique',
    },
    {
      id: 3,
      title: 'Maintenance & Dépannage Informatiques',
      shortDescription:
        'Service professionnel de maintenance et dépannage pour garantir le bon fonctionnement de vos équipements informatiques.',
      longDescription:
        "Un service de maintenance et de dépannage informatique professionnel pour garantir le bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques. Nos services incluent : installation et configuration (PC, logiciels, réseaux), serveurs et réseaux sécurisés, maintenance préventive, cybersécurité, sauvegarde et restauration, dépannage et réparation, ainsi qu'un support et accompagnement continu. Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à jour et d'optimisation.",
      image: '/assets/hero/transition-numerique.png',
      link: '/nos-services/maintenance-depannage-informatiques',
    },
    {
      id: 4,
      title: 'Perfectionnement en informatique',
      shortDescription:
        'Formations avancées pour développer une expertise opérationnelle sur les outils bureautiques, collaboratifs et l&apos;intelligence artificielle.',
      longDescription:
        "Formations de perfectionnement destinées aux personnes qui maîtrisent déjà les bases de l'informatique. Développez une expertise opérationnelle sur les suites bureautiques et collaboratives (Word, Excel, PowerPoint avancés), structurez et automatisez les tâches répétitives, renforcez la maîtrise des outils numériques professionnels (Teams, SharePoint, cloud), intégrez les usages avancés de l'intelligence artificielle appliquée au travail (Copilot, ChatGPT), et maîtrisez la cybersécurité appliquée aux organisations. Nos modules de niveau avancé soutiennent les organisations dans la montée en compétences de leurs équipes et la modernisation de leurs processus internes.",
      image: '/assets/hero/transition-numerique.png',
      link: '/nos-services/perfectionnement-informatique',
    },
  ]

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setExpandedIndex(null)
  }

  // Prevent body scroll when card is expanded on mobile
  React.useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [expandedIndex])

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-primary-50" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-header mb-8 md:mb-12 text-center">
          Nos Services
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative min-h-[500px]">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-lg
                         hover:shadow-xl hover:scale-105 transition-all duration-300
                         ${expandedIndex === index ? 'z-50' : 'z-10'}`}
              variants={{
                expanded: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transition: {
                    duration: 1,
                    ease: [0.4, 0, 0.2, 1],
                  },
                },
                collapsed: {
                  position: 'relative',
                  width: '100%',
                  height: '500px',
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                },
              }}
              animate={expandedIndex === index ? 'expanded' : 'collapsed'}
              initial="collapsed"
              onClick={() => handleCardClick(index)}
            >
              {/* Card Image */}
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    expandedIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-2">
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 'auto',
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white bg-white/20 backdrop-blur-sm md:p-3 rounded-b-2xl"
                  >
                    <h3 className={`text-xl md:text-2xl font-bold mb-2`}>{card.title}</h3>
                    <p className={`text-sm md:text-base text-gray-200 mb-4 line-clamp-2`}>
                      {card.shortDescription}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/30 pt-4 mt-4">
                            <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-6">
                              {card.longDescription}
                            </p>
                            <Link href={card.link}>
                              <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                                         font-semibold transition-colors duration-300 text-sm md:text-base cursor-pointer
                                         w-full"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleClose()
                                }}
                              >
                                Découvrir le service
                              </motion.button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Button */}
                    {expandedIndex !== index && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                                 font-semibold transition-colors duration-300 text-sm md:text-base cursor-pointer
                                 mt-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(index)
                        }}
                      >
                        En savoir plus
                      </motion.button>
                    )}
                  </motion.div>

                  {/* Close Button - Desktop */}
                  {expandedIndex === index && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-md
                               rounded-full p-2 hover:bg-white/30 transition-all duration-300
                               z-10"
                      onClick={handleClose}
                      aria-label="Fermer"
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
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
                <button
                  className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                           font-semibold transition-colors duration-300 text-sm w-full"
                  onClick={() => handleCardClick(index)}
                >
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Modal/Overlay */}
        <AnimatePresence>
          {expandedIndex !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 z-50 md:hidden"
                onClick={handleClose}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 300,
                }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50
                         max-h-[90vh] overflow-y-auto md:hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {
                  <div className="relative">
                    {/* Close Button - Mobile */}
                    <button
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm
                               rounded-full p-2 hover:bg-white transition-all duration-300
                               z-10 shadow-lg"
                      onClick={handleClose}
                      aria-label="Fermer"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-64">
                      <Image
                        src={cardsData[expandedIndex].image}
                        alt={cardsData[expandedIndex].title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-header mb-3">
                        {cardsData[expandedIndex].title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {cardsData[expandedIndex].shortDescription}
                      </p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                          {cardsData[expandedIndex].longDescription}
                        </p>
                        <Link href={cardsData[expandedIndex].link}>
                          <button
                            className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg
                                     font-semibold transition-colors duration-300 text-base w-full"
                            onClick={handleClose}
                          >
                            Découvrir le service
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                }
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default NosServices
