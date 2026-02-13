import './globals.css'
import { Hero } from '@/components/homepage/Hero'
import Stats from '@/components/homepage/Stats'
import ServiceCards from '@/components/ui/ServiceCards'
import Video from '@/components/homepage/Video'
import About from '@/components/homepage/About'
import Projects from '@/components/homepage/Projects'
// import { fetchSlides } from 'src/lib/fetchSlides'

// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  // const slides = await fetchSlides()
  // console.log('Server-side slides data:', slides)

  return (
    <div>
      <Hero />
      <About />
      <ServiceCards />
      <Video />
      {/*<Projects />*/}
      <Stats />
    </div>
  )
}
