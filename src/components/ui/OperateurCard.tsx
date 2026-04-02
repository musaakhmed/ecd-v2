'use client'

import Image from 'next/image'
import Link from 'next/link'
import { valueCardsItems } from '@/lib/content/components/valueCardsData'

export function ValueCards() {
  return (
    <section className="overflow-visible py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className=" mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-visible">
          {valueCardsItems.map((item, index) => (
            <article key={item.title + index} className="relative overflow-visible group flex">
              <div className="relative rounded-xl bg-azure-700 group-hover:bg-azure-800 text-white shadow-md transition-all duration-300 flex flex-col w-full h-full overflow-hidden">
                {item.img && (
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-azure-900/25 group-hover:bg-azure-900/10 transition-colors duration-300" />
                  </div>
                )}
                <div className="flex flex-col justify-between gap-2 flex-1 p-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-6xl uppercase text-center tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex-1">
                    <p lang="fr" className="p-3 hyphens-auto text-justify overflow-hidden">
                      <span className="line-clamp-3">{item.description}</span>
                    </p>
                  </div>
                  <Link href={item.link}>
                    <button
                      type="button"
                      className="mt-2 cursor-pointer w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-azure-200/25 text-white hover:bg-azure-100/80 hover:text-azure-800 transition-all duration-300 border border-white/25"
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
