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
  },
  {
    title: 'Inclusion numérique',
    link: '/inclusion-numerique',
    submenu: {
      links: [
        { title: 'Stages informatiques', link: '/inclusion-numerique/stages-informatiques' },
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
        { title: 'Petite histoire', link: '/ecole-devoirs#petite-histoire' },
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
