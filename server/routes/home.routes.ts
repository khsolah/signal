import express from 'express'
import controllers from '../controllers/index.controllers'

const router = express.Router()

router.route('/').get(controllers.get)

export default router