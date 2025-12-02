// type Slide = {
//   url: string
//   title: string
//   description: string
// }
//
// export async function fetchSlides() {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000')
//   if (!res.ok) {
//     throw new Error('Failed to fetch slides from PayloadCMS')
//   }
//   const data = await res.json()
//   return data.docs.map((doc: Slide) => ({
//     image: doc.url || '',
//     title: doc.title,
//     description: doc.description,
//   }))
// }
//
// // import { getPayload } from 'payload'
// // import configPromise from '@payload-config'
// //
// // export async function fetchSlides() {
// //   const payload = await getPayload({ config: configPromise })
// //
// //   const result = await payload.find({
// //     collection: 'media',
// //     depth: 1,
// //   })
// //
// //   return result.docs.map((doc) => ({
// //     image: doc.url || '',
// //     title: doc.title,
// //     description: doc.description,
// //   }))
// // }
