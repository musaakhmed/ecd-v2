import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { footerContent } from '../../src/lib/content/footerContent'
import { contactPageContent } from '../../src/lib/content/contactPage'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'
import { publishEntryIfNeeded, updateEntryWithVersion } from './_publish'

async function upsertSiteSettings(args: { cma: PlainClientAPI; locale: string }) {
  const { cma, locale } = args
  const entryId = 'siteSettings_default'

  const gdprAsset = await upsertAssetFromPublicPath({
    cma,
    publicPath: '/assets/gdpr.png',
    title: footerContent.gdpr.imageAlt,
    locale,
  })

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'siteSettings',
    fields: {
      internalName: { [locale]: 'default' },

      footerAboutTitle: { [locale]: footerContent.about.title },
      footerAboutDescription: { [locale]: footerContent.about.description },

      contactEmail: { [locale]: footerContent.contact.email },
      contactPhone: { [locale]: footerContent.contact.phone },
      contactAddress: { [locale]: footerContent.contact.address },
      companyNumber: { [locale]: footerContent.contact.companyNumber },

      socialLinkedin: { [locale]: footerContent.social.linkedin.href },
      socialInstagram: { [locale]: footerContent.social.instagram.href },
      socialFacebook: { [locale]: footerContent.social.facebook.href },
      socialYoutube: { [locale]: footerContent.social.youtube.href },

      gdprText: { [locale]: footerContent.gdpr.text },
      gdprImage: gdprAsset
        ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: gdprAsset.sys.id } } }
        : undefined,

      newsletterTitle: { [locale]: footerContent.newsletter.title },
      newsletterDescription: { [locale]: footerContent.newsletter.description },
      newsletterEmailPlaceholder: { [locale]: footerContent.newsletter.emailPlaceholder },
      newsletterSubmitLabel: { [locale]: footerContent.newsletter.submitLabel },

      // Rebranding toast settings (optional fields; add them to Contentful model to enable CMS control)
      // This space expects locale-keyed values even for non-localized fields.
      rebrandingToastEnabled: { [locale]: true },
      rebrandingToastDurationMs: { [locale]: 5000 },
    },
    requiredFieldIds: ['internalName'],
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma, entryId, entry })
  } catch {
    entry = await cma.entry.createWithId(
      { contentTypeId: 'siteSettings', entryId },
      {
        fields,
      },
    )
  }

  // Some spaces validate these two fields as required (and they can be added later to the model).
  // Ensure they exist before publishing, even if the generic update path didn't add them.
  const hasEnabled = Object.prototype.hasOwnProperty.call((entry.fields as any) ?? {}, 'rebrandingToastEnabled')
  const hasDuration = Object.prototype.hasOwnProperty.call((entry.fields as any) ?? {}, 'rebrandingToastDurationMs')
  if (!hasEnabled || !hasDuration) {
    entry = await cma.entry.patch(
      { entryId, version: (entry.sys as any).version } as any,
      [
        !hasEnabled
          ? { op: 'add', path: '/fields/rebrandingToastEnabled', value: { [locale]: true } }
          : null,
        !hasDuration
          ? { op: 'add', path: '/fields/rebrandingToastDurationMs', value: { [locale]: 5000 } }
          : null,
      ].filter(Boolean) as any,
    )
  }

  entry = await publishEntryIfNeeded({ cma, entryId, entry })

  return entry
}

export async function migrateSiteSettings() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  await upsertSiteSettings({ cma, locale: env.locale })
}

