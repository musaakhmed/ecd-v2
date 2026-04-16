import type React from 'react'
import { getCmaClient } from './_client'
import { getContentfulManagementEnv } from './_env'
import { upsertSectionBlock } from './_pageBuilder'
import { partnersContent, serviceCardsContent } from '../../src/lib/content/partnersAndServicesContent'
import { rebrandingToastContent } from '../../src/lib/content/rebrandingToastContent'
import { projects } from '../../src/lib/data/homepage/projects'
import { maintenanceSections } from '../../src/lib/data/services/maintenance-services'
import { valueCardsItems } from '../../src/lib/content/components/valueCardsData'

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
    if (type === 'br') return ['\n']
    if (type === 'li') return ['- ', ...childParts, '\n']
    if (type === 'ul' || type === 'ol') return [...childParts, '\n']
    if (type === 'p' || type === 'div' || type === 'section') return ['\n', ...childParts, '\n']
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

export async function migrateMiscContent() {
  const env = getContentfulManagementEnv()
  const cma = getCmaClient()
  const locale = env.locale

  const valueCards = valueCardsItems.map((v) => ({
    icon: v.icon,
    title: v.title,
    description: v.description,
    expandedContentText: normalizeText(nodeToTextParts(v.expandedContent)),
    link: v.link,
    img: v.img,
  }))

  const datasets: Array<{ internalName: string; data: unknown }> = [
    { internalName: 'misc_partnersContent', data: partnersContent },
    { internalName: 'misc_serviceCardsContent', data: serviceCardsContent },
    { internalName: 'misc_rebrandingToastContent', data: rebrandingToastContent },
    { internalName: 'misc_homepageProjects', data: projects },
    { internalName: 'misc_maintenanceSections', data: maintenanceSections },
    { internalName: 'misc_valueCardsItems', data: valueCards },
  ]

  for (const d of datasets) {
    await upsertSectionBlock({
      cma,
      locale,
      internalName: d.internalName,
      title: d.internalName,
      body: JSON.stringify(d.data, null, 2),
    })
  }
}

