import type { EntryProps, PlainClientAPI } from 'contentful-management'

function hasUnpublishedChanges(entry: EntryProps): boolean {
  const published = (entry.sys as any)?.publishedVersion as number | undefined
  const version = (entry.sys as any)?.version as number | undefined
  if (!published) return true
  if (!version) return false
  // After publishing, `version` is typically `publishedVersion + 1`.
  // If it has advanced further, there are draft changes to publish.
  return version > published + 1
}

export async function publishEntryIfNeeded(args: {
  cma: PlainClientAPI
  entryId: string
  entry: EntryProps
  force?: boolean
}): Promise<EntryProps> {
  const { cma, entryId, entry, force } = args
  if (force || hasUnpublishedChanges(entry) || !entry.sys?.publishedVersion) {
    return await cma.entry.publish({ entryId }, entry)
  }
  return entry
}

export async function updateEntryWithVersion(args: {
  cma: PlainClientAPI
  entryId: string
  entry: EntryProps
}): Promise<EntryProps> {
  const { cma, entryId, entry } = args
  const latest = await cma.entry.get({ entryId })
  const version = (latest.sys as any)?.version
  const nextFields = (entry as any)?.fields ?? (latest as any)?.fields

  // Plain CMA `entry.update` expects an explicit version header; instead we use `patch`,
  // which takes the version as a first-class param and avoids header plumbing issues.
  return await (cma as any).entry.patch(
    { entryId, version } as any,
    [{ op: 'replace', path: '/fields', value: nextFields }],
  )
}

