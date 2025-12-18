'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

  const services = [
    {
      title: 'Installation & Configuration',
      subtitle: 'Votre matériel prêt à l\'emploi',
      description: 'Nous installons et configurons vos équipements pour une utilisation immédiate',
      items: [
        'PC, imprimantes, scanners et périphériques',
        'Logiciels bureautiques et métiers',
        'Réseaux locaux (LAN)',
        'Comptes utilisateurs, partage de dossiers, optimisation système',
      ],
      advantage: 'Vous gagnez du temps et démarrez sur une base stable et performante.',
    },
    {
      title: 'Serveurs & Réseaux',
      subtitle: 'Une infrastructure sécurisée',
      description: 'Solutions professionnelles pour organisations',
      items: [
        'Installation de serveurs Windows & NAS',
        'Cloud privé et sauvegarde centralisée',
        'Routeurs, Wi-Fi renforcé, réseau multisite',
        'VPN pour télétravail sécurisé',
      ],
      advantage: 'L\'assurance d\'un réseau fiable, rapide et adapté à votre structure.',
    },
    {
      title: 'Maintenance Préventive',
      subtitle: 'Moins de pannes, plus d\'efficacité',
      description: 'Entretien régulier pour prolonger la durée de vie de votre matériel',
      items: [
        'Mises à jour système et logiciels',
        'Vérification matérielle (disques, ventilation…)',
        'Nettoyage interne et optimisation',
      ],
      advantage: 'Réduire les risques de panne et garantir votre tranquillité.',
    },
    {
      title: 'Cybersécurité',
      subtitle: 'Protégez vos données',
      description: 'Nous sécurisons vos appareils et vos usages',
      items: [
        'Antivirus et anti-malwares professionnels',
        'Analyse et suppression d\'infections',
        'Conseils pour une sécurité durable',
      ],
      advantage: 'Vos informations restent protégées face aux menaces numériques.',
    },
    {
      title: 'Sauvegarde & Restauration',
      subtitle: 'Ne perdez jamais vos fichiers',
      description: 'Une stratégie de backup fiable',
      items: [
        'Mise en place de sauvegardes automatiques (locales, NAS, cloud)',
        'Tests de restauration',
        'Récupération de données après incident',
      ],
      advantage: 'Ne jamais perdre l&apos;essentiel.',
    },
    {
      title: 'Dépannage & Réparation',
      subtitle: 'Intervention rapide',
      description: 'Nous résolvons rapidement',
      items: [
        'PC lent, bloqué ou qui ne démarre plus',
        'Problèmes Windows, réseau, Wi-Fi',
        'Imprimantes et scanners inactifs',
        'Erreurs système et dysfonctionnements',
      ],
      advantage: 'Diagnostic → Devis → Réparation sur site ou à distance.',
    },
    {
      title: 'Support & Accompagnement',
      subtitle: 'Un partenaire à vos côtés',
      description: 'Assistance et conseils personnalisés',
      items: [
        'Assistance technique continue',
        'Aide à l\'utilisation du matériel',
        'Formations aux bonnes pratiques',
        'Conseils pour moderniser votre parc informatique',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/robotics.jpg"
            alt="Maintenance & Dépannage Informatiques"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-primary-600/80 to-secondary-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] font-semibold text-white/80 mb-4"
            >
              Nos Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Maintenance & Dépannage Informatiques
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Services informatiques complets : installation, configuration, dépannage, maintenance
              préventive, cybersécurité et support technique.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-primary-900 dark:text-primary-100 mb-12"
            >
              Nos Services Informatiques
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-900 shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-3 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc list-inside mb-4 text-sm">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {service.advantage && (
                    <p className="text-sm text-primary-700 dark:text-primary-300 font-medium mt-4 pt-4 border-t border-primary-200 dark:border-primary-800">
                      {service.advantage}
                    </p>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Page
