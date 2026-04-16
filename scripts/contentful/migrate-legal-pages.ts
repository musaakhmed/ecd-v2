import type React from 'react'
import type { EntryProps, PlainClientAPI } from 'contentful-management'
import { mentionsLegalesContent, politiqueConfidentialiteContent } from '../../src/lib/content/legalPagesContent'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { filterFieldsByContentType } from './_contentTypes'
import { safeContentfulId } from './_ids'
import { richTextFromText } from './_richText'
import { publishEntryIfNeeded, updateEntryWithVersion } from './_publish'

function isReactElement(node: any): node is React.ReactElement {
  return Boolean(node) && typeof node === 'object' && 'props' in node && 'type' in node
}

function nodeToTextParts(node: any): string[] {
  if (node == null || typeof node === 'boolean') return []
  if (typeof node === 'string' || typeof node === 'number') return [String(node)]
  if (Array.isArray(node)) return node.flatMap((n) => nodeToTextParts(n))

  if (isReactElement(node)) {
    const type = node.type
    const children = node.props?.children
    const childParts = nodeToTextParts(children)

    // Add paragraph breaks around block-ish elements.
    const blockLike =
      type === 'p' || type === 'div' || type === 'section' || type === 'ul' || type === 'ol' || type === 'li' || type === 'br'

    if (type === 'br') return ['\n']
    if (type === 'li') return ['- ', ...childParts, '\n']
    if (type === 'ul' || type === 'ol') return [...childParts, '\n']
    if (blockLike) return ['\n', ...childParts, '\n']
    return childParts
  }

  return []
}

function normalizeText(parts: string[]): string {
  return parts
    .join('')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

async function upsertLegalSection(args: {
  cma: PlainClientAPI
  locale: string
  slug: string
  sectionId: string
  title: string
  bodyText: string
}) {
  const { cma, locale, slug, sectionId, title, bodyText } = args
  const entryId = safeContentfulId('legalSection', `${slug}__${sectionId}`)

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'legalSection',
    fields: {
      internalName: { [locale]: `${slug}__${sectionId}` },
      title: { [locale]: title },
      body: { [locale]: richTextFromText(bodyText) },
    },
    requiredFieldIds: ['title', 'body'],
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma, entryId, entry })
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'legalSection', entryId }, { fields })
  }

  entry = await publishEntryIfNeeded({ cma, entryId, entry })
  return entry
}

async function upsertLegalPage(args: {
  cma: PlainClientAPI
  locale: string
  slug: string
  title: string
  seoTitle?: string
  seoDescription?: string
  sections: EntryProps[]
}) {
  const { cma, locale, slug, title, seoTitle, seoDescription, sections } = args
  const entryId = safeContentfulId('legalPage', slug)

  const { fields } = await filterFieldsByContentType({
    cma,
    contentTypeId: 'legalPage',
    fields: {
      slug: { [locale]: slug },
      title: { [locale]: title },
      seoTitle: seoTitle ? { [locale]: seoTitle } : undefined,
      seoDescription: seoDescription ? { [locale]: seoDescription } : undefined,
      sections: { [locale]: sections.map((s) => ({ sys: { type: 'Link', linkType: 'Entry', id: s.sys.id } })) },
    },
    requiredFieldIds: ['slug', 'title'],
  })

  let entry: EntryProps
  try {
    entry = await cma.entry.get({ entryId })
    entry.fields = { ...(entry.fields as any), ...(fields as any) }
    entry = await updateEntryWithVersion({ cma, entryId, entry })
  } catch {
    entry = await cma.entry.createWithId({ contentTypeId: 'legalPage', entryId }, { fields })
  }

  entry = await publishEntryIfNeeded({ cma, entryId, entry })
  return entry
}

export async function migrateLegalPages() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const pages = [
    { slug: 'mentions-legales', data: mentionsLegalesContent },
    { slug: 'politique-de-confidentialite', data: politiqueConfidentialiteContent },
  ] as const

  for (const p of pages) {
    const sectionEntries: EntryProps[] = []

    for (const s of p.data.sections ?? []) {
      const bodyText = normalizeText(nodeToTextParts(s.content))
      sectionEntries.push(
        await upsertLegalSection({
          cma,
          locale,
          slug: p.slug,
          sectionId: s.id,
          title: s.title,
          bodyText,
        }),
      )
    }

    await upsertLegalPage({
      cma,
      locale,
      slug: p.slug,
      title: p.data.pageTitle,
      seoTitle: p.data.metadata?.title,
      seoDescription: p.data.metadata?.description,
      sections: sectionEntries,
    })
  }
}

