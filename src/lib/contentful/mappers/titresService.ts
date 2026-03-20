import type { TitresServiceModuleEntry } from '../types'
import type { TitreServiceCatalogueModule } from '@/lib/data/titres-services/titresServices'

export function mapTitresServiceEntryToCatalogueModule(entry: TitresServiceModuleEntry): TitreServiceCatalogueModule {
  return {
    slug: entry.slug,
    titre: entry.titre,
    titreCourt: entry.titreCourt,
    description: entry.description,
    descriptionCourte: entry.descriptionCourte,
    objectifsIntro: entry.objectifsIntro,
    objectifs: entry.objectifs,
    modalitesPédagogie: entry.modalitesPedagogie,
    evaluationSuivi: entry.evaluationSuivi,
    supportsLogistiques: entry.supportsLogistiques,
    publicVise: entry.publicVise,
    approbation: entry.approbation.map((a) => ({
      region: a.region,
      certificate: a.certificate,
      date: a.date ?? '',
    })),
    duree: entry.duree,
    category: entry.category,
    imageSrc: entry.image?.url ?? '/assets/services/perfectionnement/office.jpg',
    imageAlt: entry.image?.description ?? entry.titre,
    isPlaceholder: entry.isPlaceholder,
  }
}

