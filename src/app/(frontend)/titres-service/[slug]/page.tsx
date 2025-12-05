'use client'

import { modules } from '@/lib/titresServices'

import { useParams } from 'next/navigation'

const Page = () => {
  const params = useParams()
  const currentModule = modules.find((m) => m.slug === params.slug)
  console.log(currentModule)

  return (
    <section className="container mx-auto py-12 flex flex-col-reverse lg:flex-row lg:gap-12">
      <div className="flex flex-col items-center justify-center gap-12 lg:w-3/4">
        <div className="space-y-4 text-center bg-primary-100 rounded-2xl p-6">
          <h2 className="text-3xl text-primary-800 font-semibold">Course Title</h2>
          <p>
            Course description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
            animi consectetur consequuntur delectus, deserunt eligendi et excepturi inventore magni
            nostrum odit officiis quidem rem reprehenderit sapiente temporibus vel voluptates.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl text-secondary-700 font-semibold">Objectif</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore fugit hic omnis
            praesentium. Accusamus accusantium aliquam aut, cupiditate eaque enim est expedita ipsum
            iure officiis, omnis ratione, sit soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut culpa cumque
            dolores eligendi ex explicabo fugit ipsam iure labore laudantium numquam odio,
            perspiciatis sapiente similique voluptates voluptatum. Quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque beatae culpa
            dolorum esse exercitationem facilis impedit laborum mollitia nemo numquam, quasi
            quibusdam quod repellendus, totam unde vero? Doloribus, rem.
          </p>
        </div>{' '}
        <div className="space-y-4">
          <h3 className="text-2xl text-secondary-700 font-semibold">Objectif</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore fugit hic omnis
            praesentium. Accusamus accusantium aliquam aut, cupiditate eaque enim est expedita ipsum
            iure officiis, omnis ratione, sit soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut culpa cumque
            dolores eligendi ex explicabo fugit ipsam iure labore laudantium numquam odio,
            perspiciatis sapiente similique voluptates voluptatum. Quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque beatae culpa
            dolorum esse exercitationem facilis impedit laborum mollitia nemo numquam, quasi
            quibusdam quod repellendus, totam unde vero? Doloribus, rem.
          </p>
        </div>{' '}
        <div className="space-y-4">
          <h3 className="text-2xl text-secondary-700 font-semibold">Objectif</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore fugit hic omnis
            praesentium. Accusamus accusantium aliquam aut, cupiditate eaque enim est expedita ipsum
            iure officiis, omnis ratione, sit soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores aut culpa cumque
            dolores eligendi ex explicabo fugit ipsam iure labore laudantium numquam odio,
            perspiciatis sapiente similique voluptates voluptatum. Quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque beatae culpa
            dolorum esse exercitationem facilis impedit laborum mollitia nemo numquam, quasi
            quibusdam quod repellendus, totam unde vero? Doloribus, rem.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 p-6 rounded-2xl h-full bg-secondary-200/80 lg:w-1/4 lg:sticky lg:top-20">
        {modules.map((module) => (
          <div key={module.slug}>
            <h3>Infos</h3>
            <div>
              <h4>{module.publicVise}</h4>
              <p>Aide-ménagères</p>
            </div>
            <div>
              <h4>Approbation(s)</h4>
              <p>Bruxelles : E1605/B (17/05/2024)</p>
            </div>
            <div>
              <h4>Durée</h4>
              <p>4 heures</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page
