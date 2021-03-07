import express from 'express'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import routes from './routes/index'

const app = express()

const corsOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(compression())
app.use(helmet())

app.use('/', routes)
// app.listen(4000, () => {
//   console.log('port 4000')
// })

export default app
