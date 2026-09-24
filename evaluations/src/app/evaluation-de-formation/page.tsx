import type { Metadata } from 'next'
import Link from 'next/link'
import { courseEvalForms } from '@/lib/evaluations'
import { EvaluationFormList } from '../EvaluationFormList'

export const metadata: Metadata = {
  title: 'Évaluation de formation',
  description: 'Donnez votre avis sur un module de formation d’Espace Forma.',
  robots: { index: false, follow: false },
}

export default function CourseEvalListPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <p className="mb-5">
        <Link href="/" className="text-sm font-medium text-azure-700 hover:underline">
          ← Toutes les évaluations
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-text md:text-3xl">Évaluation de formation</h1>
      <p className="mt-2 text-muted">
        Un formulaire unique pour tous les modules Titres Services. Indiquez la formation suivie, puis envoyez vos
        réponses.
      </p>
      <EvaluationFormList forms={courseEvalForms} />
    </div>
  )
}
