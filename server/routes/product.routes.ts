import express from 'express'
import controllers from '../controllers/product.controllers'

const router = express.Router()

router.route('/').get(controllers.get)
console.log('api/product')
// router.get('', controllers.get)

export default router