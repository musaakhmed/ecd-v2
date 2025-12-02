import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function fetchSlides() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'media',
    depth: 1,
  })

  return result.docs.map((doc) => ({
    image: doc.url || '',
    title: doc.title,
    description: doc.description,
  }))
}
