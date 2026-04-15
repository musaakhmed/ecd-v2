function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export function hasContentfulEnv(): boolean {
  return Boolean(process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_DELIVERY_TOKEN)
}

export function getContentfulEnv() {
  const spaceId = required('CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID)
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT ?? 'master'

  const deliveryToken = required(
    'CONTENTFUL_DELIVERY_TOKEN',
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  )

  const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN

  return {
    spaceId,
    environmentId,
    deliveryToken,
    previewToken,
  }
}

export function isContentfulPreviewEnabled(): boolean {
  // You can upgrade this later to use draftMode() or a cookie.
  return process.env.CONTENTFUL_PREVIEW === 'true'
}

