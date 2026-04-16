import React from 'react'
import { mentionsLegalesContent } from '@/lib/content/legalPagesContent'

export const metadata = mentionsLegalesContent.metadata

const Page = () => {
  return (
    <section className="min-h-[50vh] py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary-600">{mentionsLegalesContent.pageTitle}</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {(mentionsLegalesContent.sections ?? []).map((section) => (
            <section key={section.id}>
              <h2 className="text-2xl font-semibold mb-4 text-primary-700">{section.title}</h2>
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page



