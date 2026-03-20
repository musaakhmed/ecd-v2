import type { EddSectionEntry } from '../types'
import type { SectionContent } from '@/app/(frontend)/ecole-devoirs/[slug]/EddSectionClient'

export function mapEddSectionEntryToSectionContent(entry: EddSectionEntry): SectionContent {
  const paragraphs: string[] = []

  if (Array.isArray(entry.bodyIntro)) {
    paragraphs.push(...entry.bodyIntro)
  }

  const objectifs = Array.isArray(entry.bodyItems)
    ? entry.bodyItems.map((item) => ({
        title: item.title ?? '',
        description: item.description ?? '',
      }))
    : []

  return {
    intro: paragraphs,
    objectifs,
  }
}

