export const partnersContent = {
  sectionTitle: 'Nos Soutiens',
  logos: [
    {
      title: 'equal.brussels',
      link: 'https://equal.brussels/fr/',
      image: '/assets/partenaires/Logo-equal-bleu.png',
    },
    {
      title: 'STIB',
      link: 'https://www.stib-mivb.be/accueil',
      image: '/assets/partenaires/stib.jpg',
    },
    { title: 'Form TS', link: 'https://form-ts.be/', image: '/assets/partenaires/form-ts.png' },
    {
      title: 'BRUSOC',
      link: 'https://info.hub.brussels/outils/qui-peut-maider/brusoc-par-finance-investbrussels',
      image: '/assets/partenaires/brusoc.png',
    },
    {
      title: 'Ville de Bruxelles',
      link: 'https://www.bruxelles.be/',
      image: '/assets/partenaires/ville_bx.png',
    },
    {
      title: 'COCOF',
      link: 'https://ccf.brussels/',
      image: '/assets/partenaires/Logo_Francophones_Bruxelles.png',
    },
    {
      title: 'BEE',
      link: 'https://economie-emploi.brussels/',
      image: '/assets/partenaires/bruxelles-economie-emploi.png',
    },
    {
      title: 'FOREM',
      link: 'https://www.leforem.be/',
      image: '/assets/partenaires/forem.png',
    },
    {
      title: 'Loterie Nationale',
      link: 'https://www.loterie-nationale.be/bien-plus-que-jouer',
      image: '/assets/partenaires/Logo_LOTNAT_RGB_Baseline_Horiz.png',
    },
    // { title: 'fondation roi baudoin', image: '/assets/partenaires/logoFRB.png' },
    // {
    //   title: 'region bruxelles capitale',
    //   image: '/assets/partenaires/region_bruxelles_capitale.png',
    // },
    // { title: 'digital belgium skills fund', image: '/assets/partenaires/dbsf.avif' },
  ],
} as const

export type ServiceCardContent = {
  id: number
  title: string
  shortDescription: string
  longDescription: string
  image: string
  link: string
}

export const serviceCardsContent = {
  sectionTitle: 'Nos Services',
  ctaLabel: 'En savoir plus',
  autreFormation: {
    title: 'Formation en ergonomie et prévention des TMS pour le personnel des maisons de repos.',
    description: '',
    ctaLabel: 'En savoir plus',
    href: '/nos-services/autre-formation',
    image: '/assets/services/autres-formations/ergonomie-maison-repos/pexels-karola-g-5207102.jpg',
    imageAlt: 'Autre formation — ergonomie en maison de repos',
  },
  cards: [
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
        "Programme complet d'initiation pour acquérir un premier niveau de maîtrise des outils numériques essentiels, adapté à tous.",
      longDescription:
        "ECD asbl développe un programme complet d'initiation en informatique visant à offrir un premier niveau de maîtrise des outils numériques essentiels. Cette offre s'adresse à un large public (jeunes, adultes, seniors, apprenants en alpha et FLE) et s'adapte aux besoins spécifiques de chacun. Les modules couvrent la découverte de l'ordinateur, la navigation Internet, la messagerie électronique, les démarches administratives, la sécurité numérique et l'usage du smartphone. L'objectif est de favoriser l'autonomie numérique, l'accès aux services en ligne et lutter contre l'exclusion numérique.",
      image: '/assets/hero/transition-numerique.png',
      link: '/nos-services/initiation-informatique',
    },
    {
      id: 3,
      title: 'Maintenance & Dépannage',
      shortDescription:
        'Service professionnel de maintenance et dépannage pour garantir le bon fonctionnement de vos équipements informatiques.',
      longDescription:
        "Un service de maintenance et de dépannage informatique professionnel pour garantir le bon fonctionnement de vos équipements et résoudre rapidement vos problèmes techniques. Nos services incluent : installation et configuration (PC, logiciels, réseaux), serveurs et réseaux sécurisés, maintenance préventive, cybersécurité, sauvegarde et restauration, dépannage et réparation, ainsi qu'un support et accompagnement continu. Nous intervenons rapidement pour diagnostiquer et résoudre vos problèmes, que ce soit pour des pannes matérielles, des problèmes logiciels, ou des besoins de mise à jour et d'optimisation.",
      image: '/assets/services/maintenance.jpg',
      link: '/nos-services/maintenance-depannage-informatiques',
    },
    {
      id: 4,
      title: 'Perfectionnement en informatique',
      shortDescription:
        "Formations avancées pour développer une expertise opérationnelle sur les outils bureautiques, collaboratifs et l'intelligence artificielle.",
      longDescription:
        "Formations de perfectionnement destinées aux personnes qui maîtrisent déjà les bases de l'informatique. Développez une expertise opérationnelle sur les suites bureautiques et collaboratives (Word, Excel, PowerPoint avancés), structurez et automatisez les tâches répétitives, renforcez la maîtrise des outils numériques professionnels (Teams, SharePoint, cloud), intégrez les usages avancés de l'intelligence artificielle appliquée au travail (Copilot, ChatGPT), et maîtrisez la cybersécurité appliquée aux organisations. Nos modules de niveau avancé soutiennent les organisations dans la montée en compétences de leurs équipes et la modernisation de leurs processus internes.",
      image: '/assets/services/perfectionnement.jpg',
      link: '/nos-services/perfectionnement-informatique',
    },
  ] satisfies ServiceCardContent[],
} as const
