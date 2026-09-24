import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { courseEvalForms, quizForms } from '@/lib/evaluations'

export const metadata: Metadata = {
  title: 'Évaluations',
  description: 'Quiz informatiques et évaluations de formation d’Espace Forma.',
  robots: { index: false, follow: false },
}

const categories = [
  {
    href: '/quizz-informatiques',
    title: 'Quizz informatiques',
    description: 'Quiz des niveaux 1A, 1B et 2 pour vérifier les acquis en informatique.',
    countLabel: `${quizForms.length} quizz`,
    heroImage: quizForms[0]?.heroImage ?? '/assets/services/perfectionnement/office.jpg',
  },
  {
    href: '/evaluation-de-formation',
    title: 'Évaluation de formation',
    description: 'Donnez votre avis sur une formation, y compris les modules Titres Services.',
    countLabel: courseEvalForms.length > 1 ? `${courseEvalForms.length} formulaires` : '1 formulaire',
    heroImage: courseEvalForms[0]?.heroImage ?? '/assets/TS/courses/numerique/identite-numerique.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-2xl font-bold text-text md:text-3xl">Évaluations</h1>
      <p className="mt-2 text-muted">
        Choisissez une catégorie. Aucun compte n’est demandé : indiquez simplement votre nom, puis envoyez vos
        réponses.
      </p>

      <ul className="mt-8 space-y-4">
        {categories.map((category) => (
          <li key={category.href}>
            <Link
              href={category.href}
              className="group flex overflow-hidden rounded-2xl border border-azure-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative hidden w-36 shrink-0 sm:block">
                <Image src={category.heroImage} alt="" fill className="object-cover" sizes="144px" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-azure-700">
                  {category.countLabel}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-text">{category.title}</h2>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
                <span className="mt-3 font-medium text-azure-700">Voir les formulaires →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
