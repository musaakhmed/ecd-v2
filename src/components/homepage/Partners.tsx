import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PartnerCard from '@/components/ui/PartnerCard'

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-around min-h-[50vh] p-12 bg-primary-50">
      <h2 className="text-lg font-semibold lg:text-2xl text-secondary-800">Nos Soutiens</h2>
      <PartnerCard />
    </section>
  )
}

export default Partners
