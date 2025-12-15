'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const items = [
  {
    icon: '',
    title: 'Opérateur en École de Devoirs',
    description: `Espace Cultures & Développement est reconnu par l'ONE comme opérateur d'École de Devoirs sous l'appellation « Notre-Dame-Aux-Neiges ». L'accueil est orienté vers le soutien scolaire des enfants du quartier, dont environ 80% proviennent de l'école fondamentale Congrès Dachsbeck.`,
    text: '',
    link: '/a-propos/ecole-de-devoirs',
    img: '',
  },
  {
    icon: '',
    title: "Opérateur d'Economie Sociale",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    text: '',
    link: '',
    img: '',
  },
  {
    icon: '',
    title: "Opérateur d'EPN labelisé",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    text: '',
    link: '',
    img: '',
  },
  {
    icon: '',
    title: 'Opérateur de formation de Titres Services',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    text: '',
    link: '',
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
                    <p className="pt-1 text-secondary-900">{item.text}</p>

                    <Link
                      className=" mt-3 text-secondary-900 px-4 py-2 bg-secondary-200 rounded-2xl"
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
                      flex flex-col gap-6
                    "
                  >
                    <p className="text-sm leading-relaxed">{item.text}</p>

                    <Link
                      className="text-secondary-800 hover:text-secondary-900 px-4 py-2 hover:bg-secondary-200 bg-primary-100 rounded-2xl"
                      href={item.link}
                    >
                      Savoir plus
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
