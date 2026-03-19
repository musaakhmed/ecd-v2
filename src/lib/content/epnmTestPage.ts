export type EpnmServiceKind =
  | 'initiation'
  | 'smartphone'
  | 'security'
  | 'email'
  | 'jobSearch'
  | 'administration'

export const epnmTestPageContent = {
  hero: {
    title: 'Espace Public Numérique Mobile',
    description:
      "Un service mobile qui vient à vous pour réduire la fracture numérique et rendre l'accès aux outils digitaux accessible à tous.",
    tags: ['Formation sur site', 'Équipements fournis', 'Accompagnement personnalisé'],
    backgroundImage: '/assets/hero/seniors-transition-numerique.jpg',
  },
  whatIs: {
    title: "Qu'est-ce que l'EPNM ?",
    paragraphs: [
      "L'Espace Public Numérique Mobile (EPNM) est un service innovant qui se déplace directement sur votre lieu de travail ou dans votre quartier pour proposer des formations numériques adaptées à vos besoins.",
      "Nous apportons les équipements nécessaires et offrons un accompagnement personnalisé pour vous initier ou vous perfectionner dans l'utilisation des outils numériques, que ce soit pour votre vie professionnelle ou personnelle.",
    ],
  },
  services: {
    title: 'Nos Services de Formation',
    description:
      'Des formations pratiques et accessibles pour maîtriser les outils numériques essentiels',
    items: [
      {
        kind: 'initiation',
        title: "Initiation à l'informatique",
        description:
          "Découvrez les bases de l'informatique : utilisation du clavier, de la souris, navigation sur internet.",
      },
      {
        kind: 'smartphone',
        title: 'Utilisation des smartphones',
        description: 'Apprenez à utiliser votre smartphone : applications, messagerie, photos, navigation.',
      },
      {
        kind: 'security',
        title: 'Sécurité en ligne',
        description:
          'Protégez-vous sur internet : gestion des mots de passe, identification des arnaques, protection des données.',
      },
      {
        kind: 'email',
        title: 'Messagerie électronique',
        description:
          "Maîtrisez l'envoi et la réception d'emails, la gestion de votre boîte mail, les pièces jointes.",
      },
      {
        kind: 'jobSearch',
        title: "Recherche d'emploi en ligne",
        description:
          "Utilisez les plateformes de recherche d'emploi, créez votre CV numérique, postulez en ligne.",
      },
      {
        kind: 'administration',
        title: 'Administration en ligne',
        description:
          'Effectuez vos démarches administratives en ligne : déclarations, demandes, paiements.',
      },
    ] as const,
  },
  audiences: {
    title: 'Publics Cibles',
    description:
      "Nos formations s'adressent à tous ceux qui souhaitent améliorer leurs compétences numériques",
    items: [
      {
        title: 'Travailleurs Titres-Services',
        description: 'Formation sur site pour améliorer vos compétences numériques professionnelles.',
      },
      {
        title: 'Jeunes',
        description: 'Ateliers adaptés pour développer vos compétences digitales et votre avenir.',
      },
      {
        title: 'Seniors',
        description: 'Initiation douce et bienveillante aux outils numériques du quotidien.',
      },
      {
        title: 'Publics vulnérables',
        description: 'Accompagnement personnalisé pour réduire la fracture numérique.',
      },
    ],
  },
  howItWorks: {
    title: 'Comment ça fonctionne ?',
    steps: [
      {
        step: '01',
        title: 'Prise de contact',
        description: 'Contactez-nous pour discuter de vos besoins et de vos objectifs de formation.',
      },
      {
        step: '02',
        title: 'Planification',
        description: 'Nous organisons une intervention sur votre site avec les équipements nécessaires.',
      },
      {
        step: '03',
        title: 'Formation',
        description:
          'Nos formateurs vous accompagnent de manière personnalisée dans votre apprentissage.',
      },
      {
        step: '04',
        title: 'Suivi',
        description: 'Nous assurons un suivi post-formation pour répondre à vos questions et besoins.',
      },
    ],
  },
  cta: {
    title: 'Prêt à démarrer votre formation ?',
    description: 'Contactez-nous pour organiser une intervention sur votre site ou dans votre quartier.',
    buttonLabel: 'Demander une Intervention',
    href: '/contact',
  },
} as const

