type Slide = {
  url: string
  title: string
  description: string
}

export async function fetchSlides() {
  const res = await fetch('http://localhost:3000/api/media?depth=1')
  if (!res.ok) {
    throw new Error('Failed to fetch slides from PayloadCMS')
  }
  const data = await res.json()
  return data.docs.map((doc: Slide) => ({
    image: doc.url || '',
    title: doc.title,
    description: doc.description,
  }))
}
