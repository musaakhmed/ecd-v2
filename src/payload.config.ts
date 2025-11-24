// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Gallery } from '@/collections/Gallery'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Check if all required S3 environment variables are present
const hasS3Config =
  process.env.S3_BUCKET &&
  process.env.S3_ACCESS_KEY_ID &&
  process.env.S3_SECRET_ACCESS_KEY &&
  process.env.S3_REGION &&
  process.env.S3_ENDPOINT

// Conditionally configure collections - disable uploads if S3 is not configured
const collections = [
  Users,
  // Only enable uploads if S3 storage is configured
  hasS3Config ? Media : { ...Media, upload: false },
  hasS3Config ? Gallery : { ...Gallery, upload: false },
]

// Conditionally include S3 storage plugin
const plugins = []
if (hasS3Config) {
  plugins.push(
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
        gallery: {
          prefix: 'gallery',
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION!,
        endpoint: process.env.S3_ENDPOINT!,
        // ... Other S3 configuration
      },
    }),
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins,
})
