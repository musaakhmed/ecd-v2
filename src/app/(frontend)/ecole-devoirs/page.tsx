import React from 'react'

const Page = () => {
  return (
    <section className="flex flex-col min-h-[50vh] items-center justify-center ">
      <div
        className="min-h-[50vh] w-full bg-primary-200 flex justify-center items-center"
        id="petite-histoire"
      >
        La petite histoire de l'EDD
      </div>
      <div
        className="min-h-[50vh] w-full bg-primary-500 flex justify-center items-center"
        id="projet-pedagogique"
      >
        Notre projet pedagogique
      </div>
      <div
        className="min-h-[50vh] w-full bg-primary-700 flex justify-center items-center"
        id="activite-programmes"
      >
        Activité et programmes
      </div>
      <div
        className="min-h-[50vh] w-full bg-secondary-800 flex justify-center items-center"
        id="cafe-parents"
      >
        Le Café Parents
      </div>
      <div
        className="min-h-[50vh] w-full bg-secondary-300 flex justify-center items-center"
        id="partenaires"
      >
        Nos Partenraires
      </div>
    </section>
  )
}

export default Page
