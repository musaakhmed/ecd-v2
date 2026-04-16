import type { EntryProps } from 'contentful-management'
import { epnmTestPageContent } from '../../src/lib/content/epnmTestPage'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage, upsertSectionBlock } from './_pageBuilder'

export async function migrateEpnmTestPage() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const slug = 'inclusion-numerique/test'
  const blocks: EntryProps[] = []
  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: `${slug}_jsonDump`,
      title: 'Contenu',
      body: JSON.stringify(epnmTestPageContent, null, 2),
    }),
  )

  await upsertPage({
    cma,
    locale,
    slug,
    title: epnmTestPageContent.hero.title,
    heroDescription: epnmTestPageContent.hero.description,
    heroImagePath: epnmTestPageContent.hero.backgroundImage,
    heroImageAlt: epnmTestPageContent.hero.title,
    sectionBlocks: blocks,
  })
}

