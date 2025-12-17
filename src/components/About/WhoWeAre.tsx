import React from 'react'
import Link from 'next/link'

const WhoWeAre = () => {
  return (
    <div className="w-full container mx-auto p-8">
      <div
        id="who-we-are"
        className="bg-gradient-to-br from-secondary-100 to-primary-50 rounded-2xl border border-primary-100 p-6 xl:p-12 shadow-sm shadow-primary-100 min-h-[25vh] text-xl xl:text-2xl text-center text-primary-800 flex flex-col justify-center items-center gap-6"
      >
        <h1 className="text-2xl xl:text-4xl font-semibold text-center ">Qui sommes-nous?</h1>
        <p className="">
          Espace Cultures & Développement est un cadre d’action associatif engagé dans la
          valorisation de la culture comme levier d’intégration, d’émancipation et d’insertion
          sociale. L’association accompagne divers publics — jeunes en milieu scolaire, adultes en
          activation sociale, travailleurs peu qualifiés, publics éloignés du numérique,
          primo-arrivants, ainsi que professionnels du secteur des Titres-Services — en favorisant
          l’accès à l’éducation, au numérique, à la citoyenneté et au bien-être.
        </p>
        <p>
          ECD vise à renforcer l’autonomie, les capacités d’agir et la participation active de
          chacun, en tenant compte des réalités sociales, économiques et culturelles propres aux
          quartiers bruxellois.
        </p>
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
