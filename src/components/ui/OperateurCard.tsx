'use client'

import Image from 'next/image'
import {
  eddPageContent,
  esdPageContent,
  epnPageContent,
  titresServicesPageContent,
} from '@/lib/about-content'
import Link from 'next/link'

const items = [
  {
    icon: '',
    title: 'Opérateur en École de Devoirs',
    description: `Espace Cultures & Développement est reconnu par l'ONE comme opérateur d'École de Devoirs sous l'appellation « Notre-Dame-Aux-Neiges ». L'accueil est orienté vers le soutien scolaire des enfants du quartier, dont environ 80% proviennent de l'école fondamentale Congrès Dachsbeck.`,
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Deux axes complémentaires :</h4>
          {eddPageContent.axes.map((axe, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-medium text-sm mb-1">{axe.title}</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {axe.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mb-2">Ateliers proposés :</h4>
          <ul className="list-disc list-inside space-y-1">
            {eddPageContent.ateliers.map((atelier, idx) => (
              <li key={idx} className="text-sm">
                {atelier.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/ecole-de-devoirs',
    img: '/assets/operateur/ecole-de-devoirs.png',
  },
  {
    icon: '',
    title: "Opérateur d'Economie Sociale",
    description:
      "Espace Cultures & Développement est reconnue comme entreprise sociale d'insertion mandatée et agréée ESD. Dispositif d'insertion socioprofessionnelle centré sur le métier d'animateur·trice – médiateur·trice numérique.",
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Missions principales :</h4>
          <ul className="list-disc list-inside space-y-1">
            {esdPageContent.metier.missions.map((mission, idx) => (
              <li key={idx} className="text-sm">
                {mission}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Dimensions du parcours :</h4>
          <ul className="list-disc list-inside space-y-1">
            {esdPageContent.parcours.dimensions.map((dim, idx) => (
              <li key={idx} className="text-sm">
                {dim.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Publics cibles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {esdPageContent.publicCible.publics.map((publicItem, idx) => (
              <li key={idx} className="text-sm">
                {publicItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/economie-sociale',
    img: '/assets/operateur/economie-sociale.png',
  },
  {
    icon: '',
    title: "Opérateur d'EPN labelisé",
    description:
      "Opérateur d'inclusion numérique labellisé en Région bruxelloise et détenteur du label fédéral Connectoo. Dispositif entièrement mobile et itinérant, fonctionnant à la demande. Ce dispositif permet de proposer des séances d'initiation, de formation et de perfectionnement.",
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Critères du label EPNM :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.label.criteres.items.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Équipement mobile :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.equipement.items.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Publics cibles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.publicsCibles.publics.map((publicItem, idx) => (
              <li key={idx} className="text-sm">
                {publicItem}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Label Connectoo :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.connectoo.attestations.map((attestation, idx) => (
              <li key={idx} className="text-sm">
                {attestation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/epn',
    img: '/assets/operateur/epnm.png',
  },
  {
    icon: '',
    title: 'Opérateur de formation TS',
    description:
      'ECD est un opérateur de formation agréé dans le secteur des Titres-Services à Bruxelles, à Wallonie et reconnu par le Fonds sectoriel, Form TS. Formations adaptées aux aide-ménagères, encadrants et équipes administratives.',
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Compétences numériques professionnelles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.competencesNumeriques.items.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">
            Compétences de bien-être, ergonomie et prévention :
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.competencesBienEtre.items.map((item, idx) => (
              <li key={idx} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Impact :</h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.impact.contributions.map((contribution, idx) => (
              <li key={idx} className="text-sm">
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/formation-titres-services',
    img: '/assets/operateur/formation-titres-services.png',
  },
]

export function ValueCards() {
  return (
    <section className="overflow-visible py-12 px-4 container mx-auto w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-visible">
          {items.map((item, index) => (
            <article key={item.title + index} className="relative overflow-visible group flex">
              <div className="relative rounded-xl bg-white group-hover:bg-secondary-800 group-hover:text-secondary-100 p-6 shadow-md transition-all duration-300 flex flex-col w-full h-full">
                {item.img && (
                  <div className="mb-4 relative w-full h-32 rounded-lg overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-primary-600 opacity-40 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                )}
                <div className="flex flex-col justify-between gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold uppercase text-center tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex-1">
                    <p className="p-2 text-sm leading-relaxed text-justify">{item.description}</p>
                  </div>
                  <Link href={item.link}>
                    <button
                      type="button"
                      className="mt-2 cursor-pointer w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-primary-100 text-primary-900 hover:bg-primary-200 hover:text-primary-900 transition-all group-hover:bg-white/20 group-hover:text-secondary-100 duration-300"
                    >
                      Lire plus
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
