import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getEvaluationForm, getEvaluationSlugs } from '@/lib/evaluations'
import { EvaluationFormClient } from '../EvaluationFormClient'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getEvaluationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const form = getEvaluationForm(slug)
  if (!form) return { title: 'Évaluation' }
  return {
    title: form.title,
    description: form.description,
    robots: { index: false, follow: false },
  }
}

export default async function EvaluationFormPage({ params }: Props) {
  const { slug } = await params
  const form = getEvaluationForm(slug)
  if (!form) notFound()

  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-10">
      <p className="mb-5">
        <Link href="/" className="text-sm font-medium text-azure-700 hover:underline">
          ← Toutes les évaluations
        </Link>
      </p>
      <h1 className="text-2xl font-bold text-text md:text-3xl">{form.title}</h1>
      <p className="mt-2 text-muted">{form.description}</p>
      <div className="mt-8">
        <EvaluationFormClient form={form} />
      </div>
    </div>
  )
}
