import React from 'react'

const Page = () => {
  return (
    <section className="min-h-[50vh] ">
      <div className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center px-6 py-4  dark:bg-gray-800 bg-green-300">
        <h1>À Propos de Nous</h1>
        <p>
          Espace Cultures & Développement asbl favorise l'intégration et l'insertion de tous les
          publics grâce à la promotion de la culture, l'accès aux outils numériques, et la lutte
          contre la fracture numérique.
        </p>
      </div>
      <div
        className="container mx-auto min-h-[50vh] flex flex-col justify-around items-center bg-green-900"
        id="equipe"
      >
        Notre Equipe
      </div>
    </section>
  )
}

export default Page
