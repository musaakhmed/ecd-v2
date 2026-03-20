import { createClient, type ContentfulClientApi } from 'contentful'

type ClientVariant = 'delivery' | 'preview'

type BaseClientOptions = {
  space?: string
  environment?: string
}

type DeliveryClientOptions = BaseClientOptions & {
  preview?: false
}

type PreviewClientOptions = BaseClientOptions & {
  preview: true
}

type ClientOptions = DeliveryClientOptions | PreviewClientOptions

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function createContentfulClient(variant: ClientVariant, options: ClientOptions = {}): ContentfulClientApi<undefined> {
  const space = options.space ?? getRequiredEnv('CONTENTFUL_SPACE_ID')
  const environment = options.environment ?? process.env.CONTENTFUL_ENVIRONMENT ?? 'master'

  const accessToken =
    variant === 'preview'
      ? getRequiredEnv('CONTENTFUL_PREVIEW_TOKEN')
      : getRequiredEnv('CONTENTFUL_DELIVERY_TOKEN')

  return createClient({
    space,
    environment,
    accessToken,
    host: variant === 'preview' ? 'preview.contentful.com' : 'cdn.contentful.com',
  })
}

export function getDeliveryClient(options: Omit<DeliveryClientOptions, 'preview'> = {}) {
  return createContentfulClient('delivery', { ...options, preview: false })
}

export function getPreviewClient(options: Omit<PreviewClientOptions, 'preview'> = {}) {
  return createContentfulClient('preview', { ...options, preview: true })
}

