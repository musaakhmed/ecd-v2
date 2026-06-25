const IMAGE_BASE = '/assets/services/autres-formations/ergonomie-maison-repos'

export type PedagogicalModule = {
  title: string
  items: readonly string[]
}

export const autreFormationPageContent = {
  hero: {
    imageSrc: `${IMAGE_BASE}/pexels-karola-g-5207102.jpg`,
    imageAlt: 'Personnel soignant en maison de repos',
    eyebrow: 'Nos Services',
    title: 'Formation en ergonomie dans les maisons de repos',
    description:
      "Cette formation vise à prévenir les Troubles Musculo-Squelettiques (TMS) chez les professionnels travaillant en maison de repos. Les participants apprennent à adopter les bonnes postures lors des soins, des transferts de résidents, de la manutention du matériel et des tâches quotidiennes. Des techniques ergonomiques concrètes sont présentées afin de réduire la fatigue physique, les douleurs et les risques d'accidents. La formation alterne apports théoriques, démonstrations et exercices pratiques adaptés aux situations de terrain. ",
  },
  contexte: {
    title: 'Contexte',
    paragraphs: [
      'Les travailleurs des maisons de repos sont quotidiennement confrontés à des tâches physiquement exigeantes : aide à la mobilité des résidents, transferts, manutention, entretien des locaux, port de charges, postures contraignantes et gestes répétitifs.',
      "Ces situations peuvent entraîner l'apparition de Troubles Musculo-Squelettiques (TMS), qui représentent l'une des principales causes d'absentéisme et d'incapacité de travail dans le secteur des soins et de l'aide aux personnes.",
      "Afin de réduire ces risques et d'améliorer le bien-être au travail, Espace Forma propose un programme de formation spécifique en ergonomie et prévention des TMS destiné aux travailleurs des maisons de repos.",
    ],
  },
  imageSections: [
    {
      key: 'objectifs',
      title: 'Objectifs de la formation',
      imageSrc: `${IMAGE_BASE}/pexels-kampus-7551622.jpg`,
      imageAlt: 'Session de formation professionnelle',
      intro: "À l'issue de la formation, les participants seront capables de :",
      listItems: [
        'Identifier les principaux risques ergonomiques liés à leur activité professionnelle.',
        "Comprendre les mécanismes d'apparition des TMS.",
        'Adopter les bonnes postures de travail.',
        'Réaliser les gestes professionnels en limitant les contraintes physiques.',
        'Utiliser correctement les aides techniques disponibles.',
        'Prévenir les douleurs dorsales, cervicales et articulaires.',
        'Améliorer leur confort et leur sécurité au travail.',
      ],
    },
    {
      key: 'publicCible',
      title: 'Public cible',
      imageSrc: `${IMAGE_BASE}/pexels-karola-g-5207102.jpg`,
      imageAlt: 'Équipe soignante en établissement médicalisé',
      intro: 'Personnel des maisons de repos :',
      listItems: [
        'Aides-soignants',
        'Aides familiaux',
        "Agents d'entretien",
        'Personnel logistique',
        'Accompagnateurs de vie',
        'Équipes polyvalentes',
      ],
    },
    {
      key: 'methodologie',
      title: 'Méthodologie',
      imageSrc: `${IMAGE_BASE}/pexels-jsme-mila-523821574-18459198.jpg`,
      imageAlt: 'Travailleuse en situation professionnelle en maison de repos',
      intro: 'La formation privilégie une approche participative :',
      listItems: [
        'Présentation interactive',
        'Démonstrations pratiques',
        'Exercices individuels et en groupe',
        'Études de situations réelles rencontrées en maison de repos',
        "Échanges d'expériences entre participants",
      ],
    },
  ],
  organisation: {
    title: 'Organisation des formations',
    formule: {
      title: 'Formule',
      items: [
        "Les formations sont organisées en inter-entreprises dans les locaux d'Espace Forma.",
        'Chaque maison de repos peut inscrire plusieurs travailleurs à la session.',
      ],
    },
    participants: {
      title: 'Nombre de participants',
      items: [
        'Minimum : 8 participants',
        'Maximum : 15 participants',
        'Chaque établissement peut inscrire entre 3 et 5 travailleurs par session.',
      ],
    },
    duree: {
      title: 'Durée',
      items: [
        '4 heures',
        'Deux créneaux possibles :',
        'Session matin : 08h00 – 12h00',
        'Session après-midi : 13h00 – 17h00',
      ],
    },
  },
  contenuPedagogique: {
    title: 'Contenu pédagogique',
    modules: [
      {
        title: 'Module 1 : Comprendre les TMS',
        items: [
          'Définition des Troubles Musculo-Squelettiques',
          'Statistiques et impacts sur la santé',
          'Facteurs de risque',
        ],
      },
      {
        title: "Module 2 : Principes d'ergonomie",
        items: [
          "Notions d'ergonomie au travail",
          'Analyse des postures professionnelles',
          "Organisation de l'espace de travail",
        ],
      },
      {
        title: 'Module 3 : Gestes et postures',
        items: [
          'Prévention du mal de dos',
          'Techniques de levage sécurisées',
          'Réduction des mouvements répétitifs',
          "Économie d'effort",
        ],
      },
      {
        title: 'Module 4 : Manipulation des résidents',
        items: [
          'Principes de manutention des personnes',
          'Utilisation des aides techniques',
          'Prévention des risques lors des transferts',
        ],
      },
      {
        title: 'Module 5 : Exercices pratiques',
        items: [
          'Mise en situation',
          'Études de cas',
          'Exercices de correction posturale',
          'Conseils personnalisés',
        ],
      },
    ] satisfies PedagogicalModule[],
  },
  resultatsAttendus: {
    title: 'Résultats attendus',
    items: [
      'Réduction des comportements à risque.',
      'Amélioration des postures de travail.',
      'Sensibilisation durable à la prévention des TMS.',
      'Diminution des douleurs liées aux activités professionnelles.',
      "Contribution à la réduction de l'absentéisme et des accidents de travail.",
    ],
  },
  attestation: {
    title: 'Attestation',
    text: "Une attestation de participation sera remise à chaque participant à l'issue de la formation.",
  },
} as const
