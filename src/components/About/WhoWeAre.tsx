import React from 'react'
import Link from 'next/link'
import { quiSommesNousPageContent } from '@/lib/about-content'
import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <div className="w-full container mx-auto">
      <div
        id="who-we-are"
        className="bg-secondary-100 rounded-2xl min-h-[25vh] text-xl xl:text-2xl text-primary-800 flex justify-center gap-6 "
      >
        <div className="flex flex-col justify-around gap-6 p-6 pr-0 md:p-8">
          <h2 className="text-2xl xl:text-4xl font-semibold ">
            {quiSommesNousPageContent.hero.title}
          </h2>
          {quiSommesNousPageContent.introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? '' : ''}>
              {paragraph}
            </p>
          ))}
          <Link href="/a-propos/qui-sommes-nous">
            <button className="bg-primary-700 text-secondary-100 px-4 py-2 rounded-xl text-lg hover:bg-primary-500 hover:scale-105 cursor-pointer font-semibold">
              Lire plus...
            </button>
          </Link>
        </div>
        <div className="flex gap-0">
          <div className="bg-secondary-100 min-h-full w-[40rem] relative left-0 -skew-x-10 overflow-hidden origin-bottom-right transform"></div>
          <Image
            className="rounded-r-2xl object-cover object-center"
            src="/assets/operateur/economie-sociale.png"
            alt={quiSommesNousPageContent.hero.title}
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
