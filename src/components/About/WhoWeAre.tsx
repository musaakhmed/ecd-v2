import React from 'react'
import Link from 'next/link'
import { quiSommesNousPageContent } from '@/lib/about-content'

const WhoWeAre = () => {
  return (
    <div className="w-full container mx-auto p-8">
      <div
        id="who-we-are"
        className="bg-gradient-to-br from-secondary-100 to-primary-50 rounded-2xl border border-primary-100 p-6 xl:p-12 shadow-sm shadow-primary-100 min-h-[25vh] text-xl xl:text-2xl text-center text-primary-800 flex flex-col justify-center items-center gap-6"
      >
        <h1 className="text-2xl xl:text-4xl font-semibold text-center ">
          {quiSommesNousPageContent.hero.title}
        </h1>
        {quiSommesNousPageContent.introduction.paragraphs.map((paragraph, index) => (
          <p key={index} className={index === 0 ? '' : ''}>
            {paragraph}
          </p>
        ))}
        <Link href="/a-propos/qui-sommes-nous">
          <button className="bg-primary-700 text-secondary-100 px-4 py-2 rounded-xl text-lg hover:bg-primary-500 hover:scale-105 cursor-pointer ">
            Lire plus...
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WhoWeAre
