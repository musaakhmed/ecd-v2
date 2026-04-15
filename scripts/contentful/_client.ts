import { createClient, type PlainClientAPI } from 'contentful-management'
import { getContentfulManagementEnv } from './_env'

export function getCmaClient(): PlainClientAPI {
  const env = getContentfulManagementEnv()
  return createClient(
    {
      accessToken: env.managementToken,
    },
    {
      // Default (plain) client with scoped defaults (recommended by Contentful)
      defaults: {
        spaceId: env.spaceId,
        environmentId: env.environmentId,
      },
    },
  )
}

