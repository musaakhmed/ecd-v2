'use client'

import { useState } from 'react'
import Image from 'next/image'
import { partnersContent } from '@/lib/content/partnersAndServicesContent'

type Partners = { title: string; link: string; image: string }[]

const partners: Partners = [...partnersContent.logos]

const LOGO_SIZE = 100
const CARD_PADDING = 12
const CARD_SIZE = LOGO_SIZE + CARD_PADDING
const GAP = 48
const STRIP_WIDTH = partners.length * CARD_SIZE + (partners.length - 1) * GAP

const PartnerCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full overflow-y-visible! overflow-x-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ['--strip-width' as string]: `${STRIP_WIDTH}px` }}
    >
      <div className="w-full ">
        <div
          className={`flex items-center gap-12 shrink-0 w-max partners-scroll p-2 relative ${isHovered ? 'partners-scroll--paused' : ''}`}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.title}-${idx}`}
              className="shrink-0 group flex flex-col items-center justify-center transition-transform duration-200 z-50 group ease-in-out hover:scale-120  rounded-xl p-0.5 shadow-md "
              style={{ width: CARD_SIZE, height: CARD_SIZE }}
            >
              <Image
                src={partner.image}
                alt={partner.title}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className="object-contain w-full h-full rounded-t-lg bg-white/90 p-2"
              />
              <p className="z-50 w-full bg-accent-100 p-1 text-center text-sm font-semibold text-primary-900 rounded-b-lg cursor-pointer">
                <a href={partner.link} target="blank">
                  {partner.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerCard
