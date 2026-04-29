import { getContentfulGraphQLClient } from '../graphql'
import { defaultSocialLinks, type SocialLinks } from '@/lib/content/footerContent'

export type SiteSettings = {
  rebrandingToastEnabled: boolean
  rebrandingToastDurationMs: number
  socialLinks: SocialLinks
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const client = getContentfulGraphQLClient()

  let item:
    | {
        rebrandingToastEnabled?: boolean | null
        rebrandingToastDurationMs?: number | null
        socialLinkedin?: string | null
        socialInstagram?: string | null
        socialFacebook?: string | null
        socialYoutube?: string | null
      }
    | null
    | undefined

  try {
    const data = await client.request<{
      siteSettingsCollection?: {
        items: Array<
          | {
              rebrandingToastEnabled?: boolean | null
              rebrandingToastDurationMs?: number | null
              socialLinkedin?: string | null
              socialInstagram?: string | null
              socialFacebook?: string | null
              socialYoutube?: string | null
            }
          | null
        >
      } | null
    }>(
      /* GraphQL */ `
        query GetSiteSettings {
          siteSettingsCollection(limit: 1) {
            items {
              rebrandingToastEnabled
              rebrandingToastDurationMs
              socialLinkedin
              socialInstagram
              socialFacebook
              socialYoutube
            }
          }
        }
      `,
    )

    item = data.siteSettingsCollection?.items?.[0]
  } catch {
    const data = await client.request<{
      siteSettingsCollection?: {
        items: Array<{ rebrandingToastEnabled?: boolean | null; rebrandingToastDurationMs?: number | null } | null>
      } | null
    }>(
      /* GraphQL */ `
        query GetSiteSettingsFallback {
          siteSettingsCollection(limit: 1) {
            items {
              rebrandingToastEnabled
              rebrandingToastDurationMs
            }
          }
        }
      `,
    )

    item = data.siteSettingsCollection?.items?.[0]
  }

  if (!item) return null

  return {
    rebrandingToastEnabled: item.rebrandingToastEnabled ?? true,
    rebrandingToastDurationMs: item.rebrandingToastDurationMs ?? 5000,
    socialLinks: {
      linkedin: item.socialLinkedin ?? defaultSocialLinks.linkedin,
      instagram: item.socialInstagram ?? defaultSocialLinks.instagram,
      facebook: item.socialFacebook ?? defaultSocialLinks.facebook,
      youtube: item.socialYoutube ?? defaultSocialLinks.youtube,
    },
  }
}

