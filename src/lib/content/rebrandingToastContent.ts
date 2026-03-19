export const rebrandingToastContent = {
  modal: {
    title: 'Nouveau nom, même mission',
    oldName: 'Espace Culture et Développement ASBL',
    closeAriaLabel: 'Fermer',
    badgeLeft: 'Mise à jour',
    badgeRight: 'Rebranding',
    introPrefix:
      'Vous êtes au bon endroit. Nous changeons d’identité visuelle et de nom — auparavant',
  },
  panels: {
    changes: {
      title: 'Ce qui change',
      items: ['Le nom, le logo et le design du site.', 'Une navigation plus simple pour trouver nos services.'],
    },
    unchanged: {
      title: 'Ce qui ne change pas',
      items: ['Nos équipes, nos valeurs et nos activités.', "Les moyens de contact et l’accompagnement sur le terrain."],
    },
  },
  actions: {
    continueLabel: 'Continuer',
    learnMoreLabel: 'En savoir plus',
    learnMoreHref: '/a-propos/qui-sommes-nous',
  },
} as const

