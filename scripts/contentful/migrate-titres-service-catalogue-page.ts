import type { EntryProps } from 'contentful-management'
import {
  titresServiceCatalogueHero,
  titresServiceCatalogueGroups,
  titresServiceCatalogueSections,
  titresServiceParticipationSteps,
  titresServicePartnershipCards,
  titresServiceCatalogueCta,
} from '../../src/lib/content/pages/titresServicePageData'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage, upsertSectionBlock } from './_pageBuilder'

export async function migrateTitresServiceCataloguePage() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const slug = 'titres-service'
  const data = {
    hero: titresServiceCatalogueHero,
    groups: titresServiceCatalogueGroups,
    sections: titresServiceCatalogueSections,
    partnershipCards: titresServicePartnershipCards,
    participationSteps: titresServiceParticipationSteps,
    cta: titresServiceCatalogueCta,
  }

  const blocks: EntryProps[] = []
  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: `${slug}_jsonDump`,
      title: 'Contenu',
      body: JSON.stringify(data, null, 2),
    }),
  )

  await upsertPage({
    cma,
    locale,
    slug,
    title: titresServiceCatalogueHero.title,
    heroSubtitle: titresServiceCatalogueHero.subtitle,
    heroDescription: titresServiceCatalogueHero.description,
    heroImagePath: titresServiceCatalogueHero.backgroundImage,
    heroImageAlt: titresServiceCatalogueHero.title,
    sectionBlocks: blocks,
  })
}

