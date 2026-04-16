import { getContentfulGraphQLClient } from '../graphql'

export type SiteSettings = {
  rebrandingToastEnabled: boolean
  rebrandingToastDurationMs: number
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const client = getContentfulGraphQLClient()

  const data = await client.request<{
    siteSettingsCollection?: {
      items: Array<{ rebrandingToastEnabled?: boolean | null; rebrandingToastDurationMs?: number | null } | null>
    } | null
  }>(
    /* GraphQL */ `
      query GetSiteSettings {
        siteSettingsCollection(limit: 1) {
          items {
            rebrandingToastEnabled
            rebrandingToastDurationMs
          }
        }
      }
    `,
  )

  const item = data.siteSettingsCollection?.items?.[0]
  if (!item) return null

  return {
    rebrandingToastEnabled: item.rebrandingToastEnabled ?? true,
    rebrandingToastDurationMs: item.rebrandingToastDurationMs ?? 5000,
  }
}

