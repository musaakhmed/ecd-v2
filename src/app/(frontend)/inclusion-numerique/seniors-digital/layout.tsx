import { inclusionNumeriquePageSeo } from '@/lib/content/pages/inclusionNumeriqueData'
import { createPageMetadata } from '@/lib/seo/pageMetadata'

export const metadata = createPageMetadata(inclusionNumeriquePageSeo.seniorsDigital)

export default function SeniorsDigitalLayout({ children }: { children: React.ReactNode }) {
  return children
}
