import 'dotenv/config'
import { migrateTitresService } from './migrate-titres-service'
import { migrateEcoleDevoirs } from './migrate-ecole-devoirs'
import { migrateSiteSettings } from './migrate-site-settings'
import { migrateNavigation } from './migrate-navigation'
import { migrateInclusionNumeriquePages } from './migrate-pages-inclusion-numerique'
import { migrateHomepage } from './migrate-homepage'
import { migrateNosServicesPages } from './migrate-nos-services'
import { migrateLegalPages } from './migrate-legal-pages'
import { migrateAboutPages } from './migrate-about-pages'
import { migrateContactPage } from './migrate-contact-page'
import { migrateTitresServiceCataloguePage } from './migrate-titres-service-catalogue-page'
import { migrateEpnmTestPage } from './migrate-epnm-test-page'
import { migrateMiscContent } from './migrate-misc-content'

async function main() {
  await migrateTitresService()
  await migrateEcoleDevoirs()
  await migrateSiteSettings()
  await migrateNavigation()
  await migrateInclusionNumeriquePages()
  await migrateHomepage()
  await migrateNosServicesPages()
  await migrateLegalPages()
  await migrateAboutPages()
  await migrateContactPage()
  await migrateTitresServiceCataloguePage()
  await migrateEpnmTestPage()
  await migrateMiscContent()
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})

