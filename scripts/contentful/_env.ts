function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing env var: ${name}`)
  return value
}

export function getContentfulManagementEnv() {
  return {
    spaceId: required('CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID),
    environmentId: process.env.CONTENTFUL_ENVIRONMENT ?? 'master',
    managementToken: required('CONTENTFUL_MANAGEMENT_TOKEN', process.env.CONTENTFUL_MANAGEMENT_TOKEN),
    locale: process.env.CONTENTFUL_LOCALE ?? 'fr',
  }
}

