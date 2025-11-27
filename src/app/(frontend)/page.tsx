import './globals.css'
import Hero from '@/components/homepage/Hero'
import Projects from '@/components/homepage/Projects'
import Programs from '@/components/homepage/Programs'
import Stats from '@/components/homepage/Stats'
import Partners from '@/components/homepage/Partners'
// import { fetchSlides } from 'src/lib/fetchSlides'

export default async function HomePage() {
  // const slides = await fetchSlides()

  return (
    <div>
      <Hero />
      <Projects />
      <Stats />
      <Programs />
      <Partners />
    </div>
  )
}
