'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Partners = { title: string; image: string }[]

const partners: Partners = [
  {
    title: 'engie',
    image: '/assets/partenaires/fondationengie.png',
  },
  {
    title: 'stib',
    image: '/assets/partenaires/stib.jpg',
  },
  {
    title: 'fondation roi baudoin',
    image: '/assets/partenaires/logoFRB.png',
  },
  {
    title: 'itsme',
    image: '/assets/partenaires/itsme.webp',
  },
  {
    title: 'equal brussels',
    image: '/assets/partenaires/Logo-equal-bleu.png',
  },
  {
    title: 'francophones bruxelles',
    image: '/assets/partenaires/Logo_Francophones_Bruxelles.png',
  },
  {
    title: 'loterie nationale',
    image: '/assets/partenaires/loterienationale.png',
  },
  {
    title: 'region bruxelles capitale',
    image: '/assets/partenaires/region_bruxelles_capitale.png',
  },
]

const PartnerCard = () => {
  const [centreIdx, setCentreIdx] = useState(0)
  const length = partners.length

  const MAX_VISIBLE: number = 2 // Number of logos visible on each side of center

  useEffect(() => {
    // Helper to wrap around indexes for infinite carousel effect
    const getWrappedIndex = (index: number) => {
      if (index < 0) return length + index
      if (index >= length) return index - length
      return index
    }

    const interval = setInterval(() => {
      setCentreIdx((prev) => getWrappedIndex(prev + 1))
    }, 2000) // Change 3000ms for faster/slower rotation

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [length])

  const getCircularOffset = (idx: number, centerIdx: number, length: number) => {
    let offset = idx - centerIdx

    // Adjust offset to always use the shortest path around the circle
    if (offset > length / 2) offset -= length
    if (offset <= -length / 2) offset += length

    return offset
  }

  return (
    <div className="min-h-[30vh] flex items-center justify-center gap-6 lg:w-2/3 mx-auto overflow-hidden">
      {partners.map((partner, idx) => {
        // Calculate offset relative to centerIdx with wrapping for infinite effect

        const offset = getCircularOffset(idx, centreIdx, length)

        if (Math.abs(offset) > MAX_VISIBLE) return null

        // Set visual properties based on offset
        const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.3
        const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3
        const translateX = offset * 90 // Adjust this for spacing between logos
        const zIndex = 10 - Math.abs(offset)

        return (
          <motion.div
            key={idx}
            className="relative w-32 h-20 md:w-40 md:h-28 rounded-lg drop-shadow-2xl bg-transparent flex items-center justify-center overflow-hidden"
            style={{ zIndex }}
            animate={{ scale, opacity, x: translateX }}
            transition={{ type: 'keyframes', stiffness: 300, damping: 25 }}
            aria-current={offset === 0 ? 'true' : 'false'}
          >
            <Image
              src={partner.image}
              alt={partner.title}
              height={250}
              width={250}
              className="transition-all duration-300 ease-in-out object-contain"
              priority={offset === 0}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default PartnerCard
