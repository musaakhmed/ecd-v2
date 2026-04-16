import type { EntryProps } from 'contentful-management'
import { contactPageContent } from '../../src/lib/content/contactPage'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage, upsertSectionBlock } from './_pageBuilder'

export async function migrateContactPage() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const slug = 'contact'
  const blocks: EntryProps[] = []
  blocks.push(
    await upsertSectionBlock({
      cma,
      locale,
      internalName: `${slug}_jsonDump`,
      title: 'Contenu',
      body: JSON.stringify(contactPageContent, null, 2),
    }),
  )

  await upsertPage({
    cma,
    locale,
    slug,
    title: contactPageContent.hero.title,
    heroDescription: contactPageContent.hero.description,
    sectionBlocks: blocks,
  })
}

