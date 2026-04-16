import type { EntryProps } from 'contentful-management'
import { formationsTitresServicesPageContent } from '../../src/lib/content/nosServices/formationsTitresServicesPage'
import { initiationInformatiquePageContent } from '../../src/lib/content/nosServices/initiationInformatiquePage'
import { maintenanceDepannageInformatiquePageContent } from '../../src/lib/content/nosServices/maintenanceDepannageInformatiquePage'
import { perfectionnementInformatiquePageContent } from '../../src/lib/content/nosServices/perfectionnementInformatiquePage'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertPage, upsertSectionBlock } from './_pageBuilder'

export async function migrateNosServicesPages() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const pages = [
    { slug: 'nos-services/formations-titres-services', data: formationsTitresServicesPageContent },
    { slug: 'nos-services/perfectionnement-informatique', data: perfectionnementInformatiquePageContent },
    { slug: 'nos-services/initiation-informatique', data: initiationInformatiquePageContent },
    { slug: 'nos-services/maintenance-depannage-informatiques', data: maintenanceDepannageInformatiquePageContent },
  ] as const

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
      title: (p.data as any)?.hero?.title ?? 'Nos services',
      heroEyebrow: (p.data as any)?.hero?.eyebrow,
      heroDescription: (p.data as any)?.hero?.description,
      heroImagePath: (p.data as any)?.hero?.imageSrc,
      heroImageAlt: (p.data as any)?.hero?.imageAlt,
      sectionBlocks: blocks,
    })
  }
}

