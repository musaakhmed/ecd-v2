import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { footerContent } from '../../src/lib/content/footerContent'
import { contactPageContent } from '../../src/lib/content/contactPage'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'

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
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId(
      { contentTypeId: 'siteSettings', entryId },
      {
        fields,
      },
    )
  }

  if (!entry.sys?.publishedVersion) {
    entry = await cma.entry.publish({ entryId }, entry)
  }

  return entry
}

export async function migrateSiteSettings() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  await upsertSiteSettings({ cma, locale: env.locale })
}

