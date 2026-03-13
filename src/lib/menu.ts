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
    link: '/#about',
    submenu: {
      links: [
        { title: 'Qui sommes-nous?', link: '/a-propos/qui-sommes-nous' },
        { title: 'Opérateur en École de Devoirs', link: '/a-propos/ecole-de-devoirs' },
        { title: "Opérateur d'Economie Sociale", link: '/a-propos/economie-sociale' },
        { title: "Opérateur d'EPN labelisé", link: '/a-propos/epn' },
        {
          title: 'Opérateur de formation de Titres Services',
          link: '/a-propos/formation-titres-services',
        },
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
    submenu: {
      links: [
        {
          title: 'Formations en Titres Services',
          link: '/nos-services/formations-titres-services',
        },
        { title: 'Initiation en informatique', link: '/nos-services/initiation-informatique' },
        {
          title: 'Maintenance & Dépannage Informatiques',
          link: '/nos-services/maintenance-depannage-informatiques',
        },
        {
          title: 'Perfectionnement en informatique',
          link: '/nos-services/perfectionnement-informatique',
        },
      ],
      image: {
        src: '/assets/hero/devoirs.jpg',
        alt: 'Nos services',
      },
    },
  },
  {
    title: 'Inclusion numérique',
    link: '/inclusion-numerique',
    submenu: {
      links: [
        { title: 'Jeunes connectés', link: '/inclusion-numerique/jeunes-connectes' },
        { title: 'Alpha, FLE et Numérique ', link: '/inclusion-numerique/alpha-fle-numerique' },
        { title: 'Emploi & Numérique', link: '/inclusion-numerique/emploi-numerique' },
        { title: 'Seniors & le digital', link: '/inclusion-numerique/seniors-digital' },
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
    
  },
]
