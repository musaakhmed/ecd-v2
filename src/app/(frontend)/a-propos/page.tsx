import React from 'react'

const Page = () => {
  return (
    <section className="min-h-[50vh] ">
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center px-6 py-4  dark:bg-gray-800 bg-green-300"
        id="qui-sommes-nous"
      >
        <h1>Qui sommes-nous?</h1>
        <p>
          Espace Cultures & Développement asbl favorise l&apos;intégration et l&apos;insertion de
          tous les publics grâce à la promotion de la culture, l&apos;accès aux outils numériques,
          et la lutte contre la fracture numérique.
        </p>
      </div>
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-green-900"
        id="agrements"
      >
        Nos Agréments
      </div>
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-orange-500"
        id="status"
      >
        Nos status
      </div>{' '}
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-red-400"
        id="notre-histoire"
      >
        Notre histoire
      </div>
    </section>
  )
}

export default Page
