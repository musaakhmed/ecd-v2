'use client'

import { useState } from 'react'
import Image from 'next/image'

type Partners = { title: string; image: string }[]

const partners: Partners = [
  { title: 'stib', image: '/assets/partenaires/stib.jpg' },
  { title: 'fondation roi baudoin', image: '/assets/partenaires/logoFRB.png' },
  { title: 'equal brussels', image: '/assets/partenaires/Logo-equal-bleu.png' },
  {
    title: 'francophones bruxelles',
    image: '/assets/partenaires/Logo_Francophones_Bruxelles.png',
  },
  {
    title: 'region bruxelles capitale',
    image: '/assets/partenaires/region_bruxelles_capitale.png',
  },
  { title: 'form ts', image: '/assets/partenaires/form-ts.png' },
  { title: 'ville de bruxelles', image: '/assets/partenaires/ville_bx.png' },
  { title: 'brusoc', image: '/assets/partenaires/brusoc.png' },
  {
    title: 'digital belgium skills fund',
    image: '/assets/partenaires/dbsf.avif',
  },
]

const LOGO_SIZE = 100
const CARD_PADDING = 12
const CARD_SIZE = LOGO_SIZE + CARD_PADDING
const GAP = 48
const STRIP_WIDTH = partners.length * CARD_SIZE + (partners.length - 1) * GAP

const PartnerCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ['--strip-width' as string]: `${STRIP_WIDTH}px` }}
    >
      <div className="w-full overflow-hidden">
        <div
          className={`flex items-center gap-12 shrink-0 w-max partners-scroll p-2 ${isHovered ? 'partners-scroll--paused' : ''}`}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.title}-${idx}`}
              className="shrink-0 flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110 bg-white/40 rounded-xl p-0.5 shadow-md border border-primary-200/60"
              style={{ width: CARD_SIZE, height: CARD_SIZE }}
            >
              <Image
                src={partner.image}
                alt={partner.title}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerCard
