import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import type { AssetProps, PlainClientAPI } from 'contentful-management'

function guessContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.png') return 'image/png'
  if (ext === '.webp') return 'image/webp'
  if (ext === '.gif') return 'image/gif'
  if (ext === '.svg') return 'image/svg+xml'
  if (ext === '.avif') return 'image/avif'
  return 'application/octet-stream'
}

export async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

export async function upsertAssetFromPublicPath(args: {
  cma: PlainClientAPI
  publicPath: string // e.g. "/assets/foo.jpg"
  title: string
  locale: string
}): Promise<AssetProps | null> {
  const { cma, publicPath, title, locale } = args
  if (!publicPath.startsWith('/')) return null

  const abs = path.join(process.cwd(), 'public', publicPath)
  if (!(await fileExists(abs))) return null

  const data = await fs.readFile(abs)
  const contentType = guessContentType(abs)
  const fileName = path.basename(abs)

  // Deterministic, Contentful-safe ID derived from public path.
  // Contentful IDs are strict; keep it short and alphanumeric.
  const hash = crypto.createHash('sha1').update(publicPath).digest('hex').slice(0, 20)
  const id = `asset_${hash}`

  let asset: AssetProps
  try {
    asset = await cma.asset.get({ assetId: id })
  } catch {
    const upload = await cma.upload.create({}, { file: data })
    asset = await cma.asset.createWithId(
      { assetId: id },
      {
        fields: {
          title: { [locale]: title },
          file: {
            [locale]: {
              contentType,
              fileName,
              uploadFrom: {
                sys: {
                  type: 'Link',
                  linkType: 'Upload',
                  id: upload.sys.id,
                },
              },
            },
          },
        },
      },
    )
  }

  // If an asset was previously created with an invalid data URI upload field,
  // replace it with an Upload API reference (required by CMA validation).
  const fileField = (asset.fields as any)?.file?.[locale]
  if (fileField && typeof fileField.upload === 'string' && fileField.upload.startsWith('data:')) {
    const upload = await cma.upload.create({}, { file: data })
    fileField.uploadFrom = {
      sys: { type: 'Link', linkType: 'Upload', id: upload.sys.id },
    }
    delete fileField.upload
    asset = await cma.asset.update({ assetId: id }, asset)
  }

  // Process + publish if needed.
  if (!asset.fields?.file?.[locale]?.url) {
    asset = await cma.asset.processForLocale({ assetId: id }, asset, locale, { processingCheckWait: 2000 } as any)
  }

  if (!asset.sys?.publishedVersion) {
    asset = await cma.asset.publish({ assetId: id }, asset)
  }

  return asset
}

