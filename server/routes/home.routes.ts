import express from 'express'
import controllers from '../controllers/home.controllers'

const router = express.Router()

router.route('/').get(controllers.get)

export default router