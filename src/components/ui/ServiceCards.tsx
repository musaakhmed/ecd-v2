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
  slug: string
}

const NosServices = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const cardsData: CardData[] = [
    {
      id: 1,
      title: 'Initiation en informatique',
      shortDescription:
        'Un programme complet d\'initiation visant à offrir un premier niveau de maîtrise des outils numériques essentiels, adapté aux besoins spécifiques de chacun.',
      longDescription:
        "ECD asbl développe un programme complet d'initiation en informatique visant à offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un large public et s'adapte aux besoins spécifiques de chacun.\n\nPublics ciblés : Jeunes (découverte de l'ordinateur, bonnes pratiques numériques, premiers usages scolaires et citoyens), Adultes (acquisition d'autonomie dans l'usage des outils numériques du quotidien et administratifs), Seniors (accompagnement progressif, sécurité en ligne, confiance dans l'usage de l'ordinateur et du smartphone), Apprenants en alpha et FLE (modules simplifiés, vocabulaire visuel, exercices pratiques adaptés aux niveaux linguistiques).\n\nObjectifs généraux : Favoriser l'autonomie numérique au quotidien, permettre l'accès aux services en ligne (e-administration, recherche d'emploi, communication), développer les compétences de base (utilisation d'un ordinateur, gestion de fichiers, navigation Internet), renforcer la confiance, lutter contre l'exclusion numérique et soutenir les parcours d'insertion.\n\nContenus des modules : La découverte de l'ordinateur (clavier, souris, interfaces, organisation), la navigation Internet et la recherche d'informations fiables, la création et l'utilisation d'une adresse e-mail, les démarches administratives de base, les outils essentiels (traitement de texte, applications pratiques, outils collaboratifs simples), les bases de la sécurité numérique (mots de passe, arnaques, bonnes pratiques), l'usage du smartphone pour les services du quotidien.",
      image: '/assets/hero/seniors-transition-numerique.jpg',
      slug: 'initiation-informatique',
    },
    {
      id: 2,
      title: 'Maintenance & Dépannage Informatiques',
      shortDescription:
        'Services informatiques complets : installation, configuration, dépannage, maintenance préventive, cybersécurité et support technique.',
      longDescription:
        "Nos Services Informatiques :\n\n1. Installation & Configuration — Votre matériel prêt à l'emploi : Nous installons et configurons vos équipements pour une utilisation immédiate (PC, imprimantes, scanners et périphériques, logiciels bureautiques et métiers, réseaux locaux (LAN), comptes utilisateurs, partage de dossiers, optimisation système).\n\n2. Serveurs & Réseaux — Une infrastructure sécurisée : Solutions professionnelles pour organisations (installation de serveurs Windows & NAS, cloud privé et sauvegarde centralisée, routeurs, Wi-Fi renforcé, réseau multisite, VPN pour télétravail sécurisé).\n\n3. Maintenance Préventive — Moins de pannes, plus d'efficacité : Entretien régulier pour prolonger la durée de vie de votre matériel (mises à jour système et logiciels, vérification matérielle (disques, ventilation…), nettoyage interne et optimisation).\n\n4. Cybersécurité — Protégez vos données : Nous sécurisons vos appareils et vos usages (antivirus et anti-malwares professionnels, analyse et suppression d'infections, conseils pour une sécurité durable).\n\n5. Sauvegarde & Restauration — Ne perdez jamais vos fichiers : Mise en place de sauvegardes automatiques (locales, NAS, cloud), tests de restauration, récupération de données après incident.\n\n6. Dépannage & Réparation — Intervention rapide : Nous résolvons rapidement les problèmes (PC lent, bloqué ou qui ne démarre plus, problèmes Windows, réseau, Wi-Fi, imprimantes et scanners inactifs, erreurs système et dysfonctionnements).\n\n7. Support & Accompagnement — Un partenaire à vos côtés : Assistance technique continue, aide à l'utilisation du matériel, formations aux bonnes pratiques, conseils pour moderniser votre parc informatique.",
      image: '/assets/hero/robotics.jpg',
      slug: 'maintenance-informatique',
    },
    {
      id: 3,
      title: 'Formations en Titres Services',
      shortDescription:
        'Offre complète de formations destinées aux travailleurs, encadrants et équipes administratives, alliant compétences numériques, sécurité, ergonomie et bien-être au travail.',
      longDescription:
        "ECD asbl propose une offre complète de formations destinées aux travailleurs, encadrants et équipes administratives. Ces modules permettent d'acquérir les compétences numériques essentielles et les bonnes pratiques de bien-être au travail, tout en favorisant l'efficacité professionnelle et la prévention des risques.\n\n1. Compétences numériques professionnelles : Identité numérique & démarches administratives (utilisation de l'eID, Itsme, portails administratifs), Navigation Internet & recherches en ligne, Messagerie électronique, Outils de visioconférence (Teams & Zoom), Signatures électroniques, Découverte de ChatGPT et outils IA accessibles.\n\n2. Compétences de bien-être, ergonomie & prévention : Sécurité sur le lieu de travail, Ergonomie & prévention des TMS, Organisation du travail, Communication professionnelle, Gestion du stress & motivation, Prévention des risques domestiques & psychosociaux.",
      image: '/assets/hero/titres-services.jpg',
      slug: 'formations-titres-services',
    },
    {
      id: 4,
      title: 'Perfectionnement en informatique',
      shortDescription:
        'Développez une expertise opérationnelle sur les suites bureautiques et collaboratives, automatisez vos tâches et renforcez la maîtrise des outils numériques professionnels.',
      longDescription:
        "Objectifs : Développer une expertise opérationnelle sur les suites bureautiques et collaboratives les plus utilisées, structurer et automatiser les tâches répétitives pour améliorer l'efficacité individuelle et collective, renforcer la maîtrise des outils numériques professionnels (solutions cloud, outils de gestion documentaire, plateformes de communication), intégrer les usages avancés de l'intelligence artificielle appliquée au travail, soutenir les organisations dans la montée en compétences de leurs équipes.\n\nContenus des modules – Niveau avancé :\n\n1. Bureautique professionnelle avancée : Word (création de modèles institutionnels, automatisation via styles et champs, table des matières, index, références croisées), Excel (fonctions avancées, tableaux structurés, automatisation, macros simples, tableaux croisés dynamiques complexes), PowerPoint (conception visuelle avancée, charte graphique, storytelling, modèles professionnels, animations complexes).\n\n2. Environnements collaboratifs & digital workplace : Structuration d'un écosystème numérique (Teams / SharePoint / OneDrive ou Google Workspace), gestion documentaire avancée, coédition en temps réel, gestion de projets numériques.\n\n3. Gestion avancée des communications professionnelles : Techniques de rédaction professionnelle assistée par IA, gestion avancée d'Outlook, organisation de réunions complexes.\n\n4. Cybersécurité appliquée aux organisations : Analyse des risques numériques, paramétrage de la double authentification, gestion des accès, bonnes pratiques RGPD, détection des tentatives de phishing.\n\n5. Intelligence artificielle appliquée au travail : Utilisation de Copilot, ChatGPT, Gemini Pro, création de prompts professionnels, automatisation de documents, limites de l'IA et bonnes pratiques responsables.\n\n6. Outils métiers & productivité : Tableaux de bord, outils de gestion d'équipe (Trello, Planner, Notion), création de formulaires avancés, introduction aux automatisations simples.",
      image: '/assets/hero/devoirs.jpg',
      slug: 'perfectionnement',
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
        
        {/* Intro Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800 p-6 md:p-8 shadow-md">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed text-center">
              Espace Cultures & Développement (ECD asbl) propose une offre complète de services numériques accessible à tous les publics. L&apos;association accompagne les débutants et les utilisateurs confirmés à travers des modules d&apos;initiation, des parcours de perfectionnement, des formations Titres-Services et un service de maintenance informatique.
            </p>
          </div>
        </div>

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
                            <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-6 whitespace-pre-line">
                              {card.longDescription}
                            </p>
                            <Link href={`/nos-services/${card.slug}`}>
                              <button
                                className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg
                                         font-semibold transition-colors duration-300 w-full"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleClose()
                                }}
                              >
                                Voir la page complète
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Button */}
                    {expandedIndex !== index && (
                      <Link href={`/nos-services/${card.slug}`}>
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                                   font-semibold transition-colors duration-300 text-sm md:text-base cursor-pointer
                                   mt-2 w-full"
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          En savoir plus
                        </motion.button>
                      </Link>
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
                <Link href={`/nos-services/${card.slug}`}>
                  <button
                    className="bg-accent hover:bg-accent-600 text-white px-4 py-2 rounded-lg
                             font-semibold transition-colors duration-300 text-sm w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    En savoir plus
                  </button>
                </Link>
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
                        <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                          {cardsData[expandedIndex].longDescription}
                        </p>
                        <Link href={`/nos-services/${cardsData[expandedIndex].slug}`}>
                          <button
                            className="bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg
                                     font-semibold transition-colors duration-300 w-full"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleClose()
                            }}
                          >
                            Voir la page complète
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
