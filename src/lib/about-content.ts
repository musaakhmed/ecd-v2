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
  hero: {
    subtitle: string
    title: string
    description: string
  }
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
    image?: string
  }[]
}

export interface EsdContent {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  presentation: {
    title: string
    paragraphs: string[]
  }
  reperePoints: string[]
  reperesTitle: string
  metier: {
    title: string
    description: string
    missions: string[]
  }
  parcours: {
    title: string
    description: string
    dimensions: {
      title: string
      description: string
    }[]
  }
  publicCible: {
    title: string
    description: string
    publics: string[]
  }
  accompagnement: {
    title: string
    description: string
    elements: string[]
  }
  pac: {
    title: string
    description: string
    objectifs: string[]
  }
}

export interface EpnContent {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  reperePoints: string[]
  reperesTitle: string
  label: {
    title: string
    description: string
    criteres: {
      title: string
      items: string[]
    }
  }
  equipement: {
    title: string
    description: string
    items: string[]
  }
  publicsCibles: {
    title: string
    description: string
    publics: string[]
  }
  interventions: {
    title: string
    description: string
    types: {
      title: string
      description: string
    }[]
    garanties: string[]
    garantiesTitle: string
  }
  connectoo: {
    title: string
    description: string
    attestations: string[]
  }
}

export interface TitresServicesContent {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  presentation: {
    title: string
    description: string
  }
  reperePoints: string[]
  reperesTitle: string
  competencesNumeriques: {
    title: string
    description: string
    items: string[]
  }
  competencesBienEtre: {
    title: string
    description: string
    items: string[]
  }
  impact: {
    title: string
    description: string
    contributions: string[]
  }
}

export interface QuiSommesNousContent {
  hero: {
    title: string
    description: string
  }
  introduction: {
    paragraphs: string[]
  }
  approche: {
    title: string
    description: string
    intro: string
    objectifs: string[]
    conclusion: string
  }
  domaines: {
    title: string
    soutienScolaire: {
      title: string
      description: string
      points: string[]
      conclusion: string
    }
    inclusionNumerique: {
      title: string
      description: string
      publics: {
        left: string[]
        right: string[]
      }
      interventions: {
        title: string
        items: string[]
      }
      conclusion: string
    }
    formationsTitresServices: {
      title: string
      description: string
      competencesNumeriques: {
        title: string
        items: string[]
      }
      competencesBienEtre: {
        title: string
        items: string[]
      }
      conclusion: string
    }
    ateliersParentalite: {
      title: string
      description: string
      items: string[]
    }
  }
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
  hero: {
    subtitle: 'Opérateur en École de Devoirs',
    title: "Notre-Dame-Aux-Neiges : un soutien scolaire au cœur du quartier",
    description:
      "Espace Cultures & Développement est reconnu par l'ONE comme opérateur d'École de Devoirs. Nous accueillons principalement les enfants du quartier Notre-Dame-Aux-Neiges, avec une large participation de l'école fondamentale Congrès Dachsbeck (±80 %)."
  },
  reperePoints: [
    "Reconnu par l'ONE sous l'appellation « Notre-Dame-Aux-Neiges ».",
    "Enfants majoritairement issus de l'école fondamentale Congrès Dachsbeck (~80 %).",
    "Programme articulé autour du soutien scolaire et de l'épanouissement."
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
        "Espace d'écoute pour repérer les difficultés"
      ]
    },
    {
      title: 'Animations didactiques, éducatives et ludiques',
      description:
        "Du lundi au vendredi, un programme varié qui soutient les apprentissages et l'épanouissement personnel.",
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
      ],
      image: '/assets/edd/ateliers-didactique.png'
    },
    {
      title: 'Ateliers créatifs et artistiques',
      description: "Stimuler l'expression, la créativité et la confiance.",
      items: [
        'Arts plastiques : dessin, peinture, collage, objets',
        'Activités manuelles : origami, bricolage, construction',
        'Expression corporelle, théâtre, contes et mise en scène'
      ],
      image: '/assets/edd/ateliers-artistiques.png'
    },
    {
      title: 'Ateliers numériques éducatifs',
      description: 'Apprivoiser le numérique en lien avec le pôle ECD.',
      items: [
        "Initiation à l'ordinateur et à la tablette",
        "Outils ludiques d'apprentissage (jeux pédagogiques, quizz)",
        'Premiers pas en robotique et programmation (Scratch, adapté)'
      ],
      image: '/assets/edd/ateliers-numeriques.png'
    },
    {
      title: 'Ateliers socio-éducatifs',
      description: 'Favoriser le bien-être, la coopération et les compétences psycho-sociales.',
      items: [
        'Jeux coopératifs et activités de groupe',
        'Émotions et gestion de conflits',
        'Citoyenneté, vivre-ensemble, interculturalité'
      ],
      image: '/assets/edd/ateliers-socio-educatifs.png'
    },
    {
      title: 'Activités ludiques et récréatives',
      description: 'Offrir un cadre apaisant, agréable et convivial.',
      items: ['Jeux de société', 'Activités sportives légères', 'Temps de détente et espace de parole'],
      image: '/assets/edd/ateliers-ludiques-recreatifs.png'
    }
  ]
}

export const esdPageContent: EsdContent = {
  hero: {
    subtitle: "Opérateur d'économie sociale",
    title: "Entreprise Sociale et Démocratique : un dispositif d'insertion professionnelle",
    description:
      "Espace Cultures & Développement est reconnue comme entreprise sociale d'insertion mandatée et spécifiquement agréée en tant qu'Entreprise Sociale et Démocratique (ESD). Cet agrément atteste d'un engagement structurel en faveur de l'inclusion, de l'emploi durable et du développement des compétences des publics éloignés du marché du travail."
  },
  presentation: {
    title: "Un dispositif d'insertion socioprofessionnelle",
    paragraphs: [
      "Dans ce cadre, l'association a mis en place un dispositif d'insertion socioprofessionnelle (ISP) centré sur le métier d'animateur·trice – médiateur·trice numérique, fonction en plein essor dans le contexte de la transition digitale et de la lutte contre la fracture numérique.",
      "À travers ces missions, les travailleurs développent progressivement un référentiel de compétences professionnelles reconnu dans les secteurs du numérique social, de la formation et de l'éducation permanente."
    ]
  },
  reperePoints: [
    "Reconnue comme entreprise sociale d'insertion mandatée et agréée ESD.",
    "Dispositif d'insertion socioprofessionnelle centré sur le métier d'animateur·trice – médiateur·trice numérique.",
    "Engagement structurel en faveur de l'inclusion, de l'emploi durable et du développement des compétences."
  ],
  reperesTitle: 'Repères clés',
  metier: {
    title: "Un métier au cœur de l'inclusion numérique",
    description:
      "Le métier d'animateur·trice – médiateur·trice numérique mobilise un ensemble de compétences pédagogiques, techniques et relationnelles. Les travailleurs en insertion sont amenés à :",
    missions: [
      "Accompagner les publics dans l'usage de l'ordinateur, du smartphone et des outils numériques de base",
      'Former des groupes à des thématiques variées : bureautique, e-administration, communication digitale, sécurité en ligne, outils collaboratifs, etc.',
      "Soutenir des publics vulnérables (demandeurs d'emploi, seniors, jeunes, personnes en situation de précarité) dans l'apprentissage d'usages numériques essentiels",
      "Concevoir et animer des ateliers, séances d'initiation ou parcours de formation",
      "Contribuer à la gestion et à l'animation d'un Espace Public Numérique ou d'un EPN Mobile (EPNM)",
      "Participer à des actions de médiation, d'écoute, de diagnostic des besoins et d'accompagnement personnalisé"
    ]
  },
  parcours: {
    title: "Un programme d'insertion structuré, progressif et professionnalisant",
    description:
      "Le parcours d'insertion proposé par ECD est organisé en plusieurs dimensions complémentaires. Cette immersion constitue la clé de l'apprentissage et de la professionnalisation.",
    dimensions: [
      {
        title: 'Développement des compétences techniques',
        description: 'Maîtrise des outils numériques, logiciels, matériel informatique et technologies émergentes.'
      },
      {
        title: "Compétences pédagogiques et d'animation",
        description: "Techniques d'animation de groupe, conception de séquences pédagogiques et adaptation aux différents publics."
      },
      {
        title: 'Compétences sociales et relationnelles',
        description: 'Communication, écoute active, gestion de groupe et accompagnement personnalisé des publics fragilisés.'
      },
      {
        title: 'Immersion professionnelle et mise en situation réelle',
        description: "Pratique sur le terrain, gestion d'un EPN, animation d'ateliers et accompagnement de publics réels."
      }
    ]
  },
  publicCible: {
    title: 'Un public cible en partenariat étroit avec les pouvoirs publics',
    description:
      "Le programme s'adresse notamment : ECD entretient une relation régulière avec les référents CPAS/Actiris afin d'assurer un suivi cohérent et transparent de l'évolution du travailleur.",
    publics: [
      "Aux travailleurs engagés sous article 60§7, en Poste d'Insertion (PI) ou Poste de Transition",
      "Aux travailleurs sous contrat ACS d'Insertion",
      'À des candidats orientés par les services ISP des CPAS',
      'À des candidats identifiés en collaboration avec Actiris'
    ]
  },
  accompagnement: {
    title: 'Un accompagnement professionnel et social complet',
    description: 'Le dispositif repose sur :',
    elements: [
      'Une équipe de coordination expérimentée (direction, encadrement, référents techniques)',
      "Un accompagnement individuel régulier (entretiens, évaluations, objectifs intermédiaires)",
      'Des formations internes spécialisées',
      'Des formations externes ciblées (Connectoo, sécurité, pédagogie, informatique avancée…)'
    ]
  },
  pac: {
    title: "Le Plan d'Acquisition de Compétences (PAC)",
    description:
      "Chaque parcours est formalisé par un PAC (Plan d'Acquisition de Compétences), défini conjointement avec le CPAS partenaire. Le PAC garantit un suivi personnalisé, structuré et mesurable, véritable colonne vertébrale du parcours d'insertion.",
    objectifs: [
      'Définir clairement les compétences à acquérir',
      'Planifier les étapes de progression',
      "Évaluer régulièrement l'évolution du travailleur",
      'Assurer une cohérence entre les attentes du CPAS et les réalités du terrain',
      'Préparer la sortie positive, vers un emploi, une formation qualifiante ou un métier en lien avec le numérique social'
    ]
  }
}

export const epnPageContent: EpnContent = {
  hero: {
    subtitle: "Opérateur d'EPN labellisé",
    title: 'Inclusion numérique mobile : un dispositif labellisé et itinérant',
    description:
      "Espace Cultures & Développement est un opérateur d'inclusion numérique labellisé en Région bruxelloise et détenteur du label fédéral Connectoo, attestant d'une expertise dans l'accompagnement de divers publics."
  },
  reperePoints: [
    "Opérateur d'inclusion numérique labellisé en Région bruxelloise.",
    "Détenteur du label fédéral Connectoo, attestant d'une expertise dans l'accompagnement de divers publics.",
    "Dispositif entièrement mobile et itinérant, fonctionnant à la demande."
  ],
  reperesTitle: 'Repères clés',
  label: {
    title: 'Le label EPNM – Espace Public Numérique Mobile',
    description:
      "Le label EPNM constitue un véritable gage de qualité et de reconnaissance pour les opérateurs répondant à des critères exigeants.",
    criteres: {
      title: 'Critères du label EPNM',
      items: [
        "Une amplitude horaire adaptée aux besoins des publics",
        "Une offre de formations diversifiée et accessible",
        "La présence d'animateurs qualifiés",
        "Un matériel moderne et adapté à tous",
        "Un ancrage territorial fort et une mission affirmée d'inclusion numérique"
      ]
    }
  },
  equipement: {
    title: 'Un équipement entièrement mobile',
    description:
      "L'EPNM d'Espace Cultures & Développement s'appuie sur une équipe de formateurs et d'animateurs spécialisés, dotée d'un équipement entièrement mobile. Ce dispositif permet de proposer des séances d'initiation, de formation et de perfectionnement directement au sein des structures partenaires, partout à Bruxelles.",
    items: [
      'Ordinateurs portables',
      'Tablettes modulables',
      'Routeurs',
      'Vidéoprojecteurs',
      'Matériel pédagogique'
    ]
  },
  publicsCibles: {
    title: 'Publics cibles',
    description: "L'EPNM est accessible à une grande diversité de publics :",
    publics: [
      'Jeunes',
      'Adultes',
      'Seniors',
      'Publics spécifiques (isolement, précarité, handicap, primo-arrivants…)',
      'Demandeurs d\'emploi',
      'Apprenants en alpha et FLE',
      'Professionnels'
    ]
  },
  interventions: {
    title: 'Interventions et services',
    description: 'Les interventions comprennent notamment :',
    types: [
      {
        title: 'Accompagnements individuels et de proximité',
        description: 'Personnalisés selon les besoins de chaque personne.'
      },
      {
        title: 'Actions mobiles via l\'EPNM',
        description:
          "Permettant d'intervenir directement dans les lieux de vie : centres sociaux, écoles, maisons de quartier, associations, entreprises, etc."
      }
    ],
    garanties: [
      'Une proximité renforcée avec les publics',
      "Un accès facilité pour les personnes éloignées du numérique",
      "Des services proposés à un tarif social et démocratique, voire gratuitement selon les financements mobilisés"
    ],
    garantiesTitle: "L'EPNM garantit :"
  },
  connectoo: {
    title: 'Label Connectoo',
    description:
      "En complément, Espace Cultures & Développement dispose également du label Connectoo, délivré par BOSA. Ce label atteste :",
    attestations: [
      "D'une expertise reconnue en accompagnement numérique",
      "De la maîtrise des démarches administratives en ligne (eBox, itsme, MyMinfin, MyPension, MyHealth, etc.)",
      "D'une capacité à former, informer et accompagner les citoyens dans l'usage des services publics digitaux",
      "D'un engagement fort dans la réduction de la fracture numérique administrative"
    ]
  }
}

export const titresServicesPageContent: TitresServicesContent = {
  hero: {
    subtitle: 'Opérateur de formation de Titres-Services',
    title: 'Formations professionnelles pour le secteur des Titres-Services',
    description:
      "ECD est un opérateur de formation agréé dans le secteur des Titres-Services à Bruxelles, à Wallonie et reconnu par le Fonds sectoriel, Form TS. Ses modules s'adressent aux aide-ménagères, aux encadrants ainsi qu'aux équipes administratives, en tenant compte des besoins spécifiques de chaque profil."
  },
  presentation: {
    title: 'Des formations adaptées à chaque profil',
    description:
      "Nos formations sont conçues pour répondre aux besoins spécifiques des différents acteurs du secteur des Titres-Services : aide-ménagères, encadrants et équipes administratives. Chaque module est adapté aux réalités du terrain et aux compétences à développer."
  },
  reperePoints: [
    "Opérateur de formation agréé dans le secteur des Titres-Services à Bruxelles, à Wallonie et reconnu par le Fonds sectoriel, Form TS.",
    "Formations adaptées aux aide-ménagères, encadrants et équipes administratives.",
    "Modules personnalisés selon les besoins spécifiques de chaque profil."
  ],
  reperesTitle: 'Repères clés',
  competencesNumeriques: {
    title: 'Compétences numériques professionnelles',
    description:
      "Les formations visent à renforcer l'autonomie numérique des travailleurs et leur capacité à utiliser efficacement les outils liés à leur fonction :",
    items: [
      "Prise en main d'outils numériques professionnels : ordinateur, tablette, smartphone, navigation, gestion des fichiers",
      "Gestion du planning et communication digitale avec l'employeur : e-mails, applications internes, messagerie professionnelle, plateformes de suivi",
      "Utilisation d'applications métier : pointage, prestations, tâches, consignes, suivi client",
      "Bureautique et outils collaboratifs : traitement de texte, tableaux simples, partage sécurisé de documents, visioconférence",
      "Sécurité numérique : mots de passe, phishing, bonnes pratiques, confidentialité",
      "Introduction aux outils d'intelligence artificielle utiles au travail : aide à la rédaction, recherche d'information, organisation et planification assistées"
    ]
  },
  competencesBienEtre: {
    title: 'Compétences de bien-être, ergonomie et prévention',
    description:
      "Ces modules ciblent l'amélioration des conditions de travail, la prévention des accidents et la réduction de la pénibilité :",
    items: [
      "Sécurité sur le lieu de travail : identification des dangers, gestes préventifs, protocoles de base",
      "Ergonomie et prévention des TMS : postures, mouvements adaptés, optimisation des efforts, équipement adéquat",
      "Organisation du travail : gestion du temps, structuration des tâches, efficacité au quotidien",
      "Communication professionnelle : relation avec les clients, posture professionnelle, résolution de situations difficiles",
      "Gestion du stress et motivation : stratégies de bien-être, équilibre émotionnel, prévention de l'épuisement",
      "Prévention des risques domestiques et psychosociaux : sécurité dans les domiciles, gestion des imprévus, protection de soi et respect des limites"
    ]
  },
  impact: {
    title: 'Un impact direct pour les travailleurs et les entreprises',
    description:
      "Ces formations contribuent : Elles s'inscrivent dans une logique de montée en compétences durable, accessible et adaptée aux réalités du terrain.",
    contributions: [
      'À la professionnalisation du secteur',
      "À l'amélioration des conditions de travail",
      'À la réduction des risques professionnels',
      'À une meilleure qualité de service',
      'À une communication renforcée entre travailleurs et entreprises'
    ]
  }
}

export const quiSommesNousPageContent: QuiSommesNousContent = {
  hero: {
    title: 'Qui sommes-nous ?',
    description:
      "Espace Cultures & Développement est un cadre d'action associatif engagé dans la valorisation de la culture comme levier d'intégration, d'émancipation et d'insertion sociale."
  },
  introduction: {
    paragraphs: [
      "L'association accompagne divers publics — jeunes en milieu scolaire, adultes en activation sociale, travailleurs peu qualifiés, publics éloignés du numérique, primo-arrivants, ainsi que professionnels du secteur des Titres-Services — en favorisant l'accès à l'éducation, au numérique, à la citoyenneté et au bien-être.",
      "ECD vise à renforcer l'autonomie, les capacités d'agir et la participation active de chacun, en tenant compte des réalités sociales, économiques et culturelles propres aux quartiers bruxellois."
    ]
  },
  approche: {
    title: 'Une approche interculturelle, inclusive et participative',
    description:
      "La démarche d'ECD s'appuie sur une vision profondément interculturelle, promouvant la rencontre, l'expression et la compréhension mutuelle.",
    intro: "L'association œuvre à :",
    objectifs: [
      'Valoriser les diversités culturelles et sociales ;',
      'Renforcer la cohésion et les liens entre communautés ;',
      "Encourager la participation active à la vie sociale ;",
      "Promouvoir un vivre-ensemble fondé sur l'équité, la solidarité et le respect mutuel."
    ],
    conclusion:
      "ECD crée ainsi des espaces d'apprentissage, de dialogue et d'expérimentation qui favorisent la construction de citoyennetés actives et responsables."
  },
  domaines: {
    title: "Nos domaines d'action",
    soutienScolaire: {
      title: 'Soutien scolaire et remédiation',
      description:
        'ECD organise un dispositif structuré pour accompagner les enfants et adolescents :',
      points: [
        'Aide aux devoirs et consolidation des apprentissages ;',
        'Remédiation individualisée ;',
        'Développement de méthodes de travail ;',
        'Activités didactiques, ludiques et culturelles ;',
        'Accompagnement favorisant la confiance en soi et la motivation scolaire.'
      ],
      conclusion:
        'Ce pôle contribue à lutter contre les inégalités scolaires et à soutenir la réussite éducative.'
    },
    inclusionNumerique: {
      title: 'Inclusion numérique pour tous',
      description:
        'ECD agit au cœur de la lutte contre la fracture numérique en développant une offre adaptée à une grande diversité de publics :',
      publics: {
        left: ['Jeunes,', 'Adultes,', 'Seniors,', 'Publics spécifiques (isolement, précarité, handicap, primo-arrivants…),'],
        right: ["Demandeurs d'emploi,", "Apprenants en alpha et FLE,", 'Professionnels.']
      },
      interventions: {
        title: 'Les interventions comprennent :',
        items: [
          'Accompagnements individuels et de proximité ;',
          "Actions mobiles via l'Espace Public Numérique Mobile (EPNM), permettant d'aller sur les lieux de vie, centres sociaux, écoles, associations ou entreprises."
        ]
      },
      conclusion:
        "Cette approche globale vise à renforcer l'autonomie numérique, l'accès aux droits, la participation citoyenne et la capacité d'agir dans un monde digitalisé."
    },
    formationsTitresServices: {
      title: 'Formations Titres-Services : compétences numériques et bien-être au travail',
      description:
        "ECD est opérateur de formation agréé dans le secteur des Titres-Services (Bruxelles et prochainement Wallonie). Ses modules s'adressent aux aides-ménagères, encadrants et équipes administratives.",
      competencesNumeriques: {
        title: 'a) Compétences numériques professionnelles',
        items: [
          "Prise en main d'outils numériques professionnels ;",
          "Gestion de planning, communication digitale avec l'employeur ;",
          "Utilisation d'applications métier ;",
          'Bureautique, outils collaboratifs, sécurité numérique ;',
          "Introduction aux outils d'intelligence artificielle utiles au travail."
        ]
      },
      competencesBienEtre: {
        title: 'b) Compétences de bien-être, ergonomie et prévention',
        items: [
          'Sécurité sur le lieu de travail ;',
          'Ergonomie et prévention des TMS ;',
          'Organisation du travail ;',
          'Communication professionnelle ;',
          'Gestion du stress et motivation ;',
          'Prévention des risques domestiques et psychosociaux.'
        ]
      },
      conclusion:
        "Ces formations contribuent à la professionnalisation du secteur, à l'amélioration des conditions de travail et à la réduction des risques professionnels."
    },
    ateliersParentalite: {
      title: 'Ateliers et groupes de parole autour de la parentalité',
      description: 'ECD propose des espaces dédiés aux familles et aux parents :',
      items: [
        'Ateliers thématiques (éducation, communication familiale, enjeux scolaires) ;',
        'Groupes de parole entre parents ;',
        'Rencontres avec des professionnels ;',
        'Actions favorisant le lien parent-enfant et le soutien éducatif.'
      ]
    }
  }
}

