import type { EntryProps } from 'contentful-management'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage, upsertSectionBlock } from './_pageBuilder'
import { quiSommesNousPlaceholderContent } from '../../src/lib/content/quiSommesNousPlaceholder'
import { aboutPageMedia } from '../../src/lib/content/aboutPageMedia'
import {
  eddPageContent,
  epnPageContent,
  esdPageContent,
  titresServicesPageContent,
  quiSommesNousPageContent,
} from '../../src/lib/about-content'

export async function migrateAboutPages() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const pages: Array<{
    slug: string
    title: string
    heroSubtitle?: string
    heroDescription?: string
    heroImagePath?: string
    heroImageAlt?: string
    data: unknown
  }> = [
    {
      slug: 'a-propos',
      title: quiSommesNousPlaceholderContent.hero.title,
      heroDescription: quiSommesNousPlaceholderContent.hero.description,
      data: quiSommesNousPlaceholderContent,
    },
    {
      slug: 'a-propos/qui-sommes-nous',
      title: quiSommesNousPageContent.hero.title,
      heroDescription: quiSommesNousPageContent.hero.description,
      heroImagePath: aboutPageMedia.quiSommesNous.heroImage.src,
      heroImageAlt: aboutPageMedia.quiSommesNous.heroImage.alt,
      data: quiSommesNousPageContent,
    },
    {
      slug: 'a-propos/ecole-de-devoirs',
      title: eddPageContent.hero.title,
      heroSubtitle: eddPageContent.hero.subtitle,
      heroDescription: eddPageContent.hero.description,
      heroImagePath: '/assets/operateur/ecole-de-devoirs.png',
      heroImageAlt: 'École de Devoirs',
      data: eddPageContent,
    },
    {
      slug: 'a-propos/economie-sociale',
      title: esdPageContent.hero.title,
      heroSubtitle: esdPageContent.hero.subtitle,
      heroDescription: esdPageContent.hero.description,
      heroImagePath: '/assets/operateur/economie-sociale.png',
      heroImageAlt: 'Économie Sociale',
      data: esdPageContent,
    },
    {
      slug: 'a-propos/epn',
      title: epnPageContent.hero.title,
      heroSubtitle: epnPageContent.hero.subtitle,
      heroDescription: epnPageContent.hero.description,
      heroImagePath: '/assets/operateur/epnm.png',
      heroImageAlt: 'EPN Mobile',
      data: epnPageContent,
    },
    {
      slug: 'a-propos/formation-titres-services',
      title: titresServicesPageContent.hero.title,
      heroSubtitle: titresServicesPageContent.hero.subtitle,
      heroDescription: titresServicesPageContent.hero.description,
      heroImagePath: '/assets/operateur/formation-titres-services.png',
      heroImageAlt: 'Formation Titres-Services',
      data: titresServicesPageContent,
    },
  ]

  for (const p of pages) {
    const blocks: EntryProps[] = []
    blocks.push(
      await upsertSectionBlock({
        cma,
        locale,
        internalName: `${p.slug}_jsonDump`,
        title: 'Contenu',
        body: JSON.stringify(p.data, null, 2),
      }),
    )

    await upsertPage({
      cma,
      locale,
      slug: p.slug,
      title: p.title,
      heroSubtitle: p.heroSubtitle,
      heroDescription: p.heroDescription,
      heroImagePath: p.heroImagePath,
      heroImageAlt: p.heroImageAlt,
      sectionBlocks: blocks,
    })
  }
}

