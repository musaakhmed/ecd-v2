import { getContentfulGraphQLClient } from '../graphql'
import type { ContentfulAsset } from '../types'
import { normalizeContentfulAssetUrl } from '../types'

export type TitresServiceCategoryKey =
  | 'outils-numeriques'
  | 'techniques-prevention'
  | 'bien-etre-savoir-faire'

export type TitresServiceModuleApproval = {
  region: string
  certificate: string
  date: string | null
}

export type TitresServiceModule = {
  slug: string
  titre: string
  titreCourt?: string | null
  description: string
  descriptionCourte: string
  objectifsIntro?: string | null
  objectifs: string[]
  modalitesPedagogie: string
  evaluationSuivi: string
  supportsLogistiques: string
  publicVise: string
  approbation: TitresServiceModuleApproval[]
  duree: string
  category: TitresServiceCategoryKey
  image?: ContentfulAsset | null
  isPlaceholder?: boolean | null
}

type GqlAsset = {
  url: string
  title?: string | null
  description?: string | null
  contentType?: string | null
  width?: number | null
  height?: number | null
}

function mapAsset(asset: GqlAsset | null | undefined): ContentfulAsset | null {
  if (!asset?.url) return null
  return {
    ...asset,
    url: normalizeContentfulAssetUrl(asset.url),
  }
}

export async function listTitresServiceModuleSlugs(): Promise<string[]> {
  const client = getContentfulGraphQLClient()
  const data = await client.request<{
    titresServiceModuleCollection?: { items: Array<{ slug?: string | null } | null> } | null
  }>(
    /* GraphQL */ `
      query ListTitresServiceModuleSlugs {
        titresServiceModuleCollection(limit: 1000, where: { slug_exists: true }) {
          items {
            slug
          }
        }
      }
    `,
  )

  return (
    data.titresServiceModuleCollection?.items
      .map((i) => i?.slug)
      .filter((s): s is string => Boolean(s)) ?? []
  )
}

export async function listTitresServiceModules(): Promise<TitresServiceModule[]> {
  const client = getContentfulGraphQLClient()
  const data = await client.request<{
    titresServiceModuleCollection?: {
      items: Array<
        | {
            slug?: string | null
            titre?: string | null
            titreCourt?: string | null
            description?: string | null
            descriptionCourte?: string | null
            objectifsIntro?: string | null
            objectifs?: string[] | null
            modalitesPedagogie?: string | null
            evaluationSuivi?: string | null
            supportsLogistiques?: string | null
            publicVise?: string | null
            duree?: string | null
            category?: string | null
            isPlaceholder?: boolean | null
            image?: GqlAsset | null
            approbationCollection?: {
              items: Array<{ region?: string | null; certificate?: string | null; date?: string | null } | null>
            } | null
          }
        | null
      >
    } | null
  }>(
    /* GraphQL */ `
      query ListTitresServiceModules {
        titresServiceModuleCollection(limit: 1000, where: { slug_exists: true }) {
          items {
            slug
            titre
            titreCourt
            description
            descriptionCourte
            objectifsIntro
            objectifs
            modalitesPedagogie
            evaluationSuivi
            supportsLogistiques
            publicVise
            duree
            category
            isPlaceholder
            image {
              url
              title
              description
              contentType
              width
              height
            }
            approbationCollection(limit: 20) {
              items {
                region
                certificate
                date
              }
            }
          }
        }
      }
    `,
  )

  const items = data.titresServiceModuleCollection?.items ?? []

  return items
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i): i is NonNullable<typeof i> & { slug: string; titre: string } => Boolean(i.slug && i.titre))
    .map((item) => ({
      slug: item.slug,
      titre: item.titre,
      titreCourt: item.titreCourt ?? null,
      description: item.description ?? '',
      descriptionCourte: item.descriptionCourte ?? '',
      objectifsIntro: item.objectifsIntro ?? null,
      objectifs: item.objectifs ?? [],
      modalitesPedagogie: item.modalitesPedagogie ?? '',
      evaluationSuivi: item.evaluationSuivi ?? '',
      supportsLogistiques: item.supportsLogistiques ?? '',
      publicVise: item.publicVise ?? '',
      approbation:
        item.approbationCollection?.items
          ?.filter((a): a is NonNullable<typeof a> => Boolean(a))
          .map((a) => ({ region: a.region ?? '', certificate: a.certificate ?? '', date: a.date ?? null }))
          .filter((a): a is TitresServiceModuleApproval => Boolean(a.region && a.certificate)) ?? [],
      duree: item.duree ?? '',
      category: (item.category ?? 'outils-numeriques') as TitresServiceCategoryKey,
      image: mapAsset(item.image),
      isPlaceholder: item.isPlaceholder ?? null,
    }))
}

export async function getTitresServiceModuleBySlug(slug: string): Promise<TitresServiceModule | null> {
  const client = getContentfulGraphQLClient()

  const data = await client.request<{
    titresServiceModuleCollection?: {
      items: Array<
        | {
            slug?: string | null
            titre?: string | null
            titreCourt?: string | null
            description?: string | null
            descriptionCourte?: string | null
            objectifsIntro?: string | null
            objectifs?: string[] | null
            modalitesPedagogie?: string | null
            evaluationSuivi?: string | null
            supportsLogistiques?: string | null
            publicVise?: string | null
            duree?: string | null
            category?: string | null
            isPlaceholder?: boolean | null
            image?: GqlAsset | null
            approbationCollection?: {
              items: Array<{ region?: string | null; certificate?: string | null; date?: string | null } | null>
            } | null
          }
        | null
      >
    } | null
  }>(
    /* GraphQL */ `
      query GetTitresServiceModuleBySlug($slug: String!) {
        titresServiceModuleCollection(limit: 1, where: { slug: $slug }) {
          items {
            slug
            titre
            titreCourt
            description
            descriptionCourte
            objectifsIntro
            objectifs
            modalitesPedagogie
            evaluationSuivi
            supportsLogistiques
            publicVise
            duree
            category
            isPlaceholder
            image {
              url
              title
              description
              contentType
              width
              height
            }
            approbationCollection(limit: 20) {
              items {
                region
                certificate
                date
              }
            }
          }
        }
      }
    `,
    { slug },
  )

  const item = data.titresServiceModuleCollection?.items?.[0]
  if (!item?.slug || !item.titre) return null

  return {
    slug: item.slug,
    titre: item.titre,
    titreCourt: item.titreCourt ?? null,
    description: item.description ?? '',
    descriptionCourte: item.descriptionCourte ?? '',
    objectifsIntro: item.objectifsIntro ?? null,
    objectifs: item.objectifs ?? [],
    modalitesPedagogie: item.modalitesPedagogie ?? '',
    evaluationSuivi: item.evaluationSuivi ?? '',
    supportsLogistiques: item.supportsLogistiques ?? '',
    publicVise: item.publicVise ?? '',
    approbation:
      item.approbationCollection?.items
        ?.filter((a): a is NonNullable<typeof a> => Boolean(a))
        .map((a) => ({ region: a.region ?? '', certificate: a.certificate ?? '', date: a.date ?? null }))
        .filter((a): a is TitresServiceModuleApproval => Boolean(a.region && a.certificate)) ?? [],
    duree: item.duree ?? '',
    category: (item.category ?? 'outils-numeriques') as TitresServiceCategoryKey,
    image: mapAsset(item.image),
    isPlaceholder: item.isPlaceholder ?? null,
  }
}

