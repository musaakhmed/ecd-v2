export type HeroSlide = {
  image: string
  subtitle: string
  title: string
  description: string
}

export const homepageHeroSlides: HeroSlide[] = [
  {
    image: '/assets/hero/devoirs.jpg',
    title: 'Soutien scolaire',
    subtitle: "Parce que chaque enfant mérite toute ses chances à l'école",
    description: 'Un accompagnement attentif pour révéler le potentiel de chaque élève.',
  },
  {
    image: '/assets/hero/titres-services.jpg',
    title: 'Transition numérique',
    subtitle: "Réussir sa transition numérique, c'est possible pour tous",
    description: 'Une approche inclusive au numérique: Jeunes, adultes et seniors; femmes et hommes.',
  },
  {
    image: '/assets/hero/seniors-transition-numerique.jpg',
    title: 'Formations professionelles',
    subtitle: "Former aujourd'hui les professionels des Titres-Services de demain",
    description: 'Des formations qui transforment le quitidien des aide-ménagères.',
  },
  {
    image: '/assets/hero/robotics.jpg',
    title: 'Services sur mesure',
    subtitle: 'Des solutions adaptées à vos besoins, tout simplement',
    description: 'Un accompagnement sur mesure, adapté à vos besoins.',
  },
]

export type ProgramCard = {
  title: string
  text: string
  image: string
}

export const homepageProgramCards: ProgramCard[] = [
  {
    title: "Découverte de l'Intelligence artificielle et ChatGPT",
    text: "L'intelligence artificielle est désormais présente dans tous les secteurs d'activité. Ce module vise à familiariser les usagers avec les technologies émergentes et les algorithmes performants pour fournir des réponses efficaces et personnalisées.",
    image: '/assets/programcards/ai.jpg',
  },
  {
    title: 'Internet, navigation et recherches en ligne',
    text: 'Choisir un navigateur web fiable, effectuer des recherches efficaces, visiter des sites sécurisés et personnaliser son navigateur. Le module offre aux utilisateurs novices des outils pour surfer en toute sécurité et protéger leurs données.',
    image: '/assets/programcards/navigatiion.jpg',
  },
  {
    title: 'Outils de signatures électroniques',
    text: "Gain de temps, moins de paperasserie et plus besoin d'imprimer puis de scanner. La signature électronique permet d'acquérir des outils numériques conventionnels ou certifiés, du simple paraphe sur PDF à la signature avec certificat eID.",
    image: '/assets/programcards/signature.jpg',
  },
  {
    title: 'Messageries électroniques',
    text: "L'usage des messageries électroniques est devenu indispensable dans le milieu professionnel et le quotidien. Ce module couvre la découverte de différents types de courriers électroniques comme Gmail, Outlook et Yahoo avec leurs fonctionnalités essentielles.",
    image: '/assets/programcards/email.jpg',
  },
  {
    title: 'Identité numérique, eID, itsme et démarches administratives',
    text: "Commander des documents administratifs, effectuer des paiements et s'identifier sur un portail numérique exigent une authentification numérique. Le module explore les comptes Itsme, le lecteur eID et les démarches sur Myminfin, My E-Box et IrisBox.",
    image: '/assets/programcards/eid.avif',
  },
  {
    title: 'Vidéoconférence: Zoom et Teams',
    text: "Microsoft Teams et Zoom sont les outils de communication en temps réel les plus populaires. Le module enseigne à partager des espaces d'échanges professionnels, rejoindre une réunion, créer et programmer des réunions et partager l'écran.",
    image: '/assets/programcards/videocall.jpg',
  },
]

export type ImpactStatItem = {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

export const homepageImpactStats: ImpactStatItem[] = [
  { value: 1250, suffix: '+', label: 'Participants', description: 'Personnes accompagnées' },
  { value: 48, label: 'Programmes', description: "D'activités et de formations" },
  { value: 4472, label: 'Sessions', description: 'Sessions organisées' },
  { value: 102, label: 'Partenaires', description: 'Institutions et associations' },
]

