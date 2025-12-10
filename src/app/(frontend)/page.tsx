import './globals.css'
import { Hero } from '@/components/homepage/Hero'
import Projects from '@/components/homepage/Projects'
import Programs from '@/components/homepage/Programs'
import Stats from '@/components/homepage/Stats'
import Partners from '@/components/homepage/Partners'
import ServiceCards from '@/components/ui/ServiceCards'
import Video from '@/components/homepage/Video'
import About from '@/components/homepage/About'
// import { fetchSlides } from 'src/lib/fetchSlides'

export default async function HomePage() {
  // const slides = await fetchSlides()
  // console.log('Server-side slides data:', slides)

  return (
    <div>
      <Hero />
      <About />
      <ServiceCards />
      <Video />
      <Stats />
      <Projects />
      <Programs />
      <Partners />
    </div>
  )
}
