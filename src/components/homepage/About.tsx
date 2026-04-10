import React from 'react'
import WhoWeAre from '@/components/About/WhoWeAre'
import { ValueCards } from '@/components/ui/OperateurCard'

const About = () => {
  return (
    <section id="about" className="min-h-full py-8">
      <div className="">
        <WhoWeAre />
        <ValueCards />
      </div>
    </section>
  )
}

export default About
