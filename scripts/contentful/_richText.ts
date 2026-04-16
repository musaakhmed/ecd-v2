type RichTextNode = Record<string, any>

export function richTextFromParagraphs(paragraphs: string[]): RichTextNode {
  return {
    nodeType: 'document',
    data: {},
    content: (paragraphs ?? []).map((p) => ({
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: p,
          marks: [],
          data: {},
        },
      ],
    })),
  }
}

export function richTextFromText(text: string): RichTextNode {
  const parts = (text ?? '')
    .split(/\n{2,}/)
    .map((s) => s.trim())
    .filter(Boolean)
  return richTextFromParagraphs(parts.length ? parts : [''])
}

