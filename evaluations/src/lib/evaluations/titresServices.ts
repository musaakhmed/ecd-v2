import type { EvaluationForm } from './types'

export const titresServicesEval: EvaluationForm = {
  slug: 'titres-services',
  title: 'Évaluation de formation — Identité numérique',
  shortTitle: 'Évaluation TS',
  description:
    'Donnez votre avis sur le module Identité numérique : contenu, formateur et conditions de formation.',
  kind: 'course-eval',
  badgeLabel: 'Évaluation de formation',
  heroImage: '/assets/TS/courses/numerique/identite-numerique.jpg',
  heroImageAlt: 'Module identité numérique',
  questions: [
    {
      id: 'module-identite-numerique',
      type: 'likert-group',
      prompt: 'Module identité numérique',
      scale: ['Pas satisfait', 'Satisfait', 'Très satisfait'],
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
  ],
}
