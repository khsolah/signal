import express from 'express'
import controllers from '../controllers/index.controllers'

const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('now in api/home page')
// })
router.route('/').get(controllers.get)

export default router