import type { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export function renderRichText(doc: Document | null | undefined) {
  if (!doc) return null
  return documentToReactComponents(doc)
}

