import type { EvaluationForm } from './types'

export const formationEval: EvaluationForm = {
  slug: 'formation',
  title: 'Évaluation de formation',
  shortTitle: 'Évaluation de formation',
  description:
    'Donnez votre avis sur une formation : contenu, formateur et conditions.',
  kind: 'course-eval',
  badgeLabel: 'Évaluation de formation',
  heroImage: '/assets/services/perfectionnement/office.jpg',
  heroImageAlt: 'Évaluation de formation',
  questions: [
    {
      id: 'formation',
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
          id: 'pratique',
          prompt: 'Ce que j’ai appris, je peux l’utiliser dans la pratique.',
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
          prompt: 'Je recommande cette formation.',
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
