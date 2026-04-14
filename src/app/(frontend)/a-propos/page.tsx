import React from 'react'
import { quiSommesNousPlaceholderContent } from '@/lib/content/quiSommesNousPlaceholder'

const Page = () => {
  return (
    <section className="min-h-[50vh] ">
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center px-6 py-4 bg-green-300"
        id="qui-sommes-nous"
      >
        <h1>{quiSommesNousPlaceholderContent.hero.title}</h1>
        <p>{quiSommesNousPlaceholderContent.hero.description}</p>
      </div>
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-green-900"
        id="agrements"
      >
        {quiSommesNousPlaceholderContent.sections.agrements}
      </div>
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-orange-500"
        id="status"
      >
        {quiSommesNousPlaceholderContent.sections.status}
      </div>{' '}
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-red-400"
        id="notre-histoire"
      >
        {quiSommesNousPlaceholderContent.sections.histoire}
      </div>
    </section>
  )
}

export default Page
