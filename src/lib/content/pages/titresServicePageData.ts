export type TitresServiceCategoryKey =
  | 'outils-numeriques'
  | 'techniques-prevention'
  | 'bien-etre-savoir-faire'

export const titresServiceCategoryLabels: Record<TitresServiceCategoryKey, string> = {
  'outils-numeriques': 'Outils numériques',
  'techniques-prevention': 'Techniques et prévention',
  'bien-etre-savoir-faire': 'Bien-être et savoir faire',
}

export const titresServiceCatalogueGroups: Array<{ key: TitresServiceCategoryKey; title: string }> = [
  { key: 'outils-numeriques', title: titresServiceCategoryLabels['outils-numeriques'] },
  { key: 'techniques-prevention', title: titresServiceCategoryLabels['techniques-prevention'] },
  { key: 'bien-etre-savoir-faire', title: titresServiceCategoryLabels['bien-etre-savoir-faire'] },
]

export const titresServiceCatalogueHero = {
  title: 'Titres Services',
  subtitle: 'Notre catalogue',
  description:
    'ECD asbl accompagne les entreprises dans le renforcement des compétences numériques, l’amélioration de l’organisation du travail et la promotion du bien-être des équipes. Les formations sont pratiques et adaptées aux réalités du terrain : outils numériques, organisation du temps, communication professionnelle, sécurité et prévention.',
  tags: ['Formation professionnelle', 'Sur site', 'Adapté aux besoins'],
  backgroundImage: '/assets/services/perfectionnement/office.jpg',
} as const

export const titresServiceCatalogueSections = {
  partnershipTitle: 'Modalités de partenariat',
  partnershipBackgroundImage: '/assets/epnm/initiation/informatique.jpeg',
  modulesTitle: 'Modules de formation',
  participationTitle: 'Modalités de Participation',
  placeholderBadge: 'Contenu à venir',
  viewModuleLabel: 'Voir la fiche',
} as const

export type TitresServicePartnershipCard = { title: string; description: string }

export const titresServicePartnershipCards: TitresServicePartnershipCard[] = [
  {
    title: 'Format',
    description:
      'Formations en inter-entreprise ou au sein de votre structure. Une salle de formation équipée à Bruxelles est mise à votre disposition.',
  },
  {
    title: 'Financement',
    description:
      'Bénéficiez du remboursement des frais de formation via le Fonds de Formation de Bruxelles, Forem Formation ou FORM TS.',
  },
  {
    title: 'Participants',
    description:
      "L'effectif par session est de 6-12 participants. Le suivi de présence des participants est assuré par les partenaires.",
  },
  {
    title: 'Tarifs',
    description:
      'Les tarifs sont proposés par participant ou par groupe, avec un forfait de déplacement inclus.',
  },
]

export type TitresServiceParticipationStep = {
  step: string
  title: string
  description: string
}

export const titresServiceParticipationSteps: TitresServiceParticipationStep[] = [
  {
    step: '01',
    title: 'Prise de contact avec l’entreprise',
    description:
      'L’entreprise agréée Titres-Services prend contact avec notre équipe afin d’organiser une formation destinée à ses travailleurs, par e-mail ou par téléphone. Un rendez-vous est ensuite fixé afin d’échanger sur vos besoins et les modalités d’organisation.',
  },
  {
    step: '02',
    title: 'Analyse des besoins',
    description:
      'En fonction de votre demande, nous analysons les besoins spécifiques de l’entreprise afin de proposer un programme de formation adapté au contexte professionnel et au niveau des participants. Notre catalogue de formations est également mis à votre disposition pour vous aider dans le choix des modules.',
  },
  {
    step: '03',
    title: 'Planification des sessions',
    description:
      'Les sessions de formation sont planifiées en concertation avec l’entreprise, en tenant compte des disponibilités des travailleurs et des contraintes organisationnelles. Les formations peuvent être organisées directement dans votre entreprise ou dans nos locaux à Bruxelles.',
  },
  {
    step: '04',
    title: 'Mise en œuvre de la formation',
    description:
      'Nos formateurs interviennent directement au sein de l’entreprise pour dispenser les formations et accompagner les travailleurs dans le développement de leurs compétences professionnelles. À l’issue des formations, nous transmettons à l’entreprise les évaluations des participants ainsi que nos recommandations pédagogiques.',
  },
  {
    step: '05',
    title: 'Démarches de remboursement',
    description:
      'Pour les entreprises souhaitant introduire des demandes de remboursement, notre équipe peut vous accompagner tout au long de la procédure auprès des fonds de formation de Bruxelles, de la Wallonie et du Form TS.',
  },
  {
    step: '06',
    title: 'Subventions de formation',
    description:
      'Certains de nos modules sont repris dans le catalogue du Form TS, en formule « In Company » ou « Calendrier ouvert », selon les sessions proposées.',
  },
]

export const titresServiceCatalogueCta = {
  title: 'Intéressé par nos Formations ?',
  description:
    'Contactez-nous pour organiser une formation sur site pour vos travailleurs Titres-Services.',
  buttonLabel: 'Demander une Formation',
  href: '/contact',
} as const

export const titresServiceDetailHero = {
  breadcrumbsLabel: titresServiceCatalogueHero.title,
  backgroundImage: titresServiceCatalogueHero.backgroundImage,
} as const

export const titresServiceDetailSidebarLabels = {
  title: 'Infos pratiques',
  publicVise: 'Public visé',
  duree: 'Durée',
  approbations: 'Approbation(s)',
  ctaLabel: 'Demander une offre',
  ctaHref: '/contact',
} as const

export const titresServiceModuleLabels = {
  descriptionTitle: 'Description',
  objectifsTitle: 'Objectifs',
  modalitesTitle: 'Modalités et pédagogie',
  evaluationTitle: 'Évaluation et suivi',
  supportsTitle: 'Supports logistiques',
  placeholderTitle: 'Contenu à venir',
  placeholderDescription:
    'Cette page est en cours de rédaction. Vous pouvez déjà demander une offre via le bouton « Demander une offre ».',
} as const

