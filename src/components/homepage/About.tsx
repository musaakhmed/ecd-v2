import React from 'react'
import WhoWeAre from '@/components/About/WhoWeAre'
import FormationTS from '@/components/About/FormationTS'
import ES from '@/components/About/ES'
import { ValueCards } from '@/components/ui/OperateurCard'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-primary-900">
      <div className="container mx-auto">
        <WhoWeAre />
        <ValueCards />
      </div>
    </section>
  )
}

export default About
