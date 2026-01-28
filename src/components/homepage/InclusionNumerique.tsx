import React from 'react'

const InclusionNumerique = () => {
  return (
    <section
      id="inclusion-numerique-home"
      className="w-full py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-5xl mx-auto rounded-2xl shadow-lg border bg-white dark:bg-gray-900 border-primary-100 dark:border-primary-900/50 px-6 md:px-10 py-8 md:py-10">
        <h2 className="font-bold text-primary-900 dark:text-primary-100 mb-6 text-center">
          Inclusion numérique
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
          Aujourd’hui, de plus en plus de démarches essentielles se font en ligne : prendre un
          rendez-vous, consulter ses documents, accéder à une administration, remplir un
          formulaire, envoyer un e-mail, utiliser une application bancaire ou simplement rechercher
          une information fiable. Pourtant, pour une partie de la population, ces gestes restent
          complexes ou inaccessibles. Le manque d’équipement, de compétences, de repères ou de
          confiance entraîne une véritable fracture numérique, pouvant renforcer l’isolement social
          et les inégalités.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
          Pour répondre à ces enjeux, Espace Cultures &amp; Développement déploie un dispositif
          d’accompagnement mobile, itinérant et inclusif : l’EPNM – Espace Public Numérique Mobile.
          Ce service permet de proposer des ateliers et des permanences numériques directement sur
          le terrain, au plus près des habitants, dans des lieux de proximité tels que :
          associations, écoles de devoirs, maisons de quartier, permanences sociales, centres
          communautaires, logements sociaux ou structures partenaires.
        </p>
      </div>
    </section>
  )
}

export default InclusionNumerique

