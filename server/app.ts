import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

const app = express()

import routes from './routes/index'

app.use(bodyParser.json())
app.use(cors())
app.use(compression())
app.use(helmet())

app.use('/', routes)
// app.listen(4000, () => {
//   console.log('port 4000')
// })

export default app