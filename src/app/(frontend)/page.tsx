import './globals.css'
import Hero from '@/components/homepage/Hero'
import Projects from '@/components/homepage/Projects'
import Programs from '@/components/homepage/Programs'
import Stats from '@/components/homepage/Stats'

export default async function HomePage() {



  return (
    <div className="home">
        <Hero />
        <Projects/>
        <Programs />
        <Stats />
    </div>
  )
}
