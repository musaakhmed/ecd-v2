import { GraphQLClient } from 'graphql-request'
import { getContentfulEnv, isContentfulPreviewEnabled } from './env'

function getContentfulGraphQLEndpoint(spaceId: string, environmentId: string) {
  return `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`
}

export function getContentfulGraphQLClient() {
  const env = getContentfulEnv()
  const isPreview = isContentfulPreviewEnabled()

  const token = isPreview ? env.previewToken ?? env.deliveryToken : env.deliveryToken

  // Next.js may cache server-side fetches; force `no-store` so Contentful updates appear immediately.
  // graphql-request uses `fetch` under the hood, so we override it.
  const noStoreFetch: typeof fetch = (input, init) =>
    fetch(input, {
      ...(init ?? {}),
      cache: 'no-store',
    })

  return new GraphQLClient(getContentfulGraphQLEndpoint(env.spaceId, env.environmentId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    fetch: noStoreFetch,
  })
}

