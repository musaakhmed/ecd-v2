import type { EvaluationForm } from './types'

export const titresServicesCourseGroups: NonNullable<EvaluationForm['courseGroups']> = [
  {
    label: 'Outils numériques',
    options: [
      'Identité numérique et démarches administratives',
      'Messageries électroniques',
      'Internet, navigation et recherches en ligne',
      'Découverte de ChatGPT',
    ],
  },
  {
    label: 'Techniques et prévention',
    options: [
      'Techniques de nettoyage et sécurité',
      'Ergonomie et prévention des TMS',
      'Produits chimiques et sécurité',
      'Sécurité sur le lieu de travail - Prévention et protection',
      'Techniques de repassage professionnel',
    ],
  },
  {
    label: 'Bien-être et savoir-faire',
    options: [
      'Communication professionnelle',
      'Motivation et gestion de stress',
      'Organisation du travail',
      'Assertivité professionnelle',
      'Déontologie professionnelle',
    ],
  },
]

export const titresServicesEval: EvaluationForm = {
  slug: 'titres-services',
  title: 'Évaluation de formation — Titres Services',
  shortTitle: 'Évaluation TS',
  description:
    'Formulaire unique pour tous les modules Titres Services. Choisissez la formation suivie, puis donnez votre avis sur le contenu, le formateur et les conditions.',
  kind: 'course-eval',
  badgeLabel: 'Évaluation de formation',
  heroImage: '/assets/services/perfectionnement/office.jpg',
  heroImageAlt: 'Formations Titres Services',
  courseGroups: titresServicesCourseGroups,
  questions: [
    {
      id: 'module',
      type: 'likert-group',
      prompt: 'Votre formation',
      scale: ['Aucun avis', 'Pas satisfait', 'Satisfait', 'Très satisfait'],
      items: [
        {
          id: 'attentes',
          prompt: 'Le contenu de la formation correspond à mes attentes personnelles.',
        },
        {
          id: 'objectif-formateur',
          prompt: 'Le contenu de la formation correspond à l’objectif formulé par le formateur.',
        },
        {
          id: 'lien-metier',
          prompt: 'Le contenu de la formation est en lien avec ma fonction d’aide-ménager(e).',
        },
        {
          id: 'interactif',
          prompt: 'La formation était interactive – il y avait un échange avec les autres participants.',
        },
        {
          id: 'theorie-pratique',
          prompt: 'La formation était bien équilibrée entre la théorie et la pratique.',
        },
        {
          id: 'materiel',
          prompt: 'Le matériel pédagogique (syllabus, matériel didactique) constituait une plus-value.',
        },
        {
          id: 'methodes',
          prompt:
            'Grâce à la diversité des méthodes d’apprentissage (exercices/exemples), je comprends mieux la théorie.',
        },
        {
          id: 'pratique-metier',
          prompt: 'Ce que j’ai appris, je peux l’utiliser dans la pratique de mon métier.',
        },
        {
          id: 'questions',
          prompt: 'Le formateur tenait compte de nos questions.',
        },
        {
          id: 'maitrise',
          prompt: 'Le formateur maîtrise la matière.',
        },
        {
          id: 'salle',
          prompt: 'La salle était appropriée pour cette formation.',
        },
        {
          id: 'recommandation',
          prompt: 'Je recommande cette formation à mes collègues.',
        },
      ],
    },
    {
      id: 'remarques',
      type: 'textarea',
      prompt: 'Remarques',
      optional: true,
    },
  ],
}
