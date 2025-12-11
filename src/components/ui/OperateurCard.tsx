'use client'

import { useState } from 'react'

export function ValueCards() {
  const items = [
    {
      icon: '',
      title: 'Opérateur en école de devoirs',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    },
    {
      icon: '',
      title: "Opérateur d'Economie Sociale",
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    },
    {
      icon: '',
      title: "Opérateur d'EPN labelisé",
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    },
    {
      icon: '',
      title: 'Opérateur de formation de Titres Services',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, esse omnis. Consectetur corporis dolores eligendi, excepturi expedita illum, labore magni nobis officiis pariatur porro, quasi sint vel vero voluptate voluptatem!',
    },
  ]

  const [cardOpen, setCardOpen] = useState<number | null>(null)

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  return (
    <section className="overflow-visible py-12 px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-visible">
        {items.map((item, index) => {
          const selectedCard = cardOpen === index
          return (
            <article
              key={item.title + index}
              className="relative overflow-visible"
              onClick={() => {
                if (!isMobile) return
                setCardOpen(selectedCard ? null : index)
              }}
            >
              <div className="relative cursor-pointer rounded-xl hover:rounded-b-none bg-white p-6 shadow-md group gap-0 transition-all duration-200 ease-in-out">
                <div className="flex flex-col justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white text-lg">
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

                <div
                  className={`
                    absolute left-0 right-0 top-full
                    rounded-xl group-hover:rounded-t-none bg-white p-6 shadow-2xl
                    opacity-0 -translate-y-5 pointer-events-none
                    transition-all duration-300 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0 z-50 flex flex-col gap-6
                    ${isMobile ? (selectedCard ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden') : ''}
                    `}
                >
                  <p className="text-sm leading-relaxed">{item.text}</p>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
