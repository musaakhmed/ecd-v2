import type { Metadata } from 'next'
import Link from 'next/link'
import { quizForms } from '@/lib/evaluations'
import { EvaluationFormList } from '../EvaluationFormList'

export const metadata: Metadata = {
  title: 'Quizz informatiques',
  description: 'Quiz des niveaux 1A, 1B et 2 pour vérifier les acquis en informatique.',
  robots: { index: false, follow: false },
}

export default function QuizListPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <p className="mb-5">
        <Link href="/" className="text-sm font-medium text-azure-700 hover:underline">
          ← Toutes les évaluations
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-text md:text-3xl">Quizz informatiques</h1>
      <p className="mt-2 text-muted">
        Choisissez un quiz. Aucun compte n’est demandé : indiquez simplement votre nom, puis envoyez vos réponses.
      </p>
      <EvaluationFormList forms={quizForms} />
    </div>
  )
}
