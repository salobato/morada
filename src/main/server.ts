import 'module-alias/register'
import { app } from '@app/main/config/app'

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(`\n   Server ready at http://localhost:${port}`)
)
