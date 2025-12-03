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
        { title: 'Notre histoire', link: '/a-propos#histoire' },
        { title: 'Nos valeurs', link: '/a-propos#valeurs' },
        { title: 'Notre équipe', link: '/a-propos#equipe' },
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
  },
  {
    title: 'Titres Services',
    link: '/titres-service',
  },
  {
    title: 'Ecole de devoirs',
    link: '/ecole-devoirs',
  },
]
