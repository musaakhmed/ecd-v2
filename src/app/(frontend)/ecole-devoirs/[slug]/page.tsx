import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  eddPageContent,
  eddSections,
} from '@/lib/ecole-devoirs-content'
import { EddSectionClient, type SectionContent } from './EddSectionClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

const slugToContentKey = {
  'petite-histoire': 'petiteHistoire',
  'projet-pedagogique': 'projetPedagogique',
  'activites-et-programmes': 'activites',
  'cafe-parents': 'cafeParents',
  partenaires: 'partenaires',
  'public-cible': 'publicCible',
} as const

type ContentKey = (typeof slugToContentKey)[keyof typeof slugToContentKey]

export function generateStaticParams() {
  return eddSections.map((s) => ({ slug: s.slug }))
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const section = eddSections.find((s) => s.slug === slug)
  if (!section) notFound()

  const contentKey = slugToContentKey[slug as keyof typeof slugToContentKey]
  if (!contentKey) notFound()

  const content = eddPageContent[contentKey] as SectionContent
  if (!content) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative h-[28vh] min-h-[200px] flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: "url('/assets/hero/devoirs.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-3 text-sm text-white/80" aria-label="Fil d'Ariane">
            <Link href="/ecole-devoirs" className="hover:text-white underline">
              École de Devoirs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{section.menuTitle}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold max-w-4xl">
            {section.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <EddSectionClient slug={slug} content={content} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
