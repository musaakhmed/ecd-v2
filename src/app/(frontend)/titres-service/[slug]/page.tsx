import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCatalogueModuleBySlug, getCatalogueSlugs } from '@/lib/titresServices'
import { TitresServiceModuleClient } from './TitresServiceModuleClient'
import { hasContentfulEnv } from '@/lib/contentful/env'
import {
  getTitresServiceModuleBySlug,
  listTitresServiceModuleSlugs,
} from '@/lib/contentful/queries/titresServiceModule'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateStaticParams() {
  if (hasContentfulEnv()) {
    const slugs = await listTitresServiceModuleSlugs()
    return slugs.map((slug) => ({ slug }))
  }

  return getCatalogueSlugs().map((slug) => ({ slug }))
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const cmsModule = hasContentfulEnv() ? await getTitresServiceModuleBySlug(slug) : null
  const localModule = cmsModule ? null : getCatalogueModuleBySlug(slug)

  const module_ = cmsModule
    ? {
        slug: cmsModule.slug,
        titre: cmsModule.titre,
        category: cmsModule.category,
        publicVise: cmsModule.publicVise,
        duree: cmsModule.duree,
        approbation: cmsModule.approbation,
        imageSrc: cmsModule.image?.url ?? '/assets/services/perfectionnement/office.jpg',
        imageAlt: cmsModule.image?.title ?? cmsModule.titre,
        // View-model fields for the client component
        description: cmsModule.description,
        objectifsIntro: cmsModule.objectifsIntro ?? null,
        objectifs: cmsModule.objectifs ?? [],
        modalitesPedagogie: cmsModule.modalitesPedagogie,
        evaluationSuivi: cmsModule.evaluationSuivi,
        supportsLogistiques: cmsModule.supportsLogistiques,
        isPlaceholder: cmsModule.isPlaceholder ?? null,
      }
    : localModule
      ? {
          slug: localModule.slug,
          titre: localModule.titre,
          category: localModule.category,
          publicVise: localModule.publicVise,
          duree: localModule.duree,
          approbation: localModule.approbation,
          imageSrc: localModule.imageSrc,
          imageAlt: localModule.imageAlt,
          description: localModule.description,
          objectifsIntro: localModule.objectifsIntro ?? null,
          objectifs: localModule.objectifs ?? [],
          modalitesPedagogie: localModule.modalitesPédagogie,
          evaluationSuivi: localModule.evaluationSuivi,
          supportsLogistiques: localModule.supportsLogistiques,
          isPlaceholder: localModule.isPlaceholder ?? null,
        }
      : null

  if (!module_) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative bg-linear-to-r from-primary-600 to-secondary-600 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Image
          src={module_.imageSrc}
          alt={module_.imageAlt}
          fill
          priority
          className="object-cover mix-blend-overlay opacity-20"
          sizes="100vw"
        />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-4 text-sm text-white/80" aria-label="Fil d'Ariane">
            <Link href="/titres-service" className="hover:text-white underline">
              Titres Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{module_.titre}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl">{module_.titre}</h1>
          <p className="mt-2 text-base md:text-lg text-white/95 max-w-2xl text-justify [text-align-last:start]">
            {module_.category === 'outils-numeriques'
              ? 'Outils numériques'
              : module_.category === 'techniques-prevention'
                ? 'Techniques et prévention'
                : 'Bien-être et savoir faire'}
          </p>
        </div>
      </section>

      {/* Main + Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <TitresServiceModuleClient
                module_={{
                  description: module_.description,
                  objectifsIntro: module_.objectifsIntro,
                  objectifs: module_.objectifs,
                  modalitesPedagogie: module_.modalitesPedagogie,
                  evaluationSuivi: module_.evaluationSuivi,
                  supportsLogistiques: module_.supportsLogistiques,
                  isPlaceholder: module_.isPlaceholder,
                }}
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-primary-200 bg-white shadow-lg p-6">
                <h2 className="text-4xl! font-semibold text-primary-900 mb-4">Infos pratiques</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1 text-2xl!">Public visé</h3>
                    <p className="text-gray-600">{module_.publicVise}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1 text-2xl!">Durée</h3>
                    <p className="text-gray-600">{module_.duree}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2 text-2xl!">Approbations</h3>
                    <ul className="space-y-1 text-gray-600">
                      {module_.approbation.map((a) => (
                        <li key={`${a.region}-${a.certificate}`}>
                          <span className="font-medium">{a.region}</span> : {a.certificate} (
                          {a.date})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Demander une offre
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
