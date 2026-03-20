export type SectionBlock = {
  sys: {
    id: string
  }
  internalName?: string
  title?: string
  body?: string
  image?: {
    url: string
    description?: string
  }
  items?: string[]
  ctaLabel?: string
  ctaHref?: string
}

export type PageEntry = {
  sys: {
    id: string
    publishedAt?: string
  }
  slug: string
  title: string
  seoTitle?: string
  seoDescription?: string
  heroImage?: {
    url: string
    description?: string
  }
  heroSubtitle?: string
  heroEyebrow?: string
  sections: SectionBlock[]
}

export type EddSectionEntry = {
  sys: {
    id: string
  }
  slug: string
  title: string
  menuTitle: string
  image?: {
    url: string
    description?: string
  }
  shortDescription: string
  bodyIntro?: string[]
  bodyItems?: {
    title?: string
    description?: string
  }[]
}

export type TitresServiceModuleEntry = {
  sys: {
    id: string
  }
  slug: string
  titre: string
  titreCourt?: string
  description: string
  descriptionCourte: string
  objectifsIntro?: string
  objectifs: string[]
  modalitesPedagogie: string
  evaluationSuivi: string
  supportsLogistiques: string
  publicVise: string
  approbation: {
    region: string
    certificate: string
    date?: string
  }[]
  duree: string
  category: 'outils-numeriques' | 'techniques-prevention' | 'bien-etre-savoir-faire'
  image?: {
    url: string
    description?: string
  }
  isPlaceholder?: boolean
}

