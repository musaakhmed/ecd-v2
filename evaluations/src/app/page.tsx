import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { evaluationForms } from '@/lib/evaluations'

export const metadata: Metadata = {
  title: 'Évaluations',
  description: 'Quiz et évaluations de formation d’Espace Forma.',
  robots: { index: false, follow: false },
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-2xl font-bold text-text md:text-3xl">Évaluations</h1>
      <p className="mt-2 text-muted">
        Choisissez un formulaire. Aucun compte n’est demandé : indiquez simplement votre nom, puis envoyez vos
        réponses.
      </p>

      <ul className="mt-8 space-y-4">
        {evaluationForms.map((form) => (
          <li key={form.slug}>
            <Link
              href={`/${form.slug}`}
              className="group flex overflow-hidden rounded-2xl border border-azure-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative hidden w-36 shrink-0 sm:block">
                <Image src={form.heroImage} alt="" fill className="object-cover" sizes="144px" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-azure-700">
                  {form.badgeLabel}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-text">{form.title}</h2>
                <p className="mt-1 text-sm text-muted">{form.description}</p>
                <span className="mt-3 font-medium text-azure-700">Commencer →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
