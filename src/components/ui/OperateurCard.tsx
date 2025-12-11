'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function ValueCards() {
  const items = [
    {
      icon: '',
      title: 'Opérateur en école de devoirs',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
      link: '',
      img: '',
    },
    {
      icon: '',
      title: "Opérateur d'Economie Sociale",
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
      link: '',
      img: '',
    },
    {
      icon: '',
      title: "Opérateur d'EPN labelisé",
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
      link: '',
      img: '',
    },
    {
      icon: '',
      title: 'Opérateur de formation de Titres Services',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
      link: '',
      img: '',
    },
  ]

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
              <div className="relative rounded-xl hover:rounded-b-none h-78 bg-white hover:bg-secondary-800 hover:text-secondary-100 p-6 shadow-md gap-0 transition-all duration-200 ease-in cursor-pointer group-hover:cursor-auto">
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white text-lg shrink-0">
                      {item.icon}
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wide">{item.title}</h3>
                  </div>
                  <div>
                    <p className="p-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis.
                      Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni
                      nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!
                    </p>
                  </div>
                </div>

                {/* mobile: in-flow accordion */}
                {isMobile && (
                  <div
                    className={`mt-3 text-sm bg-white hover:bg-secondary-800 hover:text-secondary-100  leading-relaxed transition-all ease-in duration-200 ${
                      selectedCard ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {item.text}
                  </div>
                )}

                {/* desktop: overlay dropdown */}
                {!isMobile && (
                  <div
                    className="absolute left-0 right-0 top-full
                    rounded-xl group-hover:rounded-t-none bg-white group-hover:bg-secondary-800 group-hover:text-secondary-100 p-6 shadow-2xl
                    opacity-0 -translate-y-5 pointer-events-none
                    transition-all duration-200 ease-in z-20
                    group-hover:opacity-100 group-hover:translate-y-0 flex flex-col gap-6 group-hover:pointer-events-auto"
                  >
                    <p className="text-sm  leading-relaxed">{item.text}</p>
                    <Link
                      className="text-secondary-800 hover:text-secondary-900 p-2 px-4 hover:bg-secondary-200 bg-primary-100 rounded-2xl"
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
