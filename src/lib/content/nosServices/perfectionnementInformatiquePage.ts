export type PerfectionnementModuleColumn = { title: string; items: string[] }

export type PerfectionnementModule = {
  number: number
  imageSrc: string
  imageAlt: string
  title: string
  badge: string
  columns?: PerfectionnementModuleColumn[]
  bullets?: string[]
}

const perfectionnementModules: PerfectionnementModule[] = [
  {
    number: 1,
    imageSrc: '/assets/services/perfectionnement/bureautique.jpeg',
    imageAlt: 'Bureautique professionnelle avancée',
    title: 'Bureautique professionnelle avancée',
    badge: 'Word · Excel · PowerPoint',
    columns: [
      {
        title: 'Word',
        items: [
          'Création de modèles institutionnels, automatisation via styles et champs.',
          'Table des matières, index, références croisées.',
          'Formulaires dynamiques et documents interactifs.',
        ],
      },
      {
        title: 'Excel',
        items: [
          'Fonctions avancées : RECHERCHE, INDEX/EQUIV, conditions imbriquées.',
          "Tableaux structurés, automatisation, macros simples (VBA d'initiation).",
          'Tableaux croisés dynamiques complexes, segmentation et analyse de données.',
        ],
      },
      {
        title: 'PowerPoint',
        items: [
          'Conception visuelle avancée, charte graphique, storytelling.',
          'Modèles professionnels, animations complexes, vidéos intégrées.',
          'Présentations interactives (plan de navigation, liens internes).',
        ],
      },
    ],
  },
  {
    number: 2,
    imageSrc: '/assets/services/perfectionnement/office.jpg',
    imageAlt: 'Environnements collaboratifs & digital workplace',
    title: 'Environnements collaboratifs & digital workplace',
    badge: 'Teams · SharePoint · Cloud',
    columns: [
      {
        title: '',
        items: [
          'Structuration d’un écosystème numérique : Teams / SharePoint / OneDrive ou Google Workspace.',
          "Gestion documentaire avancée : versions, métadonnées, droits d'accès, workflows.",
        ],
      },
      {
        title: '',
        items: [
          'Coédition en temps réel, gestion de projets numériques, automatisation des flux.',
          'Utilisation professionnelle de Teams (canaux thématiques, applications intégrées, réunions enrichies).',
        ],
      },
    ],
  },
  {
    number: 3,
    imageSrc: '/assets/services/perfectionnement/outlook.jpg',
    imageAlt: 'Gestion avancée des communications professionnelles',
    title: 'Gestion avancée des communications professionnelles',
    badge: 'Mails · IA · Réunions',
    bullets: [
      'Techniques de rédaction professionnelle assistée par IA.',
      "Gestion avancée d'Outlook : règles, automatisations, signatures multiples, boîtes partagées.",
      "Organisation de réunions complexes, planification d'équipe, formulaires d'inscription.",
    ],
  },
  {
    number: 4,
    imageSrc: '/assets/services/perfectionnement/cybersecurity.avif',
    imageAlt: 'Cybersécurité appliquée aux organisations',
    title: 'Cybersécurité appliquée aux organisations',
    badge: 'Données · RGPD · Appareils',
    columns: [
      {
        title: '',
        items: [
          'Analyse des risques numériques courants dans les structures sociales et associatives.',
          "Paramétrage de la double authentification, gestion des accès, bonnes pratiques RGPD.",
        ],
      },
      {
        title: '',
        items: [
          'Détection des tentatives de phishing, prévention des fuites de données.',
          'Sécurisation des appareils mobiles utilisés dans le cadre professionnel.',
        ],
      },
    ],
  },
  {
    number: 5,
    imageSrc: '/assets/services/perfectionnement/ai-work.jpg',
    imageAlt: 'Intelligence artificielle appliquée au travail',
    title: 'Intelligence artificielle appliquée au travail',
    badge: 'Copilot · ChatGPT · Gemini',
    bullets: [
      'Utilisation de Copilot, ChatGPT, Gemini Pro dans les tâches quotidiennes.',
      'Création de prompts professionnels pour : rédaction, analyse, synthèse, traduction, gestion de projets.',
      'Automatisation de documents, procédures internes, modèles de mails.',
      "Limites de l'IA, confidentialité, bonnes pratiques responsables.",
    ],
  },
  {
    number: 6,
    imageSrc: '/assets/services/perfectionnement/trello.jpg',
    imageAlt: 'Outils métiers & productivité',
    title: 'Outils métiers & productivité',
    badge: 'Tableaux de bord · Trello',
    columns: [
      {
        title: '',
        items: [
          'Tableaux de bord (Excel / Google Sheets).',
          "Outils de gestion d'équipe : Trello, Planner, Notion.",
        ],
      },
      {
        title: '',
        items: [
          'Création de formulaires avancés (Microsoft Forms / Google Forms) + analyse de données.',
          'Introduction aux automatisations simples : Power Automate, Zapier (selon contexte).',
        ],
      },
    ],
  },
]

export const perfectionnementInformatiquePageContent = {
  hero: {
    imageSrc: '/assets/hero/transition-numerique.png',
    imageAlt: 'Perfectionnement en informatique',
    eyebrow: 'Nos Services',
    title: 'Perfectionnement en informatique',
    description:
      'Approfondissez vos connaissances informatiques et maîtrisez des outils avancés pour optimiser votre productivité et développer de nouvelles compétences professionnelles.',
  },
  intro: {
    title: 'Perfectionnement en informatique',
    bullets: [
      'Développer une expertise opérationnelle sur les suites bureautiques et collaboratives les plus utilisées.',
      "Structurer et automatiser les tâches répétitives pour améliorer l'efficacité individuelle et collective.",
      'Renforcer la maîtrise des outils numériques professionnels, y compris les solutions cloud, les outils de gestion documentaire et les plateformes de communication.',
      "Intégrer les usages avancés de l'intelligence artificielle appliquée au travail.",
      "Soutenir les organisations dans la montée en compétences de leurs équipes et dans la modernisation de leurs processus internes.",
    ],
  },
  modules: {
    title: 'Contenus des modules – Niveau avancé',
    description:
      'Un parcours structuré en six modules complémentaires, mêlant pratique, cas concrets et accompagnement personnalisé.',
    items: perfectionnementModules,
  },
  publics: {
    title: 'Publics concernés',
    items: [
      "Encadrants, responsables d'équipes, travailleurs administratifs.",
      "Professionnels du secteur associatif, maisons de quartier, CPAS, structures d'accueil.",
      'Entreprises Titres-Services (encadrants, responsables de planning, administratifs).',
      'Travailleurs en transition, Article 60/ACS cherchant une montée en compétences rapide.',
    ],
  },
} as const

