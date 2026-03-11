'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { DarkTextCard } from '@/components/ui/DarkTextCard'

const Page = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/operateur/formation-titres-services.png"
            alt="Formations en Titres Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 py-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white/80 mb-1 md:mb-2"
            >
              Nos Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:!text-4xl font-bold leading-tight mb-2 md:mb-3"
            >
              Formations en Titres Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              ECD asbl propose une offre complète de formations destinées aux travailleurs,
              encadrants et équipes administratives. Ces modules permettent d&apos;acquérir les
              compétences numériques essentielles et les bonnes pratiques de bien-être au travail,
              tout en favorisant l&apos;efficacité professionnelle et la prévention des risques.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Compétences numériques professionnelles (parallax background) */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Parallax background image */}
        <div
          className="absolute inset-0 -z-20 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/services/perfectionnement/office.jpg')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950/80 via-primary-900/80 to-primary-950/85" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-6 drop-shadow-md"
            >
              Compétences numériques professionnelles
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary-50 leading-relaxed mb-8 text-center max-w-3xl mx-auto"
            >
              Ces formations visent à renforcer l&apos;autonomie numérique des travailleurs et leur
              capacité à utiliser efficacement les outils nécessaires à leurs fonctions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="solid" title="Modules proposés" raw>
                <ul className="space-y-4 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">
                        Identité numérique & démarches administratives
                      </span>
                      <p className="text-sm text-gray-200 mt-1">
                        Utilisation de l&apos;eID, Itsme, portails administratifs (Mutuelles, ONEM, My
                        Belgium…).
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Navigation Internet & recherches en ligne</span>
                      <p className="text-sm text-gray-200 mt-1">
                        Méthodes de recherche, vérification des sources, pratiques sécurisées.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Messagerie électronique</span>
                      <p className="text-sm text-gray-200 mt-1">
                        Gestion professionnelle des e-mails, pièces jointes, organisation, bonnes
                        pratiques.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Outils de visioconférence (Teams & Zoom)</span>
                      <p className="text-sm text-gray-200 mt-1">
                        Création de réunions, partage d&apos;écran, règles de communication à
                        distance.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Signatures électroniques</span>
                      <p className="text-sm text-gray-200 mt-1">
                        Introduction aux outils de signature numérique, validation, sécurité.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">
                        Découverte de ChatGPT et outils IA accessibles
                      </span>
                      <p className="text-sm text-gray-200 mt-1">
                        Premiers usages, rédaction assistée, résumé, organisation, bonnes pratiques.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-600/60">
                  <p className="leading-relaxed text-inherit">
                    <span className="font-semibold text-white">
                      Objectif :
                    </span>{' '}
                    développer l&apos;autonomie, la maîtrise des outils essentiels et la capacité à
                    réaliser des tâches numériques en toute confiance.
                  </p>
                </div>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compétences de bien-être, ergonomie & prévention */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-6"
            >
              Compétences de bien-être, ergonomie & prévention
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center"
            >
              Ces modules améliorent les conditions de travail, réduisent la pénibilité et
              renforcent la sécurité, particulièrement pour les métiers d&apos;intervention à
              domicile ou de proximité.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-secondary" title="Modules proposés" raw>
                <ul className="space-y-4 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Sécurité sur le lieu de travail</span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Identification des dangers, gestes préventifs, protocoles simples pour éviter
                        les accidents.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Ergonomie & prévention des TMS</span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Bonnes postures, techniques pour réduire les efforts, optimisation des
                        mouvements, choix du matériel.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Organisation du travail</span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Gestion du temps, priorisation, structuration des tâches, efficacité au
                        quotidien.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Communication professionnelle</span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Posture face aux clients, gestion des demandes, résolution de situations
                        délicates.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">Gestion du stress & motivation</span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Stratégies de bien-être, équilibre émotionnel, prévention de
                        l&apos;épuisement.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary-500 shrink-0" />
                    <div>
                      <span className="font-semibold">
                        Prévention des risques domestiques & psychosociaux
                      </span>
                      <p className="text-sm text-secondary-100/80 mt-1">
                        Sécurité en intervention à domicile, gestion des imprévus, respect des limites
                        professionnelles.
                      </p>
                    </div>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center flex flex-col gap-6"
          >
            <motion.div className="font-semibold">
              ECD asbl propose une offre complète de formations destinées aux travailleurs,
              encadrants et équipes administratives.
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/titres-service">
                <motion.button
                  className="relative text-white px-8 py-4 rounded-lg font-semibold cursor-pointer overflow-hidden group text-lg"
                  style={{ backgroundColor: 'var(--color-primary-600)' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(66, 142, 189, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span className="relative z-10" initial={false} whileHover={{ x: 2 }}>
                    En savoir plus
                  </motion.span>
                  <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'var(--color-secondary-600)' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
