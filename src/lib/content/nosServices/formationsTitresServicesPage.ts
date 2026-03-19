export type BulletModule = { title: string; description: string }

export const formationsTitresServicesPageContent = {
  hero: {
    imageSrc: '/assets/operateur/formation-titres-services.png',
    imageAlt: 'Formations en Titres Services',
    eyebrow: 'Nos Services',
    title: 'Formations en Titres Services',
    description:
      "ECD asbl propose une offre complète de formations destinées aux travailleurs, encadrants et équipes administratives. Ces modules permettent d'acquérir les compétences numériques essentielles et les bonnes pratiques de bien-être au travail, tout en favorisant l'efficacité professionnelle et la prévention des risques.",
  },
  competencesNumeriques: {
    title: 'Compétences numériques professionnelles',
    description:
      "Ces formations visent à renforcer l'autonomie numérique des travailleurs et leur capacité à utiliser efficacement les outils nécessaires à leurs fonctions.",
    backgroundImage: '/assets/services/perfectionnement/office.jpg',
    cardTitle: 'Modules proposés',
    modules: [
      {
        title: 'Identité numérique & démarches administratives',
        description: "Utilisation de l'eID, Itsme, portails administratifs (Mutuelles, ONEM, My Belgium…).",
      },
      {
        title: 'Navigation Internet & recherches en ligne',
        description: 'Méthodes de recherche, vérification des sources, pratiques sécurisées.',
      },
      {
        title: 'Messagerie électronique',
        description: 'Gestion professionnelle des e-mails, pièces jointes, organisation, bonnes pratiques.',
      },
      {
        title: 'Outils de visioconférence (Teams & Zoom)',
        description: "Création de réunions, partage d'écran, règles de communication à distance.",
      },
      {
        title: 'Signatures électroniques',
        description: 'Introduction aux outils de signature numérique, validation, sécurité.',
      },
      {
        title: 'Découverte de ChatGPT et outils IA accessibles',
        description: 'Premiers usages, rédaction assistée, résumé, organisation, bonnes pratiques.',
      },
    ] satisfies BulletModule[],
    objectifLabel: 'Objectif :',
    objectifText:
      "développer l'autonomie, la maîtrise des outils essentiels et la capacité à réaliser des tâches numériques en toute confiance.",
  },
  bienEtre: {
    title: 'Compétences de bien-être, ergonomie & prévention',
    description:
      "Ces modules améliorent les conditions de travail, réduisent la pénibilité et renforcent la sécurité, particulièrement pour les métiers d'intervention à domicile ou de proximité.",
    parallaxImage: { src: '/assets/services/perfectionnement/ai-work.jpg', alt: 'Bien-être au travail' },
    cardTitle: 'Modules proposés',
    modules: [
      {
        title: 'Sécurité sur le lieu de travail',
        description:
          "Identification des dangers, gestes préventifs, protocoles simples pour éviter les accidents.",
      },
      {
        title: 'Ergonomie & prévention des TMS',
        description:
          'Bonnes postures, techniques pour réduire les efforts, optimisation des mouvements, choix du matériel.',
      },
      {
        title: 'Organisation du travail',
        description: 'Gestion du temps, priorisation, structuration des tâches, efficacité au quotidien.',
      },
      {
        title: 'Communication professionnelle',
        description: 'Posture face aux clients, gestion des demandes, résolution de situations délicates.',
      },
      {
        title: 'Gestion du stress & motivation',
        description: "Stratégies de bien-être, équilibre émotionnel, prévention de l'épuisement.",
      },
      {
        title: 'Prévention des risques domestiques & psychosociaux',
        description:
          'Sécurité en intervention à domicile, gestion des imprévus, respect des limites professionnelles.',
      },
    ] satisfies BulletModule[],
  },
  cta: {
    text:
      'ECD asbl propose une offre complète de formations destinées aux travailleurs, encadrants et équipes administratives.',
    buttonLabel: 'En savoir plus',
    href: '/titres-service',
  },
} as const

