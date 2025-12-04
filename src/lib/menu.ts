export type MenuItem = {
  title: string
  link: string
  submenu?: {
    links: { title: string; link: string }[]
    image?: {
      src: string
      alt: string
    }
  }
}

export const menu: MenuItem[] = [
  {
    title: 'Accueil',
    link: '/',
  },
  {
    title: 'A propos',
    link: '/a-propos',
    submenu: {
      links: [
        { title: 'Qui sommes-nous?', link: '/a-propos#qui-sommes-nous' },
        { title: 'Nos agréments', link: '/a-propos#agrements' },
        { title: 'Nos status', link: '/a-propos#status' },
        { title: 'Notre histoire', link: '/a-propos#notre-histoire' },
      ],
      image: {
        src: '/assets/hero/devoirs.jpg',
        alt: 'À propos de nous',
      },
    },
  },
  {
    title: 'Nos services',
    link: '/#services',
  },
  {
    title: 'Inclusion numérique',
    link: '/inclusion-numerique',
    submenu: {
      links: [
        { title: 'Stages scolaires', link: '/inclusion-numerique#stages-scolaires' },
        { title: 'Jeunes connectés', link: '/inclusion-numerique#jeunes-connectes' },
        { title: 'Seniors et le digital', link: '/inclusion-numerique#seniors-digital' },
        { title: 'Femmes et le digital', link: '/inclusion-numerique#femmes-digital' },
        { title: 'Numérique et Emploi', link: '/inclusion-numerique#numerique-emploi' },
        { title: 'Numérique Alpha/FLE', link: '/inclusion-numerique#numerique-alpha-fle' },
      ],
      image: {
        src: '/assets/hero/devoirs.jpg',
        alt: 'À propos de nous',
      },
    },
  },
  {
    title: 'Titres Services',
    link: '/titres-service',
  },
  {
    title: 'Ecole de devoirs',
    link: '/ecole-devoirs',
    submenu: {
      links: [
        { title: 'Petit histoire', link: '/ecole-devoirs#petite-histoire' },
        { title: 'Projet pédagogique', link: '/ecole-devoirs#projet-pedagogique' },
        { title: 'Activités et programmes', link: '/ecole-devoirs#activite-programmes' },
        { title: 'Café Parents', link: '/ecole-devoirs#cafe-parents' },
        { title: 'Partenaires', link: '/ecole-devoirs#partenaires' },
      ],
      image: {
        src: '/assets/hero/devoirs.jpg',
        alt: 'À propos de nous',
      },
    },
  },
]
