export function ValueCards() {
  const items = [
    { icon: '', title: 'Les engagements sociaux', text: 'Texte détaillé...' },
    { icon: '', title: 'Les engagements culturels', text: 'Texte détaillé...' },
    { icon: '', title: 'Les engagements politiques', text: 'Texte détaillé...' },
    { icon: '', title: 'Les engagements scientifiques', text: 'Texte détaillé...' },
  ]

  return (
    <section className="overflow-visible py-12 px-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-visible">
        {items.map((item) => (
          <article key={item.title} className="relative overflow-visible">
            <div className="relative cursor-pointer rounded-xl hover:rounded-b-none bg-white p-6 shadow-md group gap-0 transition-all duration-200 ease-in-out">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white text-lg">
                  {item.icon}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{item.title}</h3>
              </div>

              <div
                className="
                  absolute left-0 right-0 top-full
                  rounded-xl group-hover:rounded-t-none bg-white p-4 shadow-2xl
                  opacity-0 -translate-y-5 pointer-events-none
                  transition-all duration-300 ease-in-out
                  group-hover:opacity-100 group-hover:translate-y-0 z-50
                "
              >
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
