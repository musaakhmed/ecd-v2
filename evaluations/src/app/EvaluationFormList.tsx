import Link from 'next/link'
import Image from 'next/image'
import type { EvaluationForm } from '@/lib/evaluations'

export function EvaluationFormList({ forms }: { forms: EvaluationForm[] }) {
  return (
    <ul className="mt-8 space-y-4">
      {forms.map((form) => (
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
  )
}
