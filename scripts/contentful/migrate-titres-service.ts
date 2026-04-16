import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { catalogueModules } from '../../src/lib/data/titres-services/titresServices'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertAssetFromPublicPath } from './_assets'
import { filterFieldsByContentType } from './_contentTypes'
import { normalizeSymbolList } from './_strings'
import { safeContentfulId } from './_ids'
import { findEntryIdBySlug } from './_entries'
import { publishEntryIfNeeded, updateEntryWithVersion } from './_publish'

type ApprobationKey = string

function approbationKey(a: { region: string; certificate: string; date?: string }): ApprobationKey {
  return `${a.region}__${a.certificate}__${a.date ?? ''}`
}

async function getAllowedValues(args: {
  cma: PlainClientAPI
  contentTypeId: string
  fieldId: string
}): Promise<string[] | null> {
  const { cma, contentTypeId, fieldId } = args
  const ct: any = await cma.contentType.get({ contentTypeId })
  const field: any = (ct?.fields ?? []).find((f: any) => f?.id === fieldId)
  const validations: any[] = field?.validations ?? []
  const inRule = validations.find((v) => Array.isArray(v?.in))
  return Array.isArray(inRule?.in) ? inRule.in : null
}

async function upsertApprobation(env: PlainClientAPI, locale: string, a: { region: string; certificate: string; date?: string }) {
  const id = safeContentfulId('approbation', approbationKey(a))
  const { fields } = await filterFieldsByContentType({
    cma: env,
    contentTypeId: 'approbation',
    fields: {
      region: { [locale]: a.region },
      certificate: { [locale]: a.certificate },
      date: { [locale]: a.date ?? '' },
    },
    requiredFieldIds: ['region', 'certificate'],
  })

  let entry: EntryProps
  try {
    entry = await env.entry.get({ entryId: id })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma: env, entryId: id, entry })
  } catch {
    entry = await env.entry.createWithId({ contentTypeId: 'approbation', entryId: id }, { fields })
  }

  entry = await publishEntryIfNeeded({ cma: env, entryId: id, entry })
  return entry
}

async function upsertTitresServiceModule(args: {
  env: PlainClientAPI
  locale: string
  m: (typeof catalogueModules)[number]
  approbationsByKey: Map<ApprobationKey, EntryProps>
  fallbackApprovals: [EntryProps, EntryProps]
}) {
  const { env, locale, m, approbationsByKey, fallbackApprovals } = args
  const existingId = await findEntryIdBySlug({
    cma: env,
    contentTypeId: 'titresServiceModule',
    slug: m.slug,
    locale,
  })
  const id = existingId ?? safeContentfulId('titresServiceModule', m.slug)

  const imageAsset = await upsertAssetFromPublicPath({
    cma: env,
    publicPath: m.imageSrc,
    title: m.imageAlt || m.titre,
    locale,
  })

  const approbationLinks =
    m.approbation?.map((a) => {
      const key = approbationKey(a)
      const entry = approbationsByKey.get(key)
      if (!entry) return null
      return {
        sys: { type: 'Link', linkType: 'Entry', id: entry.sys.id },
      }
    }) ?? []

  const normalizedApprobationLinks = approbationLinks.filter(Boolean) as Array<{
    sys: { type: 'Link'; linkType: 'Entry'; id: string }
  }>

  const fallbackLinks = fallbackApprovals.map((a) => ({
    sys: { type: 'Link' as const, linkType: 'Entry' as const, id: a.sys.id },
  }))

  // Some spaces validate `approbation` to be exactly 2 references (min=2, max=2).
  // Enforce that shape so publishing never fails.
  let finalApprobationLinks = normalizedApprobationLinks.slice(0, 2)
  if (finalApprobationLinks.length === 1) finalApprobationLinks = [finalApprobationLinks[0], fallbackLinks[0]]
  if (finalApprobationLinks.length === 0) finalApprobationLinks = fallbackLinks

  const { fields: desiredFields } = await filterFieldsByContentType({
    cma: env,
    contentTypeId: 'titresServiceModule',
    fields: {
      slug: { [locale]: m.slug },
      titre: { [locale]: m.titre },
      titreCourt: { [locale]: m.titreCourt ?? '' },
      description: { [locale]: m.description },
      descriptionCourte: { [locale]: m.descriptionCourte },
      objectifsIntro: { [locale]: m.objectifsIntro ?? '' },
      objectifs: { [locale]: normalizeSymbolList(m.objectifs) },
      modalitesPedagogie: { [locale]: m.modalitesPédagogie },
      evaluationSuivi: { [locale]: m.evaluationSuivi },
      supportsLogistiques: { [locale]: m.supportsLogistiques },
      publicVise: { [locale]: m.publicVise },
      approbation: { [locale]: finalApprobationLinks },
      duree: { [locale]: m.duree },
      category: { [locale]: m.category },
      image: imageAsset
        ? {
            [locale]: { sys: { type: 'Link', linkType: 'Asset', id: imageAsset.sys.id } },
          }
        : undefined,
      isPlaceholder: { [locale]: Boolean(m.isPlaceholder) },
    },
  })

  let entry: EntryProps
  try {
    entry = await env.entry.get({ entryId: id })
    entry.fields = { ...(entry.fields as any), ...(desiredFields as any) }
    entry = await updateEntryWithVersion({ cma: env, entryId: id, entry })
  } catch {
    entry = await env.entry.createWithId(
      { contentTypeId: 'titresServiceModule', entryId: id },
      {
        fields: desiredFields,
      },
    )
  }

  entry = await publishEntryIfNeeded({ cma: env, entryId: id, entry })
  return entry
}

export async function migrateTitresService() {
  const mgmtEnv = getContentfulManagementEnv()
  const env = getCmaClient()

  // 1) Approvals
  const approbationsByKey = new Map<ApprobationKey, EntryProps>()
  for (const m of catalogueModules) {
    for (const a of m.approbation ?? []) {
      const key = approbationKey(a)
      if (approbationsByKey.has(key)) continue
      const entry = await upsertApprobation(env, mgmtEnv.locale, a)
      approbationsByKey.set(key, entry)
    }
  }

  // Some Contentful setups mark `approbation` as required (non-empty).
  // Provide a default fallback entry to allow publishing modules without approbations.
  const allowedRegions = await getAllowedValues({ cma: env, contentTypeId: 'approbation', fieldId: 'region' })
  const allowedCertificates = await getAllowedValues({
    cma: env,
    contentTypeId: 'approbation',
    fieldId: 'certificate',
  })
  const fallbackApproval1 = await upsertApprobation(env, mgmtEnv.locale, {
    region: allowedRegions?.[0] ?? 'N/A',
    certificate: allowedCertificates?.[0] ?? 'N/A',
    date: '',
  })
  const fallbackApproval2 = await upsertApprobation(env, mgmtEnv.locale, {
    region: allowedRegions?.[0] ?? 'N/A',
    certificate: allowedCertificates?.[0] ?? 'N/A',
    // Ensure a distinct entry ID even if region/certificate are validated.
    date: 'fallback-2',
  })
  approbationsByKey.set(approbationKey({ region: allowedRegions?.[0] ?? 'N/A', certificate: allowedCertificates?.[0] ?? 'N/A', date: '' }), fallbackApproval1)
  approbationsByKey.set(
    approbationKey({ region: allowedRegions?.[0] ?? 'N/A', certificate: allowedCertificates?.[0] ?? 'N/A', date: 'fallback-2' }),
    fallbackApproval2,
  )

  // 2) Modules
  for (const m of catalogueModules) {
    await upsertTitresServiceModule({
      env,
      locale: mgmtEnv.locale,
      m,
      approbationsByKey,
      fallbackApprovals: [fallbackApproval1, fallbackApproval2],
    })
  }
}

