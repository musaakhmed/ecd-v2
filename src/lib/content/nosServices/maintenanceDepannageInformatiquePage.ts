const IMAGE_BASE = '/assets/services/maintenance-depannage'

export const maintenanceDepannageInformatiquePageContent = {
  hero: {
    imageSrc: '/assets/services/maintenance.jpg',
    imageAlt: 'Maintenance & Dépannage Informatiques',
    eyebrow: 'Nos Services',
    title: 'Maintenance & Dépannage Informatiques',
    description:
      'Un service de maintenance et de dépannage informatique professionnel pour garantir le bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques.',
  },
  about: {
    title: 'À propos de nos services de maintenance',
    paragraphs: [
      'Notre équipe de techniciens expérimentés vous propose des services de maintenance préventive et de dépannage pour tous vos équipements informatiques : ordinateurs, tablettes, smartphones, et périphériques.',
      "Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à jour et d'optimisation.",
    ],
  },
  sections: [
    {
      title: "Installation & Configuration — Votre matériel prêt à l'emploi",
      image: `${IMAGE_BASE}/pexels-mikhail-nilov-9301887.jpg`,
      imageAlt: "Configuration d'une imprimante multifonction en bureau",
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
      conclusion: "L'assurance d'un réseau fiable, rapide et adapté à votre structure.",
    },
    {
      title: "Maintenance Préventive — Moins de pannes, plus d'efficacité",
      image: `${IMAGE_BASE}/pexels-pixabay-159304.jpg`,
      imageAlt: 'Équipement réseau et connectivité',
      description: 'Entretien régulier pour prolonger la durée de vie de votre matériel :',
      listItems: ['Mises à jour système et logiciels', 'Vérification matérielle (disques, ventilation…)', 'Nettoyage interne et optimisation'],
      conclusion: 'Objectif : réduire les risques de panne et garantir votre tranquillité.',
    },
    {
      title: 'Cybersécurité — Protégez vos données',
      image: `${IMAGE_BASE}/pexels-pixabay-60504.jpg`,
      imageAlt: 'Sécurité informatique et protection des données',
      description: 'Nous sécurisons vos appareils et vos usages :',
      listItems: ['Antivirus et anti-malwares professionnels', "Analyse et suppression d'infections", 'Conseils pour une sécurité durable'],
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
      conclusion: "Une stratégie de backup fiable pour ne jamais perdre l'essentiel.",
    },
    {
      title: 'Dépannage & Réparation — Intervention rapide',
      image: `${IMAGE_BASE}/pexels-athena-2582931.jpg`,
      imageAlt: "Réparation et dépannage à l'intérieur d'un ordinateur",
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
      listItems: ['Assistance technique continue', "Aide à l'utilisation du matériel", 'Formations aux bonnes pratiques', 'Conseils pour moderniser votre parc informatique'],
    },
  ],
} as const

