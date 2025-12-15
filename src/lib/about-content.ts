export type ColorKey = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal'

export interface Domain {
  id: string
  icon: string
  title: string
  description: string
  color: ColorKey
}

export interface MissionCard {
  icon: string
  title: string
  items?: string[]
  text?: string
}

export interface StatItem {
  number: number
  suffix: string
  label: string
}

export interface AccreditationContentBase {
  intro: string
}

export interface Accreditation {
  id: 'edd' | 'epnm' | 'esd' | 'titres-services'
  title: string
  subtitle: string
  badge: string
  icon: string
  content: Record<string, unknown>
}

export interface EddContent {
  reperePoints: string[]
  axes: {
    title: string
    description: string
    points: string[]
  }[]
  ateliers: {
    title: string
    description: string
    items: string[]
  }[]
}

export const heroContent = {
  title: 'ECD asbl en quelques mots',
  subtitle: "La culture comme levier d'intégration et d'insertion",
  cta: 'Découvrez nos actions'
}

export const missionCards: MissionCard[] = [
  {
    icon: 'Users',
    title: 'Nos publics',
    items: [
      'Jeunes en milieu scolaire',
      'Adultes en activation sociale',
      'Personnes touchées par la fracture numérique'
    ]
  },
  {
    icon: 'Compass',
    title: 'Notre approche',
    text: 'Perspective interculturelle fondée sur des valeurs de citoyenneté et de vivre-ensemble'
  },
  {
    icon: 'Target',
    title: 'Nos objectifs',
    items: [
      'Créer des opportunités de dialogue',
      'Favoriser la participation active',
      'Faire émerger les diversités'
    ]
  }
]

export const domains: Domain[] = [
  {
    id: 'soutien-scolaire',
    icon: 'GraduationCap',
    title: 'Soutien scolaire et remédiation',
    description:
      'Accompagnement des enfants et jeunes pour renforcer leurs apprentissages et favoriser leur réussite scolaire.',
    color: 'blue'
  },
  {
    id: 'ateliers-informatiques',
    icon: 'Laptop',
    title: 'Ateliers informatiques et formations numériques',
    description:
      "Développement des compétences numériques de base et avancées, afin de faciliter l'accès de tous aux outils digitaux.",
    color: 'purple'
  },
  {
    id: 'emploi-numerique',
    icon: 'Search',
    title: "Accompagnement à l'emploi par le numérique",
    description:
      "Appui à la recherche d'emploi, à la rédaction de CV, aux démarches en ligne et à la maîtrise des outils professionnels.",
    color: 'green'
  },
  {
    id: 'francais-alphabetisation',
    icon: 'MessageSquare',
    title: 'Cours de français et alphabétisation',
    description:
      "Apprentissage du français oral et écrit, développement des compétences de base et autonomie linguistique.",
    color: 'orange'
  },
  {
    id: 'parentalite',
    icon: 'Heart',
    title: 'Ateliers et groupes de parole autour de la parentalité',
    description:
      "Espaces d'échanges, d'information et de soutien pour renforcer les compétences parentales et le lien familial.",
    color: 'pink'
  },
  {
    id: 'primo-arrivants',
    icon: 'HandHeart',
    title: 'Accompagnement des primo-arrivants',
    description:
      "Information, orientation et aide aux démarches d'inscription dans des parcours de formation ou d'intégration.",
    color: 'teal'
  }
]

export const colorClasses: Record<
  ColorKey,
  { bg: string; text: string; hover: string }
> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
  green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-50' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-50' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', hover: 'hover:bg-pink-50' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', hover: 'hover:bg-teal-50' }
}

export const accreditations: Accreditation[] = [
  {
    id: 'edd',
    title: 'École de Devoirs',
    subtitle: 'Notre-Dame-Aux-Neiges',
    badge: 'Reconnu ONE',
    icon: 'School',
    content: {
      intro: "Espace Cultures & Développement est reconnu par l'ONE en tant qu'opérateur d'École de Devoirs.",
      highlight: {
        stat: '80%',
        text: "des participants viennent de l'école fondamentale Congrès Dachsbeck"
      },
      activities: [
        {
          icon: 'Calendar',
          day: 'Vendredi',
          title: 'Aide aux devoirs et remédiation scolaire'
        },
        {
          icon: 'Palette',
          day: 'Lun-Ven',
          title: 'Animations didactiques, éducatives et ludiques'
        }
      ]
    }
  },
  {
    id: 'epnm',
    title: 'Label EPNM',
    subtitle: 'Espace Public Numérique',
    badge: 'Label Qualité',
    icon: 'MonitorSmartphone',
    content: {
      intro: 'Le label EPNM constitue un gage de qualité pour les espaces publics numériques.',
      criteria: [
        "Amplitude des heures d'ouverture",
        'Nombre de formations proposées',
        "Présence d'un animateur qualifié",
        "Disponibilité d'un matériel adéquat"
      ],
      features: [
        { icon: 'Laptop', text: 'Ordinateurs portables et tablettes modulables' },
        { icon: 'MapPin', text: 'Formation sur site partenaire' },
        { icon: 'Euro', text: 'Tarif social ou gratuit' },
        { icon: 'TrendingUp', text: 'Accès aux financements publics' }
      ]
    }
  },
  {
    id: 'esd',
    title: 'Entreprise Sociale',
    subtitle: "Organisme d'économie sociale mandaté",
    badge: 'Agrément ESD',
    icon: 'Building2',
    content: {
      intro:
        "ECD développe un dispositif d'insertion professionnelle centré sur le métier d'animateur·trice - médiateur·trice numérique.",
      job: {
        title: 'Animateur·trice - Médiateur·trice numérique',
        description:
          "Former et accompagner des publics variés dans l'appropriation des outils informatiques"
      },
      targetPublic: [
        'Article 60§7',
        "Poste d'Insertion/Transition",
        "Contrats ACS d'Insertion",
        'Partenariats Actiris/ISP CPAS'
      ],
      pac: {
        title: "Plan d'Acquisition de Compétences (PAC)",
        features: ['Suivi personnalisé', 'Progression adaptée', 'Formations internes et externes']
      }
    }
  },
  {
    id: 'titres-services',
    title: 'Formation Titres-Services',
    subtitle: 'Opérateur de formation externe',
    badge: 'Bruxelles Économie et Emploi',
    icon: 'Award',
    content: {
      intro:
        'ECD est agréé comme opérateur de formation externe en informatique pour le secteur des Titres-Services.',
      features: [
        'Modules validés et remboursables',
        'Formation sur site partenaire',
        'Dispositif mobile et itinérant'
      ],
      locations: [
        { icon: 'Building', text: "Locaux d'entreprise" },
        { icon: 'MapPin', text: 'Antennes décentralisées' },
        { icon: 'Users', text: 'Espaces communautaires' }
      ],
      objectives: [
        { title: 'Réduire', text: 'la fracture numérique' },
        { title: 'Moderniser', text: 'le secteur' },
        { title: 'Renforcer', text: "l'autonomie numérique" }
      ]
    }
  }
]

export const stats: StatItem[] = [
  { number: 150, suffix: '+', label: 'Enfants accompagnés' },
  { number: 80, suffix: '%', label: 'École Congrès Dachsbeck' },
  { number: 500, suffix: '+', label: 'Heures de formation' },
  { number: 15, suffix: '+', label: 'Partenaires actifs' }
]

export const eddPageContent: EddContent = {
  reperePoints: [
    'Reconnu par l’ONE sous l’appellation « Notre-Dame-Aux-Neiges ».',
    'Enfants majoritairement issus de l’école fondamentale Congrès Dachsbeck (~80 %).',
    'Programme articulé autour du soutien scolaire et de l’épanouissement.'
  ],
  axes: [
    {
      title: 'Aide aux devoirs et remédiation scolaire',
      description:
        'Chaque vendredi (horaire ajustable) pour sécuriser les apprentissages fondamentaux et accompagner chaque enfant.',
      points: [
        'Accompagnement dans la réalisation des travaux scolaires',
        'Renforcement des prérequis (lecture, écriture, mathématiques)',
        'Méthodes de travail efficaces',
        'Espace d’écoute pour repérer les difficultés'
      ]
    },
    {
      title: 'Animations didactiques, éducatives et ludiques',
      description:
        'Du lundi au vendredi, un programme varié qui soutient les apprentissages et l’épanouissement personnel.',
      points: [
        'Activités structurées autour de thématiques complémentaires',
        'Soutien des apprentissages scolaires et développement socio-affectif',
        'Moments récréatifs pour un cadre apaisant et convivial'
      ]
    }
  ],
  ateliers: [
    {
      title: 'Ateliers didactiques',
      description: 'Renforcer les compétences scolaires de manière active et motivante.',
      items: [
        'Lecture et compréhension',
        'Jeux mathématiques et logiques',
        'Initiation scientifique (expériences simples, observation)',
        'Ateliers de langue (oral, vocabulaire, expression)'
      ]
    },
    {
      title: 'Ateliers créatifs et artistiques',
      description: 'Stimuler l’expression, la créativité et la confiance.',
      items: [
        'Arts plastiques : dessin, peinture, collage, objets',
        'Activités manuelles : origami, bricolage, construction',
        'Expression corporelle, théâtre, contes et mise en scène'
      ]
    },
    {
      title: 'Ateliers numériques éducatifs',
      description: 'Apprivoiser le numérique en lien avec le pôle ECD.',
      items: [
        'Initiation à l’ordinateur et à la tablette',
        'Outils ludiques d’apprentissage (jeux pédagogiques, quizz)',
        'Premiers pas en robotique et programmation (Scratch, adapté)'
      ]
    },
    {
      title: 'Ateliers socio-éducatifs',
      description: 'Favoriser le bien-être, la coopération et les compétences psycho-sociales.',
      items: [
        'Jeux coopératifs et activités de groupe',
        'Émotions et gestion de conflits',
        'Citoyenneté, vivre-ensemble, interculturalité'
      ]
    },
    {
      title: 'Activités ludiques et récréatives',
      description: 'Offrir un cadre apaisant, agréable et convivial.',
      items: ['Jeux de société', 'Activités sportives légères', 'Temps de détente et espace de parole']
    }
  ]
}

