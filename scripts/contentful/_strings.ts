export function splitToMaxSymbol(value: string, maxLen = 255): string[] {
  const trimmed = value.trim()
  if (!trimmed) return []
  if (trimmed.length <= maxLen) return [trimmed]

  // Prefer splitting on newlines and bullet separators.
  const roughParts = trimmed
    .split(/\n+/)
    .flatMap((p) => p.split(/•\s+/))
    .map((p) => p.trim())
    .filter(Boolean)

  const out: string[] = []
  for (const part of roughParts) {
    if (part.length <= maxLen) {
      out.push(part)
      continue
    }

    // Fallback: hard chunking.
    for (let i = 0; i < part.length; i += maxLen) {
      out.push(part.slice(i, i + maxLen))
    }
  }

  return out
}

export function normalizeSymbolList(values: string[] | undefined, maxLen = 255): string[] {
  return (values ?? []).flatMap((v) => splitToMaxSymbol(v, maxLen))
}

