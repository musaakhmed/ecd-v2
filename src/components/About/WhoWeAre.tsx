import React from 'react'

const WhoWeAre = () => {
  return (
    <div
      id="who-we-are"
      className="min-h-[25vh] text-xl xl:text-2xl text-center text-white container mx-auto p-6 flex flex-col justify-center items-center gap-6 pb-12"
    >
      <h1 className="p-6 text-2xl xl:text-4xl font-semibold text-white pt-24 text-center">
        Qui sommes-nous?
      </h1>
      <p className="">
        Espace Cultures & Développement est un cadre d’action associatif engagé dans la valorisation
        de la culture comme levier d’intégration, d’émancipation et d’insertion sociale.
        L’association accompagne divers publics — jeunes en milieu scolaire, adultes en activation
        sociale, travailleurs peu qualifiés, publics éloignés du numérique, primo-arrivants, ainsi
        que professionnels du secteur des Titres-Services — en favorisant l’accès à l’éducation, au
        numérique, à la citoyenneté et au bien-être.
      </p>
      <p>
        ECD vise à renforcer l’autonomie, les capacités d’agir et la participation active de chacun,
        en tenant compte des réalités sociales, économiques et culturelles propres aux quartiers
        bruxellois.
      </p>
    </div>
  )
}

export default WhoWeAre
