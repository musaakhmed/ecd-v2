import { inclusionNumeriquePageSeo } from '@/lib/content/pages/inclusionNumeriqueData'
import { createPageMetadata } from '@/lib/seo/pageMetadata'

export const metadata = createPageMetadata(inclusionNumeriquePageSeo.seniorsDigitalOld, {
  index: false,
})

export default function SeniorsDigitalOldLayout({ children }: { children: React.ReactNode }) {
  return children
}
