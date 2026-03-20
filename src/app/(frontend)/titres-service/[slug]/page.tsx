import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCatalogueModuleBySlug, getCatalogueSlugs } from '@/lib/titresServices'
import { TitresServiceModuleClient } from './TitresServiceModuleClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
    <div className="min-h-screen bg-linear-to-b from-white to-primary-50">
      {/* Hero */}
      <section className="relative bg-linear-to-r from-primary-600 to-secondary-600 text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: "url('/assets/services/perfectionnement/office.jpg')" }}
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
              <TitresServiceModuleClient module_={module_} />
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-primary-200 bg-white shadow-lg p-6">
                <h2 className="text-4xl! font-semibold text-secondary-900 mb-4">Infos pratiques</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-secondary-800 mb-1">Public visé</h3>
                    <p className="text-gray-600">{module_.publicVise}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-800 mb-1">Durée</h3>
                    <p className="text-gray-600">{module_.duree}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-800 mb-2">Approbation(s)</h3>
                    <ul className="space-y-1 text-gray-600">
                      {module_.approbation.map((a) => (
                        <li key={`${a.region}-${a.certificate}`}>
                          <span className="font-medium">{a.region}</span> : {a.certificate}
                          {a.date ? ` (${a.date})` : ''}
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
