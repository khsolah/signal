import express from 'express'
import home from './home.routes'
import product from './product.routes'

const router = express.Router()

router.use('/home', home)
router.use('/product', product)

export default router