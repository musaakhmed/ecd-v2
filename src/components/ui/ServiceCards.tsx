'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface CardData {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  image: string
}

const NosServices = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const cardsData: CardData[] = [
    {
      id: 1,
      title: 'Formation Numérique',
      shortDescription:
        'Découvrez nos programmes de formation pour améliorer vos compétences numériques et rester compétitif sur le marché du travail.',
      longDescription:
        "Notre programme de formation numérique offre une approche complète pour développer vos compétences dans le domaine du digital. Que vous soyez débutant ou que vous souhaitiez approfondir vos connaissances, nos cours sont adaptés à tous les niveaux. Nous couvrons des sujets variés tels que la bureautique, les outils collaboratifs, la sécurité en ligne, et bien plus encore. Nos formateurs expérimentés vous accompagnent tout au long de votre parcours d'apprentissage.",
      image: '/assets/hero/seniors-transition-numerique.jpg',
    },
    {
      id: 2,
      title: 'Accompagnement Personnalisé',
      shortDescription:
        "Bénéficiez d'un accompagnement sur mesure pour votre transition professionnelle ou votre développement de carrière.",
      longDescription:
        "L'accompagnement personnalisé est au cœur de notre mission. Nous croyons que chaque parcours est unique et mérite une attention particulière. Nos conseillers vous aident à identifier vos forces, à définir vos objectifs professionnels et à élaborer un plan d'action concret. Que vous cherchiez un nouvel emploi, souhaitiez changer de carrière ou développer vos compétences, nous sommes là pour vous guider à chaque étape de votre parcours.",
      image: '/assets/hero/devoirs.jpg',
    },
    {
      id: 3,
      title: 'Ateliers Pratiques',
      shortDescription:
        'Participez à nos ateliers interactifs et pratiques pour mettre en application vos connaissances dans un environnement bienveillant.',
      longDescription:
        "Nos ateliers pratiques sont conçus pour vous permettre d'appliquer immédiatement ce que vous apprenez. Dans un cadre convivial et bienveillant, vous travaillez sur des projets concrets, échangez avec d'autres participants et bénéficiez du retour de nos experts. Ces sessions couvrent des domaines variés : création de CV, préparation aux entretiens, gestion de projet, communication professionnelle, et bien d'autres. L'apprentissage par la pratique est notre méthode privilégiée.",
      image: '/assets/hero/robotics.jpg',
    },
    {
      id: 4,
      title: 'Services à la Communauté',
      shortDescription:
        "Découvrez nos services dédiés à la communauté, incluant le soutien aux familles et l'accès aux titres-services.",
      longDescription:
        "Nous sommes engagés dans le développement de notre communauté et proposons une gamme complète de services accessibles à tous. Nos services incluent le soutien aux familles dans leurs démarches administratives, l'accès facilité aux titres-services, l'organisation d'événements communautaires et bien plus encore. Notre équipe multilingue est à votre disposition pour vous accompagner dans vos démarches et répondre à vos questions. Ensemble, construisons une communauté plus forte et solidaire.",
      image: '/assets/hero/titres-services.jpg',
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
                        <p className="text-base text-gray-700 leading-relaxed">
                          {cardsData[expandedIndex].longDescription}
                        </p>
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
