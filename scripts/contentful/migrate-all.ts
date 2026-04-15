import 'dotenv/config'
import { migrateTitresService } from './migrate-titres-service'
import { migrateEcoleDevoirs } from './migrate-ecole-devoirs'

async function main() {
  await migrateTitresService()
  await migrateEcoleDevoirs()
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})

