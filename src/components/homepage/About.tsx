import React from 'react'
import WhoWeAre from '@/components/About/WhoWeAre'
import FormationTS from '@/components/About/FormationTS'
import ES from '@/components/About/ES'
import { ValueCards } from '@/components/ui/OperateurCard'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-green-900">
      <div>
        <h1 className="p-6 text-2xl lg:text-4xl font-semibold text-white pt-24 text-center">
          Qui sommes-nous?
        </h1>
        <WhoWeAre />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 p-12">
        <ValueCards />
      </div>
      <div></div>
    </section>
  )
}

export default About
