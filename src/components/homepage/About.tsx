import React from 'react'
import WhoWeAre from '@/components/About/WhoWeAre'
import { ValueCards } from '@/components/ui/OperateurCard'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen  bg-linear-to-b from-azure-600 via-primary-300 to-azure-400 py-8"
    >
      <div className="">
        <WhoWeAre />
        <ValueCards />
      </div>
    </section>
  )
}

export default About
