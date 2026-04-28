import { catalogueModules } from '@/lib/titresServices'
import { HeroSection } from '@/components/ui/HeroSection'
import { titresServiceCatalogueHero } from '@/lib/content/pages/titresServicePageData'
import { hasContentfulEnv } from '@/lib/contentful/env'
import { listTitresServiceModules } from '@/lib/contentful/queries/titresServiceModule'
import { TitresServiceCatalogueClient } from './TitresServiceCatalogueClient'
import { ScrollToSectionButton } from './ScrollToSectionButton'

const modalitiesParticipation = [
  {
    step: '01',
    title: 'Format des cours',
    description:
      'Formations en inter-entreprise ou au sein de votre structure. Une salle de formation équipée à Bruxelles est mise à votre disposition.',
  },
  {
    step: '02',
    title: 'Financement',
    description:
      'Bénéficiez du remboursement des frais de formation via le Fonds de Formation de Bruxelles, Forem Formation ou FORM TS.',
  },
  {
    step: '03',
    title: 'Participants',
    description:
      "L'effectif par session est de 6-12 participants. Le suivi de présence des participants est assuré par les partenaires.",
  },
  {
    step: '04',
    title: 'Tarifs',
    description:
      'Les tarifs sont proposés par participant ou par groupe, avec un forfait de déplacement inclus.',
  },
  {
    step: '05',
    title: 'Remboursement',
    description:
      'Pour les entreprises souhaitant introduire des demandes de remboursement, notre équipe peut vous accompagner tout au long de la procédure auprès des fonds de formation de Bruxelles, de la Wallonie et du Form TS.',
  },
  {
    step: '06',
    title: 'Subventions',
    description:
      'Certains de nos modules sont repris dans le catalogue du Form TS, en formule « In Company » ou « Calendrier ouvert », selon les sessions proposées.',
  },
]

export const dynamic = 'force-dynamic'
export const revalidate = 0

const Page = async () => {
  const cmsModules = hasContentfulEnv() ? await listTitresServiceModules() : null

  const modules = (cmsModules ?? catalogueModules).map((m) => ({
    slug: m.slug,
    titre: m.titre,
    category: m.category,
    imageSrc:
      'imageSrc' in m
        ? m.imageSrc
        : (m.image?.url ?? '/assets/services/perfectionnement/office.jpg'),
    imageAlt: 'imageAlt' in m ? m.imageAlt : (m.image?.title ?? m.titre),
    isPlaceholder: m.isPlaceholder ?? null,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* Hero Section */}
      <HeroSection
        imageSrc={titresServiceCatalogueHero.backgroundImage}
        imageAlt="Titres Services"
        subtitle={titresServiceCatalogueHero.subtitle}
        title={titresServiceCatalogueHero.title}
        description={titresServiceCatalogueHero.description}
      >
        <div className="flex flex-wrap gap-4 items-center">
          {titresServiceCatalogueHero.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </HeroSection>

      {/* Modules Section */}
      <section id="titres-services-modules">
        <TitresServiceCatalogueClient modules={modules} />
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Modalités de partenariat
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {modalitiesParticipation.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 md:gap-6 items-start bg-primary-50 rounded-lg p-4 md:p-6 border border-primary-100 h-full min-w-0"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-base md:text-xl">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-primary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed break-words text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intéressé par nos Formations ?
            </h2>

            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Demander une Formation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
