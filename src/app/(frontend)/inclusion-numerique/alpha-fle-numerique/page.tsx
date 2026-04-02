'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/ui/HeroSection'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { BulletList } from '@/components/ui/BulletList'
import { AlternatingImageCards } from '@/components/ui/AlternatingImageCards'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const objectifsItems = [
  'Apprendre à utiliser un smartphone, une tablette ou un ordinateur (clavier, souris, Wi-Fi),',
  "Découvrir et utiliser des plateformes d'apprentissage du français adaptées,",
  'Améliorer la prononciation et la compréhension orale,',
  'Enrichir le vocabulaire utile (emploi, santé, école, transport…),',
  "S'entraîner à lire et écrire (phrases simples, messages, e-mails),",
  'Utiliser des outils de soutien (audio, exercices autocorrectifs),',
  'Renforcer la sécurité numérique (mots de passe, arnaques, données personnelles).',
]

const methodeItems = [
  'Une approche simple et concrète (faire ensemble, étape par étape),',
  'Des supports visuels et accessibles,',
  'La répétition et la mise en pratique,',
  'Un accompagnement individualisé selon le niveau des participants.',
]

const formationAidants = [
  'Former des formateurs,',
  'Professionnaliser des aidants numériques,',
  'Intégrer des outils numériques adaptés aux publics Alpha/FLE,',
  'Accompagner la mise en place de démarches pédagogiques inclusives.',
]

const partenariatsItems = [
  "L'intégration du numérique dans les parcours Alpha/FLE,",
  "La mise en place d'ateliers pratiques pour les apprenants,",
  'Des formations TIC adaptées aux publics,',
  "La formation de formateurs et d'aidants numériques,",
  'Un accompagnement méthodologique et pédagogique sur mesure.',
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      <HeroSection
        imageSrc="/assets/hero/transition-numerique.png"
        imageAlt="Alpha, FLE et Numérique"
        subtitle="Inclusion Numérique"
        title="Alpha, FLE et Numérique"
        description="ECD asbl intègre le numérique dans ses parcours Alpha et FLE. Pour les personnes en parcours, les démarches en ligne représentent souvent un double obstacle (langue et numérique) ; nous les accompagnons pour y accéder."
      />

      {/* Contenu principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Objectifs */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Objectifs" raw hover>
                <p className="leading-relaxed mb-6 text-inherit">
                  Permettre aux apprenants d&apos;acquérir des outils numériques facilitant
                  l&apos;apprentissage du français, afin de progresser en autonomie (vocabulaire,
                  prononciation, lecture, écriture, compréhension) et de renforcer leur capacité à
                  réaliser des démarches du quotidien. À travers des ateliers pratiques et
                  progressifs, les participants pourront :
                </p>
                <BulletList items={objectifsItems} lightOnDark animated={false} />
              </DarkTextCard>
            </motion.div>

            {/* Outils d'apprentissage en ligne */}
            <motion.div variants={fadeInUp} className="mb-8">
              <DarkTextCard variant="solid" title="Outils d'apprentissage en ligne" raw hover>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-primary-500/40 bg-primary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-primary-500/25 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-primary-100">
                      Plateforme
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-primary-50">
                      J&apos;apprends - Apprentissage du francais pour adultes migrants
                    </h4>
                    <p className="leading-relaxed text-primary-100/90">
                      Plateforme concue pour aider les adultes migrants a apprendre le francais de
                      maniere progressive. Travail sur vocabulaire, comprehension et phrases du
                      quotidien.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-secondary-500/40 bg-secondary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-secondary-500/25 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-secondary-100">
                      Prononciation
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-secondary-50">
                      ClicMaClasse - Sons et prononciation
                    </h4>
                    <p className="mb-3 leading-relaxed text-secondary-100/90">
                      Outil utile pour se familiariser avec les sons du francais : ecouter, repeter
                      et differencier les sons (ex: ou/u, an/en, e/eh).
                    </p>
                    <a
                      href="https://clicmaclasse.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-secondary-100 underline decoration-secondary-300/70 underline-offset-4 transition hover:text-white"
                    >
                      Acceder a clicmaclasse.fr
                    </a>
                  </div>

                  <div className="rounded-2xl border border-primary-500/40 bg-primary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-primary-500/25 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-primary-100">
                      Ressources FLE
                    </div>
                    <h4 className="mb-3 text-xl font-semibold text-primary-50">
                      Applications ludiques pour apprendre le francais
                    </h4>
                    <ul className="space-y-2 text-primary-100/90">
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          <strong>OrthoLud</strong> (ortholud.com): exercices ludiques en
                          orthographe, grammaire, conjugaison et vocabulaire.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                        <span>
                          <strong>Le Point du FLE</strong> (lepointdufle.net): ressources par
                          niveaux (exercices, fiches, audio, activites).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-secondary-500/40 bg-secondary-700/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="mb-3 inline-flex rounded-full bg-secondary-500/25 px-3 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-secondary-100">
                      Clavier
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-secondary-50">
                      RapidTyping (apprentissage du clavier)
                    </h4>
                    <p className="leading-relaxed text-secondary-100/90">
                      Outil pratique pour apprendre a taper au clavier, gagner en aisance et ecrire
                      plus facilement sur PC.
                    </p>
                  </div>
                </div>
              </DarkTextCard>
            </motion.div>

            {/* Méthode pédagogique */}
            <AlternatingImageCards
              variants={fadeInUp}
              items={[
                {
                  title: 'Méthode pédagogique',
                  imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
                  imageAlt: 'Atelier numerique avec support pedagogique',
                  cardClassName:
                    'bg-gradient-to-br from-primary-800 to-primary-950 border-primary-600/50',
                  content: (
                    <>
                      <p className="leading-relaxed mb-6 text-inherit">Les ateliers sont basés sur :</p>
                      <BulletList
                        items={methodeItems}
                        color="secondary"
                        lightOnDark
                        animated={false}
                      />
                    </>
                  ),
                },
                {
                  title: 'Formation des aidants numériques',
                  imageSrc: '/assets/services/perfectionnement/ai-work.jpg',
                  imageAlt: "Formation numerique pour professionnels et aidants",
                  cardClassName:
                    'bg-gradient-to-br from-primary-800 to-primary-950 border-primary-600/50',
                  content: (
                    <>
                      <p className="leading-relaxed mb-6 text-inherit">
                        ECD asbl propose également des formations et accompagnements pédagogiques en
                        lien avec les TIC, afin de renforcer les compétences des professionnels de
                        terrain. Nous intervenons notamment pour :
                      </p>
                      <BulletList items={formationAidants} lightOnDark animated={false} />
                    </>
                  ),
                },
                {
                  title: 'Partenariats',
                  imageSrc: '/assets/about/ecd.jpg',
                  imageAlt: 'Partenariat avec ECD asbl',
                  cardClassName:
                    'bg-gradient-to-br from-primary-800 to-primary-950 border-primary-600/50',
                  content: (
                    <>
                      <p className="leading-relaxed mb-6 text-inherit">
                        Les asbl actives en alphabétisation (Alpha) et en Français Langue Étrangère
                        (FLE) peuvent formuler leurs demandes afin de développer des partenariats avec
                        ECD asbl. Ces partenariats peuvent porter sur :
                      </p>
                      <BulletList
                        items={partenariatsItems}
                        lightOnDark
                        animated={false}
                        className="mb-6"
                      />
                      <p className="leading-relaxed text-inherit">
                        Les structures intéressées peuvent nous contacter afin d&apos;analyser leurs
                        besoins et construire ensemble une collaboration adaptée.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
