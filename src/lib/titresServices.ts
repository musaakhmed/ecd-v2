export type TitreServiceModules = {
  slug: string
  titre: string
  description: string
  publicVise: string
  approbation: {
    region: string
    certificate: string
    date: string
  }[]
  duree: string
}

export const modules: TitreServiceModules[] = [
  {
    slug: 'module-1',
    titre: 'Module 1',
    description:
      'Ce module vise à renforcer les compétences de communication interpersonnelle des aides-ménagères, tant dans la relation avec les clients que dans les échanges avec les collègues ou la hiérarchie.\n' +
      'La formation s’appuie sur des situations concrètes issues du quotidien professionnel : demandes difficiles ou contradictoires, incompréhensions, critiques de clients, gestion des limites ou malaise dans la relation.',
    publicVise: 'publicVise',
    approbation: [
      {
        region: 'Bruxelles',
        certificate: 'E1698/B',
        date: '26/12/2025',
      },
      {
        region: 'Wallonie',
        certificate: 'E19229',
        date: '12/12/2024',
      },
    ],
    duree: '4 heures',
  },
  {
    slug: 'module-2',
    titre: 'Module 2',
    description:
      '\n' +
      'L’approche est simple, visuelle, interactive et accessible, adaptée à un public peu qualifié et parfois peu à l’aise avec l’expression orale. Les activités permettent de pratiquer immédiatement les outils de communication dans un cadre sécurisant et bienveillant.',
    publicVise: 'publicVise',
    approbation: [
      {
        region: 'Bruxelles',
        certificate: 'E838167',
        date: '12/09/2025',
      },
    ],
    duree: '8 heures',
  },
  {
    slug: 'module-3',
    titre: 'Module 3',
    description: 'bonjour',
    publicVise: 'publicVise',
    approbation: [
      {
        region: 'publicVise',
        certificate: 'certificate',
        date: 'date',
      },
      {
        region: 'publicVise',
        certificate: 'certificate',
        date: 'date',
      },
    ],
    duree: '4 heures',
  },
]
