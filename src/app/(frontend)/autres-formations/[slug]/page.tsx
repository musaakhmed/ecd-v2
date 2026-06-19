import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCatalogueModuleBySlug, getCatalogueSlugs } from '@/lib/autresFormations'
import { AutresFormationModuleClient } from './AutresFormationModuleClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getCatalogueSlugs().map((slug) => ({ slug }))
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const module_ = getCatalogueModuleBySlug(slug)

  if (!module_) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      <section className="relative h-[35vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={module_.hero.imageSrc}
            alt={module_.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 via-teal-600/80 to-cyan-600/80" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 py-6">
          <div className="max-w-4xl">
            <nav className="mb-3 text-sm text-white/80" aria-label="Fil d'Ariane">
              <Link href="/autres-formations" className="hover:text-white underline">
                Autres formations
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{module_.hero.title}</span>
            </nav>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white/80 mb-1 md:mb-2">
              {module_.hero.eyebrow}
            </p>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-2 md:mb-3">
              {module_.hero.title}
            </h1>
            <p className="text-sm md:text-base text-white/90 leading-snug text-justify [text-align-last:start]">
              {module_.hero.description}
            </p>
          </div>
        </div>
      </section>

      <AutresFormationModuleClient module_={module_} />
    </div>
  )
}

export default Page
