export interface ServiceSection {
  title: string
  description?: string
  items: string[]
  conclusion?: {
    label?: string
    text: string
    isBold?: boolean
  }
  colorScheme: 'primary' | 'secondary'
  backgroundType: 'light' | 'white' | 'gradient'
}

export const maintenanceSections: ServiceSection[] = [
  {
    title: 'Installation & Configuration — Votre matériel prêt à l&apos;emploi',
    description: 'Nous installons et configurons vos équipements pour une utilisation immédiate :',
    items: [
      'PC, imprimantes, scanners et périphériques',
      'Logiciels bureautiques et métiers',
      'Réseaux locaux (LAN)',
      'Comptes utilisateurs, partage de dossiers, optimisation système',
    ],
    conclusion: {
      label: 'Avantage :',
      text: 'vous gagnez du temps et démarrez sur une base stable et performante.',
    },
    colorScheme: 'primary',
    backgroundType: 'gradient',
  },
  {
    title: 'Serveurs & Réseaux — Une infrastructure sécurisée',
    description: 'Solutions professionnelles pour organisations :',
    items: [
      'Installation de serveurs Windows & NAS',
      'Cloud privé et sauvegarde centralisée',
      'Routeurs, Wi-Fi renforcé, réseau multisite',
      'VPN pour télétravail sécurisé',
    ],
    conclusion: {
      text: 'L&apos;assurance d&apos;un réseau fiable, rapide et adapté à votre structure.',
    },
    colorScheme: 'secondary',
    backgroundType: 'white',
  },
  {
    title: 'Maintenance Préventive — Moins de pannes, plus d&apos;efficacité',
    description: 'Entretien régulier pour prolonger la durée de vie de votre matériel :',
    items: [
      'Mises à jour système et logiciels',
      'Vérification matérielle (disques, ventilation…)',
      'Nettoyage interne et optimisation',
    ],
    conclusion: {
      label: 'Objectif :',
      text: 'réduire les risques de panne et garantir votre tranquillité.',
    },
    colorScheme: 'primary',
    backgroundType: 'gradient',
  },
  {
    title: 'Cybersécurité — Protégez vos données',
    description: 'Nous sécurisons vos appareils et vos usages :',
    items: [
      'Antivirus et anti-malwares professionnels',
      'Analyse et suppression d&apos;infections',
      'Conseils pour une sécurité durable',
    ],
    conclusion: {
      text: 'Vos informations restent protégées face aux menaces numériques.',
    },
    colorScheme: 'secondary',
    backgroundType: 'white',
  },
  {
    title: 'Sauvegarde & Restauration — Ne perdez jamais vos fichiers',
    items: [
      'Mise en place de sauvegardes automatiques (locales, NAS, cloud)',
      'Tests de restauration',
      'Récupération de données après incident',
    ],
    conclusion: {
      text: 'Une stratégie de backup fiable pour ne jamais perdre l&apos;essentiel.',
    },
    colorScheme: 'primary',
    backgroundType: 'gradient',
  },
  {
    title: 'Dépannage & Réparation — Intervention rapide',
    description: 'Nous résolvons rapidement :',
    items: [
      'PC lent, bloqué ou qui ne démarre plus',
      'Problèmes Windows, réseau, Wi-Fi',
      'Imprimantes et scanners inactifs',
      'Erreurs système et dysfonctionnements',
    ],
    conclusion: {
      text: 'Diagnostic → Devis → Réparation sur site ou à distance.',
      isBold: true,
    },
    colorScheme: 'secondary',
    backgroundType: 'white',
  },
  {
    title: 'Support & Accompagnement — Un partenaire à vos côtés',
    items: [
      'Assistance technique continue',
      'Aide à l&apos;utilisation du matériel',
      'Formations aux bonnes pratiques',
      'Conseils pour moderniser votre parc informatique',
    ],
    colorScheme: 'primary',
    backgroundType: 'gradient',
  },
]
