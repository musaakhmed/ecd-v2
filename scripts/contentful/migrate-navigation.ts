import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { menu } from '../../src/lib/data/navigation/menu'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { filterFieldsByContentType } from './_contentTypes'
import { upsertAssetFromPublicPath } from './_assets'
import { safeContentfulId } from './_ids'

async function upsertNavigationLink(args: { cma: PlainClientAPI; locale: string; title: string; link: string }) {
  const { cma, locale, title, link } = args
  const entryId = safeContentfulId('navigationLink', `${title}__${link}`)

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'navigationLink',
    fields: {
      title: { [locale]: title },
      link: { [locale]: link },
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'navigationLink', entryId }, { fields })
  }
  if (!entry.sys?.publishedVersion) entry = await cma.entry.publish({ entryId }, entry)
  return entry
}

async function upsertNavigationItem(args: {
  cma: PlainClientAPI
  locale: string
  title: string
  link: string
  submenuLinks?: Array<{ title: string; link: string }>
  submenuImage?: { src: string; alt: string }
}) {
  const { cma, locale, title, link, submenuLinks, submenuImage } = args
  const entryId = safeContentfulId('navigationItem', `${title}__${link}`)

  const submenuLinkEntries: EntryProps[] = []
  for (const l of submenuLinks ?? []) {
    submenuLinkEntries.push(await upsertNavigationLink({ cma, locale, title: l.title, link: l.link }))
  }

  const submenuAsset = submenuImage?.src
    ? await upsertAssetFromPublicPath({ cma, publicPath: submenuImage.src, title: submenuImage.alt, locale })
    : null

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'navigationItem',
    fields: {
      title: { [locale]: title },
      link: { [locale]: link },
      submenuLinks: submenuLinkEntries.length
        ? {
            [locale]: submenuLinkEntries.map((e) => ({
              sys: { type: 'Link', linkType: 'Entry', id: e.sys.id },
            })),
          }
        : undefined,
      submenuImage: submenuAsset
        ? { [locale]: { sys: { type: 'Link', linkType: 'Asset', id: submenuAsset.sys.id } } }
        : undefined,
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'navigationItem', entryId }, { fields })
  }
  if (!entry.sys?.publishedVersion) entry = await cma.entry.publish({ entryId }, entry)
  return entry
}

async function upsertNavigationMenu(args: { cma: PlainClientAPI; locale: string; itemEntries: EntryProps[] }) {
  const { cma, locale, itemEntries } = args
  const entryId = 'navigationMenu_default'

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'navigationMenu',
    fields: {
      internalName: { [locale]: 'default' },
      items: {
        [locale]: itemEntries.map((e) => ({ sys: { type: 'Link', linkType: 'Entry', id: e.sys.id } })),
      },
    },
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await cma.entry.update({ entryId }, entry)
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'navigationMenu', entryId }, { fields })
  }
  if (!entry.sys?.publishedVersion) entry = await cma.entry.publish({ entryId }, entry)
  return entry
}

export async function migrateNavigation() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()

  const items: EntryProps[] = []
  for (const item of menu) {
    items.push(
      await upsertNavigationItem({
        cma,
        locale: env.locale,
        title: item.title,
        link: item.link,
        submenuLinks: item.submenu?.links,
        submenuImage: item.submenu?.image,
      }),
    )
  }

  await upsertNavigationMenu({ cma, locale: env.locale, itemEntries: items })
}

