import 'dotenv/config'
import { getCmaClient } from './_client'

async function countByContentType(contentTypeId: string) {
  const cma = getCmaClient()
  const res = await cma.entry.getMany({
    query: {
      content_type: contentTypeId,
      limit: 1,
    } as any,
  })
  return (res as any)?.total ?? 0
}

async function main() {
  const contentTypes = [
    'titresServiceModule',
    'approbation',
    'eddSection',
    'legalPage',
    'legalSection',
    'siteSettings',
    'navigationMenu',
    'navigationItem',
    'navigationLink',
    'page',
    'sectionBlock',
  ]

  for (const ct of contentTypes) {
    // eslint-disable-next-line no-console
    console.log(`${ct}: ${await countByContentType(ct)}`)
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})

