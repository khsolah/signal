import express from 'express'
import bodyParser from 'body-parser'
const app = express()

import product from './routes/product.routes'

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('this is api page')
})

// app.use(product)

app.use('/apitest', product)
app.listen(4000, () => {
  console.log('port 4000')
})


module.exports = app