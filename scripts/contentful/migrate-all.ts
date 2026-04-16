import 'dotenv/config'
import { migrateTitresService } from './migrate-titres-service'
import { migrateEcoleDevoirs } from './migrate-ecole-devoirs'
import { migrateSiteSettings } from './migrate-site-settings'
import { migrateNavigation } from './migrate-navigation'
import { migrateInclusionNumeriquePages } from './migrate-pages-inclusion-numerique'
import { migrateHomepage } from './migrate-homepage'

async function main() {
  await migrateTitresService()
  await migrateEcoleDevoirs()
  await migrateSiteSettings()
  await migrateNavigation()
  await migrateInclusionNumeriquePages()
  await migrateHomepage()
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})

