import React from 'react'
import Link from 'next/link'
import { quiSommesNousPageContent } from '@/lib/about-content'
import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div
        id="who-we-are"
        className="bg-secondary-100 rounded-xl md:rounded-2xl min-h-[18vh] md:min-h-[19vh] text-base md:text-lg xl:text-xl text-primary-800 flex flex-col md:flex-row justify-center gap-4 md:gap-5 overflow-hidden"
      >
        {/* Text block */}
        <div className="flex flex-col justify-around gap-3 md:gap-4 py-3 px-4 md:py-4 md:px-6 flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
            {quiSommesNousPageContent.hero.title}
          </h2>
          {quiSommesNousPageContent.introduction.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <Link href="/a-propos/qui-sommes-nous" className="self-start md:self-auto">
            <button className="bg-primary-700 text-white py-2.5 px-5 rounded-lg md:rounded-xl text-base hover:bg-primary-500 hover:scale-105 cursor-pointer font-semibold">
              Lire plus...
            </button>
          </Link>
        </div>
        {/* Oblique + image: on mobile diagonal edge; on desktop skewed strip then image (~25% smaller) */}
        <div className="flex gap-0 flex-shrink-0 w-full md:w-auto min-h-0">
          <div className="relative w-full md:min-w-[180px] lg:min-w-[220px] xl:min-w-[280px] min-h-[120px] sm:min-h-[140px] md:min-h-[160px] overflow-hidden rounded-b-xl md:rounded-r-2xl md:rounded-bl-none flex-1 md:flex-initial">
            {/* Mobile: oblique top-left edge via skewed wrapper */}
            {/*<div className="absolute inset-0 -skew-x-8 md:skew-x-0 origin-top-left md:origin-center w-[120%] -left-[10%] md:left-0 md:w-full"></div>*/}
            <Image
              className="object-cover object-center skew-x-8 md:skew-x-0 h-full w-full"
              src="/assets/operateur/economie-sociale.png"
              alt={quiSommesNousPageContent.hero.title}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
