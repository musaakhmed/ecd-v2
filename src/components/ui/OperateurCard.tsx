'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  eddPageContent,
  esdPageContent,
  epnPageContent,
  titresServicesPageContent,
} from '@/lib/about-content'

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
                  <li key={pIdx} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold mb-2">Ateliers proposés :</h4>
          <ul className="list-disc list-inside space-y-1">
            {eddPageContent.ateliers.map((atelier, idx) => (
              <li key={idx} className="text-sm">{atelier.title}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/ecole-de-devoirs',
    img: '',
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
              <li key={idx} className="text-sm">{mission}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Dimensions du parcours :</h4>
          <ul className="list-disc list-inside space-y-1">
            {esdPageContent.parcours.dimensions.map((dim, idx) => (
              <li key={idx} className="text-sm">{dim.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Publics cibles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {esdPageContent.publicCible.publics.map((publicItem, idx) => (
              <li key={idx} className="text-sm">{publicItem}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/economie-sociale',
    img: '',
  },
  {
    icon: '',
    title: "Opérateur d'EPN labelisé",
    description:
      "Opérateur d'inclusion numérique labellisé en Région bruxelloise et détenteur du label fédéral Connectoo. Dispositif entièrement mobile et itinérant, fonctionnant à la demande.",
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Critères du label EPNM :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.label.criteres.items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Équipement mobile :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.equipement.items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Publics cibles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.publicsCibles.publics.map((publicItem, idx) => (
              <li key={idx} className="text-sm">{publicItem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Label Connectoo :</h4>
          <ul className="list-disc list-inside space-y-1">
            {epnPageContent.connectoo.attestations.map((attestation, idx) => (
              <li key={idx} className="text-sm">{attestation}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/epn',
    img: '',
  },
  {
    icon: '',
    title: 'Opérateur de formation de Titres Services',
    description:
      "ECD est un opérateur de formation agréé dans le secteur des Titres-Services à Bruxelles, à Wallonie et reconnu par le Fonds sectoriel, Form TS. Formations adaptées aux aide-ménagères, encadrants et équipes administratives.",
    expandedContent: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Compétences numériques professionnelles :</h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.competencesNumeriques.items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Compétences de bien-être, ergonomie et prévention :</h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.competencesBienEtre.items.map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Impact :</h4>
          <ul className="list-disc list-inside space-y-1">
            {titresServicesPageContent.impact.contributions.map((contribution, idx) => (
              <li key={idx} className="text-sm">{contribution}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    link: '/a-propos/formation-titres-services',
    img: '',
  },
]

export function ValueCards() {
  const [cardOpen, setCardOpen] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section className="overflow-visible py-12 px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-visible">
        {items.map((item, index) => {
          const selectedCard = cardOpen === index

          return (
            <article
              key={item.title + index}
              className="relative overflow-visible group"
              onClick={() => {
                if (!isMobile) return
                setCardOpen(selectedCard ? null : index)
              }}
            >
              <div className="relative rounded-xl bg-white min-h-76 hover:bg-secondary-800 group-hover:rounded-b-none hover:text-secondary-100 p-6 shadow-md transition-all duration-300 ease-in cursor-pointer">
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white text-lg shrink-0">
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">{item.title}</h3>
                  </div>
                  <div>
                    <p className="p-2 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* mobile: in-flow accordion */}
                {isMobile && (
                  <div
                    className={`text-sm leading-relaxed overflow-hidden transition-all duration-300 bg-white w-full flex flex-col gap-4 ${
                      selectedCard ? 'min-h-36 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <div className="pt-1 text-secondary-900">{item.expandedContent}</div>

                    <Link
                      className="mt-3 text-secondary-900 px-4 py-2 bg-secondary-200 rounded-2xl text-center"
                      href={item.link}
                    >
                      En savoir plus
                    </Link>
                  </div>
                )}

                {/* desktop: overlay dropdown */}
                {!isMobile && (
                  <div
                    className="
                      absolute left-0 right-0 top-full
                      rounded-xl bg-white group-hover:bg-secondary-800 group-hover:text-secondary-100 p-6 shadow-2xl
                      opacity-0 -translate-y-5 pointer-events-none
                      transition-all duration-300 ease-in z-20 group-hover:rounded-t-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      flex flex-col gap-6 max-h-[600px] overflow-y-auto
                    "
                  >
                    <div className="text-sm leading-relaxed">{item.expandedContent}</div>

                    <Link
                      className="text-secondary-800 hover:text-secondary-900 px-4 py-2 hover:bg-secondary-200 bg-primary-100 rounded-2xl text-center"
                      href={item.link}
                    >
                      En savoir plus
                    </Link>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
