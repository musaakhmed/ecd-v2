export type HeroSectionData = {
  imageSrc: string
  imageAlt: string
  subtitle: string
  title: string
  description: string
}

export type ProgrammeCard = {
  title: string
  href: string
  description: string
  variant: 'gradient-primary' | 'gradient-secondary'
}

export const inclusionNumeriqueLanding = {
  hero: {
    imageSrc: '/assets/hero/transition-numerique.png',
    imageAlt: 'Inclusion numérique',
    subtitle: 'Espace Public Numérique Mobile',
    title: 'Inclusion numérique',
    description:
      'EF asbl déploie un accompagnement mobile et inclusif : ateliers et permanences numériques au plus près des habitants, dans les lieux de proximité.',
  } satisfies HeroSectionData,
  intro: {
    title: 'Un dispositif de proximité',
    paragraphs: [
      "Aujourd'hui, de plus en plus de démarches essentielles se font en ligne : prendre un rendez-vous, consulter ses documents, accéder à une administration, envoyer un e-mail, utiliser une application bancaire ou rechercher une information fiable. Pour une partie de la population, ces gestes restent complexes ou inaccessibles. Le manque d'équipement, de compétences ou de confiance renforce la fracture numérique et les inégalités.",
      "Pour répondre à ces enjeux, EF asbl déploie l'EPNM – Espace Public Numérique Mobile – et propose des ateliers et permanences numériques directement sur le terrain, au plus près des habitants.",
    ],
  },
  programmesSection: {
    title: 'Nos programmes',
    description: "Découvrez les actions d'inclusion numérique adaptées à chaque public.",
    linkLabel: 'Découvrir',
  },
  programmes: [
    {
      title: 'Jeunes connectés',
      href: '/inclusion-numerique/jeunes-connectes',
      description:
        "Stages et ateliers 6–18 ans : programmation, robotique (Thymio, Micro:bit), création numérique. Développer ses compétences en s'amusant.",
      variant: 'gradient-primary',
    },
    {
      title: 'Connectés & Autonomes',
      href: '/inclusion-numerique/seniors-digital',
      description:
        'Projet soutenu par la Loterie Nationale (avril 2026 – mars 2027) : ateliers et permanences gratuits pour les seniors à Bruxelles.',
      variant: 'gradient-primary',
    },
    {
      title: 'Alpha, FLE et Numérique',
      href: '/inclusion-numerique/alpha-fle-numerique',
      description:
        'Intégration du numérique dans les parcours Alpha et FLE. Accès aux démarches en ligne malgré le double obstacle langue et numérique.',
      variant: 'gradient-primary',
    },
    {
      title: 'Emploi & Numérique',
      href: '/inclusion-numerique/emploi-numerique',
      description:
        "Ateliers informatiques pour demandeurs d'emploi et publics en activation : recherche d'emploi, candidatures, plateformes, CV en ligne.",
      variant: 'gradient-secondary',
    },
  ] satisfies ProgrammeCard[],
  lieuxSection: {
    title: "Lieux d'intervention",
    intro:
      'Les ateliers et permanences sont organisés dans des lieux de proximité, en partenariat avec :',
  },
  lieuxIntervention: [
    'Associations et collectifs',
    'Écoles de devoirs',
    'Maisons de quartier',
    'Permanences sociales',
    'Centres communautaires',
    'Logements sociaux',
    'Structures partenaires',
  ],
} as const

export const emploiNumeriquePage = {
  hero: {
    imageSrc: '/assets/hero/transition-numerique.png',
    imageAlt: 'Emploi & Numérique',
    subtitle: 'Inclusion Numérique',
    title: 'Emploi & Numérique',
    description:
      "EF asbl propose des ateliers informatiques pour les personnes en recherche d'emploi ou en activation sociale, en complément des ISP : un volet numérique concret et adapté aux démarches pour accéder à l'emploi.",
  } satisfies HeroSectionData,
  sections: {
    objectif: {
      title: 'Objectif',
      paragraphs: [
        "L'objectif est d'accompagner les demandeurs d'emploi dans l'acquisition des compétences numériques essentielles à la recherche, l'orientation et aux démarches professionnelles, afin de progresser vers une véritable autonomie numérique.",
        "Ce dispositif répond à une réalité de terrain : de nombreux candidats rencontrent des difficultés dans l'usage de l'informatique, alors que le numérique est aujourd'hui indispensable et déterminant pour :",
      ],
    },
    publicCible: {
      title: 'Public cible',
      intro: "Ces ateliers s'adressent aux :",
    },
    contenus: {
      title: 'Contenus pédagogiques',
      intro:
        "Les contenus sont proposés de l'initiation à la mise en situation, jusqu'au perfectionnement, selon le niveau du groupe.",
      modulesBase: {
        title: 'Modules de base',
        intro: 'Les ateliers abordent notamment :',
        items: [
          "Découverte de l'ordinateur et des périphériques",
          'Bases de Windows / Android / iOS',
          "Utilisation d'Internet et des navigateurs",
          'Applications de base et outils du quotidien',
          'Messagerie électronique (création, envoi, pièces jointes)',
          'Recherche en ligne et navigation efficace',
          'Traitement de texte : mise en page, CV et lettre de motivation',
        ],
      },
      demarchesEmploi: {
        title: 'Démarches emploi en ligne',
        intro: 'Les participants apprennent également à réaliser leurs démarches concrètes :',
        items: [
          'Inscription et utilisation de My Actiris',
          "Inscription et suivi via des agences d'intérim",
          "Recherche d'offres et candidature en ligne",
        ],
      },
      modulesAvances: {
        title: 'Modules avancés (selon besoins)',
        intro: 'Pour les publics plus autonomes, des séances peuvent porter sur :',
        items: [
          'Plateformes emploi : LinkedIn, Indeed, etc.',
          'Optimisation de profil et candidature numérique',
          'Préparation à une validation de compétences (si pertinent)',
        ],
      },
    },
    approche: {
      title: 'Approche pédagogique',
      paragraphs: [
        'La première séance est consacrée à un diagnostic des compétences et besoins, à travers des questions simples et des exercices guidés.',
        "L'animation privilégie une approche :",
        "Les exercices sont directement liés aux réalités du parcours emploi : démarches, candidatures, utilisation d'outils en ligne, recherche d'informations, etc.",
      ],
    },
    suivi: {
      title: 'Suivi et évaluation',
      paragraphs: [
        "Tout au long des ateliers, les animateurs réalisent des notes de séance permettant d'assurer le suivi, incluant :",
        'Une évaluation individuelle est également réalisée avec chaque participant afin d’identifier les acquis et les besoins futurs.',
        'Les conseillers emploi encadrant le groupe peuvent également transmettre au formateur des observations utiles pour adapter l’accompagnement au plus près de la réalité de chaque candidat.',
      ],
    },
    partenariats: {
      title: 'Partenariats',
      intro: 'EF asbl développe des partenariats avec des acteurs tels que :',
    },
  },
  objectifList: [
    'Consulter des offres,',
    'Postuler en ligne,',
    'Suivre un dossier,',
    'Communiquer avec des employeurs ou organismes,',
    'Gérer des comptes sur des plateformes officielles.',
  ],
  publicCible: [
    "Demandeurs d'emploi,",
    "Bénéficiaires CPAS ou en parcours d'activation,",
    'Personnes suivies par des dispositifs ISP,',
    'Publics ayant peu ou pas de maîtrise informatique,',
    'Publics souhaitant se perfectionner pour mieux gérer leurs démarches en ligne.',
  ],
  approcheList: [
    'pratique (apprendre en faisant)',
    'progressive (pas à pas, sans pression)',
    'inclusive (adaptée aux niveaux et aux rythmes)',
    'collective (entraide et échanges)',
  ],
  suiviItems: [
    'Évaluation de la compréhension et de la progression,',
    'Difficultés rencontrées,',
    'Besoins exprimés,',
    'Ajustements pédagogiques,',
    'Dynamique de groupe et implication.',
  ],
  partenariatsList: [
    'Services emploi des CPAS',
    "Boutiques de l'emploi",
    'Missions locales',
    "Structures ISP et organismes d'accompagnement socioprofessionnel",
  ],
} as const

export const alphaFleNumeriquePage = {
  hero: {
    imageSrc: '/assets/hero/transition-numerique.png',
    imageAlt: 'Alpha, FLE et Numérique',
    subtitle: 'Inclusion Numérique',
    title: 'Alpha, FLE et Numérique',
    description:
      'EF asbl intègre le numérique dans ses parcours Alpha et FLE. Pour les personnes en parcours, les démarches en ligne représentent souvent un double obstacle (langue et numérique) ; nous les accompagnons pour y accéder.',
  } satisfies HeroSectionData,
  sections: {
    objectifs: {
      title: 'Objectifs',
      intro:
        "Permettre aux apprenants d'acquérir des outils numériques facilitant l'apprentissage du français, afin de progresser en autonomie (vocabulaire, prononciation, lecture, écriture, compréhension) et de renforcer leur capacité à réaliser des démarches du quotidien. À travers des ateliers pratiques et progressifs, les participants pourront :",
    },
    outils: {
      title: "Outils d'apprentissage en ligne",
      blocks: [
        {
          title: "J'apprends – Apprentissage du français pour adultes migrants",
          description:
            'Plateforme conçue pour aider les adultes migrants à apprendre le français de manière progressive. Travail sur vocabulaire, compréhension, phrases du quotidien.',
        },
        {
          title: 'ClicMaClasse',
          linkHref: 'https://clicmaclasse.fr/',
          linkLabel: 'clicmaclasse.fr',
          suffixTitle: ' – Sons et prononciation',
          description:
            'Outil utile pour la familiarisation avec les sons du français. Écouter, répéter et différencier les sons (ex : ou/u, an/en, é/è).',
        },
        {
          title: 'Applications ludiques pour apprendre le français',
          apps: [
            {
              name: 'OrthoLud',
              host: 'ortholud.com',
              description: 'exercices ludiques (orthographe, grammaire, conjugaison, vocabulaire).',
            },
            {
              name: 'Le Point du FLE',
              host: 'lepointdufle.net',
              description: 'ressources FLE par niveaux (exercices, fiches, audio, activités).',
            },
          ],
        },
        {
          title: 'RapidTyping (apprentissage du clavier)',
          description:
            'Outil pratique pour apprendre à taper au clavier, gagner en aisance et écrire plus facilement sur PC.',
        },
      ],
    },
    methode: {
      title: 'Méthode pédagogique',
      intro: 'Les ateliers sont basés sur :',
    },
    aidants: {
      title: 'Formation des aidants numériques',
      intro:
        'EF asbl propose également des formations et accompagnements pédagogiques en lien avec les TIC, afin de renforcer les compétences des professionnels de terrain. Nous intervenons notamment pour :',
    },
    partenariats: {
      title: 'Partenariats',
      intro:
        'Les asbl actives en alphabétisation (Alpha) et en Français Langue Étrangère (FLE) peuvent formuler leurs demandes afin de développer des partenariats avec EF asbl. Ces partenariats peuvent porter sur :',
      outro:
        "Les structures intéressées peuvent nous contacter afin d'analyser leurs besoins et construire ensemble une collaboration adaptée.",
    },
  },
  objectifsItems: [
    'Apprendre à utiliser un smartphone, une tablette ou un ordinateur (clavier, souris, Wi-Fi),',
    "Découvrir et utiliser des plateformes d'apprentissage du français adaptées,",
    'Améliorer la prononciation et la compréhension orale,',
    'Enrichir le vocabulaire utile (emploi, santé, école, transport…),',
    "S'entraîner à lire et écrire (phrases simples, messages, e-mails),",
    'Utiliser des outils de soutien (audio, exercices autocorrectifs),',
    'Renforcer la sécurité numérique (mots de passe, arnaques, données personnelles).',
  ],
  methodeItems: [
    'Une approche simple et concrète (faire ensemble, étape par étape),',
    'Des supports visuels et accessibles,',
    'La répétition et la mise en pratique,',
    'Un accompagnement individualisé selon le niveau des participants.',
  ],
  formationAidants: [
    'Former des formateurs,',
    'Professionnaliser des aidants numériques,',
    'Intégrer des outils numériques adaptés aux publics Alpha/FLE,',
    'Accompagner la mise en place de démarches pédagogiques inclusives.',
  ],
  partenariatsItems: [
    "L'intégration du numérique dans les parcours Alpha/FLE,",
    "La mise en place d'ateliers pratiques pour les apprenants,",
    'Des formations TIC adaptées aux publics,',
    "La formation de formateurs et d'aidants numériques,",
    'Un accompagnement méthodologique et pédagogique sur mesure.',
  ],
} as const

export const jeunesConnectesPage = {
  hero: {
    imageSrc: '/assets/hero/robotics.jpg',
    imageAlt: 'Jeunes connectés',
    subtitle: 'Inclusion Numérique',
    title: 'Jeunes connectés',
    description:
      'EF asbl propose des stages et ateliers pour les 6-18 ans (informatique, programmation, robotique, création numérique). Un parcours ludique pour développer ses compétences tout en s’amusant.',
  } satisfies HeroSectionData,
  sections: {
    objectifs: {
      title: 'Objectifs généraux',
      intro: 'Ces stages permettent aux participants de :',
    },
    parcours: { title: "Deux parcours adaptés à l'âge" },
    parcours1: {
      title: 'Parcours 1 : Stages informatiques (6–12 ans)',
      intro: 'Un programme ludique et progressif, adapté au rythme des enfants.',
      thymio: {
        title: 'Thymio – Découverte de la robotique',
        items: [
          'Comprendre les capteurs, mouvements et comportements',
          'Tester différents modes (suivi de ligne, évitement, lumière, sons)',
          'Premiers pas en programmation visuelle',
        ],
      },
      microbit: {
        title: 'Micro:bit – Initiation au codage',
        items: [
          'Découvrir MakeCode (programmation simple et visuelle)',
          'Créer des mini-jeux et animations',
          'Réaliser des signaux lumineux et petits objets interactifs',
        ],
      },
      objectifLabel: 'Objectif :',
      objectifText: 'apprendre en jouant et développer la confiance dans le numérique.',
    },
    parcours2: {
      title: 'Parcours 2 : Jeunes connectés (12–18 ans)',
      intro:
        'Un programme axé sur des défis, des mini-projets et une logique de création de solutions.',
      thymio: {
        title: 'Thymio – Robotique & programmation avancée',
        items: [
          'Programmation conditionnelle, boucles, scénarios',
          'Défis : parcours chronométrés, labyrinthe, évitement d’obstacles',
          'Projet final : robot autonome (mission, course, secours, etc.)',
        ],
      },
      microbit: {
        title: 'Micro:bit – Coding & objets connectés',
        items: [
          'MakeCode niveau intermédiaire à avancé',
          'Utilisation de variables, conditions, événements, boucles',
          'Capteurs : mouvement, température, lumière, boussole',
        ],
        creationsTitle: 'Créations possibles :',
        creations: [
          'Mini-jeux programmés',
          'Compteur de pas / alarme intelligente',
          "Système d'alerte lumineux",
          'Prototypes d’objets autonomes ("smart objects")',
        ],
      },
      objectifLabel: 'Objectif :',
      objectifText:
        "passer de l'apprentissage à une production numérique concrète, en individuel et en équipe.",
    },
    creations: {
      title: 'Créations & projets',
      intro:
        'Chaque participant réalise des projets inspirés de ses idées ou de défis proposés, par exemple :',
    },
    organisation: { title: 'Organisation' },
    competences: { title: 'Compétences développées' },
    pourQui: {
      title: 'Pour qui ?',
      introStructures: "Ce programme s'adresse aux :",
      introSouhaitant: 'Souhaitant :',
    },
  },
  objectifsGeneraux: [
    'Découvrir la programmation et la pensée logique',
    'Développer la logique algorithmique et la résolution de problèmes',
    'Explorer la robotique éducative avec Thymio et Micro:bit',
    'Réaliser des projets créatifs (jeux, robots, animations, objets interactifs)',
    'Stimuler la créativité, l’autonomie, la coopération et la communication',
    'Comprendre le numérique et ses usages au quotidien',
  ],
  creationsProjets: [
    'Robots autonomes et intelligents',
    'Mini-jeux interactifs',
    'Animations numériques',
    'Parcours logiques et défis de programmation',
    'Objets connectés simples (alertes, signaux, capteurs)',
    'Défis "Hackathon" (12–18 ans) : créer une solution en équipe en temps limité',
  ],
  organisation: [
    '2 heures par séance',
    'Ateliers organisés chaque semaine',
    'Programme sur plusieurs semaines',
    'Alternance : découverte – entraînement – défis – création – présentation finale',
  ],
  competences: [
    'Logique & pensée algorithmique',
    'Créativité, imagination & innovation',
    'Travail en équipe & communication',
    'Autonomie & gestion de projet',
    'Résolution de problèmes',
    'Culture numérique et usage responsable des outils',
  ],
  pourQuiStructures: [
    'Écoles',
    'Maisons de quartier',
    'Associations',
    'Structures périscolaires et extrascolaires',
  ],
  pourQuiSouhaitant: [
    'Proposer des activités innovantes',
    'Initier les jeunes aux compétences numériques de demain',
    "Enrichir l'offre éducative et ludique",
  ],
} as const

export const seniorsDigitalPage = {
  hero: {
    imageSrc: '/assets/hero/seniors-transition-numerique.jpg',
    imageAlt: 'Seniors & le digital',
    subtitle: 'Inclusion Numérique',
    title: 'Accompagner les seniors dans la transition numérique',
    description:
      'De nombreux services du quotidien sont devenus numériques. EF asbl propose un accompagnement numérique adapté et accessible, pour utiliser les outils en toute sécurité, à son rythme et dans un cadre bienveillant.',
  } satisfies HeroSectionData,
  sections: {
    objectif: {
      title: 'Objectif général',
      paragraph:
        "Permettre aux seniors de gagner en autonomie numérique, afin de réaliser leurs démarches quotidiennes en ligne en toute confiance et en toute sécurité, tout en réduisant le sentiment d'exclusion lié à la digitalisation croissante des services.",
    },
    objectifsSpecifiques: {
      title: 'Objectifs spécifiques',
      intro: 'À travers ces ateliers, EF asbl vise à :',
    },
    approche: {
      title: 'Une approche de proximité, centrée sur les besoins',
      paragraphs: [
        "Une frange importante de la société, et plus particulièrement les seniors, reste aujourd'hui à l'écart des opportunités offertes par le numérique.",
        "Pour lever ces freins, les activités sont organisées directement dans les lieux fréquentés par les seniors : centres récréatifs, permanences sociales, maisons de repos, associations et collectifs, afin de faciliter l'accès et proposer un cadre rassurant.",
        'Les participants peuvent choisir les thématiques à développer, en lien direct avec leur quotidien et leurs besoins réels.',
        'Les contenus et la méthodologie sont élaborés en concertation avec les partenaires et les seniors, dans une démarche qui vise à :',
        'Les participants peuvent travailler avec leurs propres appareils (PC, tablette ou smartphone).',
      ],
    },
    impact: {
      title: 'Impact et finalité',
      paragraphs: [
        "Cet accompagnement constitue un levier concret de lutte contre l'exclusion sociale et numérique.",
        "À terme, l'objectif est de combattre l'illettrisme numérique, dont les seniors sont parmi les premières victimes.",
        'Les actions permettent notamment :',
        "Une attention particulière est portée à la sécurité, à la prévention et à la protection des données personnelles, afin d'assurer un usage responsable et serein du numérique.",
      ],
    },
  },
  objectifsSpecifiques: [
    "Renforcer l'autonomie numérique dans les usages du quotidien : recherche d'informations, prise de rendez-vous, téléchargement de documents, démarches simples en ligne.",
    'Développer les compétences de base sur smartphone, tablette et ordinateur : connexion Wi-Fi, navigation Internet, clavier, gestion des applications, photos et documents.',
    "Faciliter la communication avec les proches et les services grâce à l'e-mail, aux messageries instantanées et aux appels vidéo.",
    "Accompagner l'accès aux services essentiels en ligne, notamment les plateformes communales, administratives, sociales ou de santé.",
    "Renforcer la sécurité numérique : reconnaissance des arnaques, protection des données personnelles, gestion des mots de passe, bonnes pratiques pour l'e-banking et les paiements en ligne.",
    'Redonner confiance et lutter contre l’isolement, grâce à un apprentissage progressif, l’entraide et la valorisation des acquis.',
    'Adapter les apprentissages au rythme des seniors, avec une pédagogie simple, des explications pas à pas et un accompagnement personnalisé.',
  ],
  approcheProximite: [
    'Répondre aux priorités exprimées,',
    'Proposer des contenus ciblés et utiles,',
    "Favoriser l'apprentissage par la pratique.",
  ],
  impactFinalite: [
    'De découvrir les innovations numériques et les simplifications administratives,',
    'De se familiariser avec les plateformes et procédures en ligne,',
    "D'utiliser les guichets électroniques et services numériques de manière autonome.",
  ],
} as const

export const connectesAutonomesPage = {
  hero: {
    imageSrc: '/assets/hero/seniors-transition-numerique.jpg',
    imageAlt: 'Connectés & Autonomes – inclusion numérique des seniors',
    subtitle: 'Inclusion Numérique',
    title: 'La Loterie Nationale soutient l’inclusion numérique des seniors',
    description:
      'Grâce à la participation de ses joueurs, la Loterie Nationale soutient notre projet d’inclusion numérique des seniors à Bruxelles, mis en œuvre d’avril 2026 à mars 2027.',
  } satisfies HeroSectionData,
  sections: {
    objectif: {
      title: 'Connectés & Autonomes : l’informatique au service des seniors',
      paragraph:
        'Le projet « Connectés & Autonomes : l’informatique au service des seniors » a pour objectif de lutter contre la fracture numérique touchant les personnes âgées en renforçant leurs compétences numériques et leur autonomie dans l’utilisation des outils digitaux du quotidien.',
    },
    objectifsSpecifiques: {
      title: 'Objectifs du projet',
      intro: 'Le projet poursuit plusieurs objectifs complémentaires :',
    },
    approche: {
      title: 'Public cible',
      paragraphs: [
        'Le projet s’adresse principalement aux seniors en situation d’isolement, de fragilité sociale ou éloignés du numérique, notamment les personnes fréquentant des centres de jour, maisons de quartier, associations locales ou structures d’accompagnement social à Bruxelles.',
        'Concrètement, des ateliers collectifs, des initiations pratiques et des permanences d’accompagnement individuel sont organisés directement dans les structures partenaires accueillant les seniors. Les bénéficiaires peuvent ainsi apprendre à utiliser un smartphone, une tablette ou un ordinateur, effectuer des démarches en ligne, communiquer avec leurs proches, accéder aux services numériques essentiels et adopter de bonnes pratiques de sécurité sur Internet.',
        'Afin de garantir l’accessibilité du dispositif, les activités sont entièrement gratuites pour les participants.',
      ],
    },
    impact: {
      title: 'Organisations partenaires',
      paragraph:
        'Le projet est développé en collaboration avec plusieurs organisations et structures locales bruxelloises actives dans l’accompagnement des seniors et l’action sociale, notamment des centres récréatifs, maisons de quartier, associations de proximité, centres de jour et CPAS partenaires accueillant les activités et orientant les bénéficiaires.',
    },
    lieuPeriode: {
      title: 'Lieu et période',
      paragraph:
        'Les activités sont organisées d’avril 2026 à mars 2027 dans différents lieux d’accueil des seniors à Bruxelles : maisons de quartier, centres de jour, associations locales, CPAS et autres structures partenaires du territoire.',
    },
  },
  objectifsSpecifiques: [
    'Réduire la fracture numérique chez les seniors ;',
    'Renforcer l’autonomie numérique des bénéficiaires ;',
    'Faciliter l’accès aux services en ligne (e-administration, santé, mobilité, banque, etc.) ;',
    'Favoriser le maintien du lien social et familial grâce aux outils numériques ;',
    'Sensibiliser aux risques liés au numérique et aux bonnes pratiques ;',
    'Prévenir l’isolement social et renforcer la confiance en soi.',
  ],
} as const
