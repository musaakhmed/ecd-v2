import 'dotenv/config'
import { migrateTitresService } from './migrate-titres-service'

migrateTitresService().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
