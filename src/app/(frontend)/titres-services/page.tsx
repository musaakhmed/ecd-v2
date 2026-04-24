import { catalogueModules } from '@/lib/titresServices'
import { HeroSection } from '@/components/ui/HeroSection'
import { titresServiceCatalogueHero } from '@/lib/content/pages/titresServicePageData'
import { hasContentfulEnv } from '@/lib/contentful/env'
import { listTitresServiceModules } from '@/lib/contentful/queries/titresServiceModule'
import { TitresServiceCatalogueClient } from './TitresServiceCatalogueClient'

const modalitiesParticipation = [
  {
    step: '01',
    title: 'Prise de contact avec l’entreprise',
    description:
      'L’entreprise agréée Titres-Services prend contact avec notre équipe afin d’organiser une formation destinée à ses travailleurs, par e-mail ou par téléphone. Un rendez-vous est ensuite fixé afin d’échanger sur vos besoins et les modalités d’organisation.',
  },
  {
    step: '02',
    title: 'Analyse des besoins',
    description:
      'En fonction de votre demande, nous analysons les besoins spécifiques de l’entreprise afin de proposer un programme de formation adapté au contexte professionnel et au niveau des participants. Notre catalogue de formations est également mis à votre disposition pour vous aider dans le choix des modules.',
  },
  {
    step: '03',
    title: 'Planification des sessions',
    description:
      'Les sessions de formation sont planifiées en concertation avec l’entreprise, en tenant compte des disponibilités des travailleurs et des contraintes organisationnelles. Les formations peuvent être organisées directement dans votre entreprise ou dans nos locaux à Bruxelles.',
  },
  {
    step: '04',
    title: 'Mise en œuvre de la formation',
    description:
      'Nos formateurs interviennent directement au sein de l’entreprise pour dispenser les formations et accompagner les travailleurs dans le développement de leurs compétences professionnelles. À l’issue des formations, nous transmettons à l’entreprise les évaluations des participants ainsi que nos recommandations pédagogiques.',
  },
  {
    step: '05',
    title: 'Démarches de remboursement',
    description:
      'Pour les entreprises souhaitant introduire des demandes de remboursement, notre équipe peut vous accompagner tout au long de la procédure auprès des fonds de formation de Bruxelles, de la Wallonie et du Form TS.',
  },
  {
    step: '06',
    title: 'Subventions de formation',
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

      {/* Modalités de partenariat (parallax background) */}
      <section className="relative isolate py-12 md:py-24 overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0 z-0 bg-scroll md:bg-fixed bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/operateur/formation-titres-services.jpg')",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-linear-to-b from-white/95 via-primary-50/85 to-white/95 " />
        <div className="relative z-10 container mx-auto px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-12 text-center drop-shadow-md drop-shadow-primary-150">
              Modalités de partenariat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: 'Format',
                  description:
                    'Formations en inter-entreprise ou au sein de votre structure. Une salle de formation équipée à Bruxelles est mise à votre disposition.',
                },
                {
                  title: 'Financement',
                  description:
                    'Bénéficiez du remboursement des frais de formation via le Fonds de Formation de Bruxelles, Forem Formation ou FORM TS.',
                },
                {
                  title: 'Participants',
                  description:
                    "L'effectif par session est de 6-12 participants. Le suivi de présence des participants est assuré par les partenaires.",
                },
                {
                  title: 'Tarifs',
                  description:
                    'Les tarifs sont proposés par participant ou par groupe, avec un forfait de déplacement inclus.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-600 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-600/40 to-transparent rounded-full -mr-12 -mt-12" />
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                      {card.title}
                    </h3>
                    <p className="text-primary-100 leading-relaxed text-sm md:text-base break-words">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <TitresServiceCatalogueClient modules={modules} />

      {/* How it Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Modalités de Participation
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
