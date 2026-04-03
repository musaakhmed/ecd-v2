'use client'

import type React from 'react'
import {
  eddPageContent,
  epnPageContent,
  esdPageContent,
  titresServicesPageContent,
} from '@/lib/content/pages/about-content'

export type ValueCardItem = {
  icon: string
  title: string
  description: string
  expandedContent: React.ReactNode
  link: string
  img: string
}

export const valueCardsItems: ValueCardItem[] = [
  {
    icon: '',
    title: 'Opérateur en École de Devoirs',
    description: `Reconnu par l'ONE comme opérateur d'École de Devoirs « Notre-Dame-Aux-Neiges ». Soutien scolaire pour les enfants du quartier, majoritairement de l'école Congrès Dachsbeck.`,
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
    img: '/assets/operateur/ecole-de-devoirs.jpg',
  },
  {
    icon: '',
    title: "Opérateur d'Economie Sociale",
    description:
      "Reconnue comme entreprise sociale d'insertion (ESD). Insertion socioprofessionnelle centrée sur l'animation et la médiation numérique.",
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
    img: '/assets/operateur/ESD/public-cible-partenariat.jpg',
  },
  {
    icon: '',
    title: "Opérateur d'EPN labelisé",
    description:
      'Labellisé en Région bruxelloise et détenteur du label Connectoo. Dispositif mobile et itinérant : initiation, formation et perfectionnement.',
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
      'Opérateur de formation agréé Titres-Services (Bruxelles, Wallonie, Form TS). Formations pour aide-ménagères, encadrants et équipes administratives.',
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
    img: '/assets/operateur/formation-titres-services.jpg',
  },
]
