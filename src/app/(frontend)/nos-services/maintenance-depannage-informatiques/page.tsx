'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ImageCardHero } from '@/components/ui/ImageCardHero'

const IMAGE_BASE = '/assets/services/maintenance-depannage'

const contentSections: Array<{
  title: string
  image: string
  imageAlt: string
  description?: string
  intro?: string
  listItems: string[]
  conclusion?: string
}> = [
  {
    title: 'Installation & Configuration — Votre matériel prêt à l\'emploi',
    image: `${IMAGE_BASE}/pexels-mikhail-nilov-9301887.jpg`,
    imageAlt: 'Configuration d\'une imprimante multifonction en bureau',
    description: 'Nous installons et configurons vos équipements pour une utilisation immédiate :',
    listItems: [
      'PC, imprimantes, scanners et périphériques',
      'Logiciels bureautiques et métiers',
      'Réseaux locaux (LAN)',
      'Comptes utilisateurs, partage de dossiers, optimisation système',
    ],
    conclusion: 'Avantage : vous gagnez du temps et démarrez sur une base stable et performante.',
  },
  {
    title: 'Serveurs & Réseaux — Une infrastructure sécurisée',
    image: `${IMAGE_BASE}/pexels-field-engineer-147254-442150.jpg`,
    imageAlt: 'Technicien travaillant sur un rack réseau et câblage',
    description: 'Solutions professionnelles pour organisations :',
    listItems: [
      'Installation de serveurs Windows & NAS',
      'Cloud privé et sauvegarde centralisée',
      'Routeurs, Wi-Fi renforcé, réseau multisite',
      'VPN pour télétravail sécurisé',
    ],
    conclusion: 'L\'assurance d\'un réseau fiable, rapide et adapté à votre structure.',
  },
  {
    title: 'Maintenance Préventive — Moins de pannes, plus d\'efficacité',
    image: `${IMAGE_BASE}/pexels-pixabay-159304.jpg`,
    imageAlt: 'Équipement réseau et connectivité',
    description: 'Entretien régulier pour prolonger la durée de vie de votre matériel :',
    listItems: [
      'Mises à jour système et logiciels',
      'Vérification matérielle (disques, ventilation…)',
      'Nettoyage interne et optimisation',
    ],
    conclusion: 'Objectif : réduire les risques de panne et garantir votre tranquillité.',
  },
  {
    title: 'Cybersécurité — Protégez vos données',
    image: `${IMAGE_BASE}/pexels-pixabay-60504.jpg`,
    imageAlt: 'Sécurité informatique et protection des données',
    description: 'Nous sécurisons vos appareils et vos usages :',
    listItems: [
      'Antivirus et anti-malwares professionnels',
      'Analyse et suppression d\'infections',
      'Conseils pour une sécurité durable',
    ],
    conclusion: 'Vos informations restent protégées face aux menaces numériques.',
  },
  {
    title: 'Sauvegarde & Restauration — Ne perdez jamais vos fichiers',
    image: `${IMAGE_BASE}/pexels-jakubzerdzicki-19825057.jpg`,
    imageAlt: 'Unité de stockage NAS / serveur',
    intro: 'Mise en place de solutions de sauvegarde fiables :',
    listItems: [
      'Mise en place de sauvegardes automatiques (locales, NAS, cloud)',
      'Tests de restauration',
      'Récupération de données après incident',
    ],
    conclusion: 'Une stratégie de backup fiable pour ne jamais perdre l\'essentiel.',
  },
  {
    title: 'Dépannage & Réparation — Intervention rapide',
    image: `${IMAGE_BASE}/pexels-athena-2582931.jpg`,
    imageAlt: 'Réparation et dépannage à l\'intérieur d\'un ordinateur',
    description: 'Nous résolvons rapidement :',
    listItems: [
      'PC lent, bloqué ou qui ne démarre plus',
      'Problèmes Windows, réseau, Wi-Fi',
      'Imprimantes et scanners inactifs',
      'Erreurs système et dysfonctionnements',
    ],
    conclusion: 'Diagnostic → Devis → Réparation sur site ou à distance.',
  },
  {
    title: 'Support & Accompagnement — Un partenaire à vos côtés',
    image: `${IMAGE_BASE}/pexels-kampus-7983556.jpg`,
    imageAlt: 'Assistance informatique et accompagnement utilisateur',
    intro: 'Un partenaire à vos côtés au quotidien :',
    listItems: [
      'Assistance technique continue',
      'Aide à l\'utilisation du matériel',
      'Formations aux bonnes pratiques',
      'Conseils pour moderniser votre parc informatique',
    ],
  },
]

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
            src="/assets/services/maintenance.jpg"
            alt="Maintenance & Dépannage Informatiques"
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
              Maintenance & Dépannage Informatiques
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-white/90 leading-snug line-clamp-3 text-justify [text-align-last:start]"
            >
              Un service de maintenance et de dépannage informatique professionnel pour garantir le
              bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Première carte : à propos (inchangée, fond sombre) */}
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
                <h2 className="text-3xl font-bold text-primary-100 mb-4">
                  À propos de nos services de maintenance
                </h2>
                <p className="text-primary-100/90 leading-relaxed text-lg mb-6">
                  Notre équipe de techniciens expérimentés vous propose des services de maintenance
                  préventive et de dépannage pour tous vos équipements informatiques : ordinateurs,
                  tablettes, smartphones, et périphériques.
                </p>
                <p className="text-primary-100/90 leading-relaxed text-lg">
                  Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce
                  soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à
                  jour et d&apos;optimisation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sections image + texte (ImageCardHero) */}
      {contentSections.map((section, index) => (
        <ImageCardHero
          key={index}
          title={section.title}
          imageSrc={section.image}
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
