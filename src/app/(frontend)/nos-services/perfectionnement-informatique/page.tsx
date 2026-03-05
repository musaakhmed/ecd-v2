'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DarkTextCard } from '@/components/ui/DarkTextCard'
import { ModuleImageCard } from '@/components/ui/ModuleImageCard'

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
            src="/assets/hero/transition-numerique.png"
            alt="Perfectionnement en informatique"
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
              Perfectionnement en informatique
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3"
            >
              Approfondissez vos connaissances informatiques et maîtrisez des outils avancés pour
              optimiser votre productivité et développer de nouvelles compétences professionnelles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
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
                <h2 className="text-3xl font-bold text-primary-100 mb-6">
                  Perfectionnement en informatique
                </h2>
                <ul className="space-y-4 text-primary-100/90">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span className="leading-relaxed">
                    Développer une expertise opérationnelle sur les suites bureautiques et
                    collaboratives les plus utilisées.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span className="leading-relaxed">
                    Structurer et automatiser les tâches répétitives pour améliorer
                    l&apos;efficacité individuelle et collective.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span className="leading-relaxed">
                    Renforcer la maîtrise des outils numériques professionnels, y compris les
                    solutions cloud, les outils de gestion documentaire et les plateformes de
                    communication.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span className="leading-relaxed">
                    Intégrer les usages avancés de l&apos;intelligence artificielle appliquée au
                    travail.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-200 shrink-0" />
                  <span className="leading-relaxed">
                    Soutenir les organisations dans la montée en compétences de leurs équipes et
                    dans la modernisation de leurs processus internes.
                  </span>
                </li>
              </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contenus des modules */}
      <section className="py-12 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-4 md:mb-6"
            >
              Contenus des modules – Niveau avancé
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-sm md:text-base text-primary-700/80 dark:text-primary-100/80 mb-10 md:mb-14 max-w-3xl mx-auto"
            >
              Un parcours structuré en six modules complémentaires, mêlant pratique, cas concrets et
              accompagnement personnalisé.
            </motion.p>

            <div className="space-y-8 md:space-y-10">
                {/* Module 1 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={1}
                    imageSrc="/assets/services/perfectionnement/bureautique.jpeg"
                    imageAlt="Bureautique professionnelle avancée"
                    title="Bureautique professionnelle avancée"
                    badge="Word · Excel · PowerPoint"
                    contentClassName="grid gap-6 p-5 md:grid-cols-3 md:p-6"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-primary-100 mb-2">Word</h4>
                      <ul className="space-y-2 text-sm text-primary-100/85">
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Création de modèles institutionnels, automatisation via styles et champs.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>Table des matières, index, références croisées.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>Formulaires dynamiques et documents interactifs.</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-100 mb-2">Excel</h4>
                      <ul className="space-y-2 text-sm text-primary-100/85">
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Fonctions avancées : RECHERCHE, INDEX/EQUIV, conditions imbriquées.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Tableaux structurés, automatisation, macros simples (VBA d&apos;initiation).
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Tableaux croisés dynamiques complexes, segmentation et analyse de données.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-100 mb-2">PowerPoint</h4>
                      <ul className="space-y-2 text-sm text-primary-100/85">
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Conception visuelle avancée, charte graphique, storytelling.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>Modèles professionnels, animations complexes, vidéos intégrées.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>
                            Présentations interactives (plan de navigation, liens internes).
                          </span>
                        </li>
                      </ul>
                    </div>
                  </ModuleImageCard>
                </motion.article>

                {/* Module 2 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={2}
                    imageSrc="/assets/services/perfectionnement/office.jpg"
                    imageAlt="Environnements collaboratifs & digital workplace"
                    title="Environnements collaboratifs & digital workplace"
                    badge="Teams · SharePoint · Cloud"
                    contentClassName="grid gap-4 p-5 md:grid-cols-2 md:p-6"
                  >
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Structuration d&apos;un écosystème numérique : Teams / SharePoint / OneDrive
                          ou Google Workspace.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Gestion documentaire avancée : versions, métadonnées, droits d&apos;accès,
                          workflows.
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Coédition en temps réel, gestion de projets numériques, automatisation des
                          flux.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Utilisation professionnelle de Teams (canaux thématiques, applications
                          intégrées, réunions enrichies).
                        </span>
                      </li>
                    </ul>
                  </ModuleImageCard>
                </motion.article>

                {/* Module 3 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={3}
                    imageSrc="/assets/services/perfectionnement/outlook.jpg"
                    imageAlt="Gestion avancée des communications professionnelles"
                    title="Gestion avancée des communications professionnelles"
                    badge="Mails · IA · Réunions"
                  >
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>Techniques de rédaction professionnelle assistée par IA.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Gestion avancée d&apos;Outlook : règles, automatisations, signatures
                          multiples, boîtes partagées.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Organisation de réunions complexes, planification d&apos;équipe, formulaires
                          d&apos;inscription.
                        </span>
                      </li>
                    </ul>
                  </ModuleImageCard>
                </motion.article>

                {/* Module 4 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={4}
                    imageSrc="/assets/services/perfectionnement/cybersecurity.avif"
                    imageAlt="Cybersécurité appliquée aux organisations"
                    title="Cybersécurité appliquée aux organisations"
                    badge="Données · RGPD · Appareils"
                    contentClassName="grid gap-4 p-5 md:grid-cols-2 md:p-6"
                  >
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Analyse des risques numériques courants dans les structures sociales et
                          associatives.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Paramétrage de la double authentification, gestion des accès, bonnes
                          pratiques RGPD.
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Détection des tentatives de phishing, prévention des fuites de données.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Sécurisation des appareils mobiles utilisés dans le cadre professionnel.
                        </span>
                      </li>
                    </ul>
                  </ModuleImageCard>
                </motion.article>

                {/* Module 5 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={5}
                    imageSrc="/assets/services/perfectionnement/ai-work.jpg"
                    imageAlt="Intelligence artificielle appliquée au travail"
                    title="Intelligence artificielle appliquée au travail"
                    badge="Copilot · ChatGPT · Gemini"
                  >
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Utilisation de Copilot, ChatGPT, Gemini Pro dans les tâches quotidiennes.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Création de prompts professionnels pour : rédaction, analyse, synthèse,
                          traduction, gestion de projets.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Automatisation de documents, procédures internes, modèles de mails.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                        <span>
                          Limites de l&apos;IA, confidentialité, bonnes pratiques responsables.
                        </span>
                      </li>
                    </ul>
                  </ModuleImageCard>
                </motion.article>

                {/* Module 6 */}
                <motion.article variants={fadeInUp} className="relative">
                  <ModuleImageCard
                    number={6}
                    imageSrc="/assets/services/perfectionnement/trello.jpg"
                    imageAlt="Outils métiers & productivité"
                    title="Outils métiers & productivité"
                    badge="Tableaux de bord · Trello"
                    contentClassName="grid gap-4 p-5 md:grid-cols-2 md:p-6"
                  >
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>Tableaux de bord (Excel / Google Sheets).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>Outils de gestion d&apos;équipe : Trello, Planner, Notion.</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-primary-100/85">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Création de formulaires avancés (Microsoft Forms / Google Forms) + analyse
                          de données.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400" />
                        <span>
                          Introduction aux automatisations simples : Power Automate, Zapier (selon
                          contexte).
                        </span>
                      </li>
                    </ul>
                  </ModuleImageCard>
                </motion.article>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Publics concernés */}
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
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-8"
            >
              Publics concernés
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <DarkTextCard variant="gradient-primary" raw>
                <ul className="space-y-4 text-inherit">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span className="leading-relaxed">
                      Encadrants, responsables d&apos;équipes, travailleurs administratifs.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span className="leading-relaxed">
                      Professionnels du secteur associatif, maisons de quartier, CPAS, structures
                      d&apos;accueil.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span className="leading-relaxed">
                      Entreprises Titres-Services (encadrants, responsables de planning,
                      administratifs).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                    <span className="leading-relaxed">
                      Travailleurs en transition, Article 60/ACS cherchant une montée en compétences
                      rapide.
                    </span>
                  </li>
                </ul>
              </DarkTextCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
