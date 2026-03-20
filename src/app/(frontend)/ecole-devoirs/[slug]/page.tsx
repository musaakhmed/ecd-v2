import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { eddPageContent, eddSectionMeta, eddSections } from '@/lib/content/pages/ecole-devoirs-content'
import { EddSectionClient } from './EddSectionClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateStaticParams() {
  return eddSections.map((s) => ({ slug: s.slug }))
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const section = eddSections.find((s) => s.slug === slug)
  if (!section) notFound()

  const contentKeyBySlug = {
    'petite-histoire': 'petiteHistoire',
    'projet-pedagogique': 'projetPedagogique',
    'activites-et-programmes': 'activites',
    'cafe-parents': 'cafeParents',
    partenaires: 'partenaires',
    'public-cible': 'publicCible',
  } as const

  const meta = eddSectionMeta[slug]
  const contentKey = contentKeyBySlug[section.slug]
  const content = eddPageContent[contentKey]

  const heroImage = meta?.image ?? '/assets/hero/devoirs.jpg'
  const heroImageAlt = meta?.imageAlt ?? section.title

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50 dark:from-gray-950 dark:to-gray-900">
      {/* Hero – aligned with nos-services (Image + gradient + breadcrumb) */}
      <section className="relative h-[35vh] min-h-[220px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/85 via-primary-600/85 to-secondary-600/85" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 py-6">
          <nav className="mb-3 text-xs md:text-sm text-white/80" aria-label="Fil d'Ariane">
            <Link href="/ecole-devoirs" className="hover:text-white underline">
              École de Devoirs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{section.menuTitle}</span>
          </nav>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold max-w-4xl leading-tight">
            {section.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <EddSectionClient slug={slug} content={content} sectionImage={heroImage} sectionImageAlt={heroImageAlt} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
