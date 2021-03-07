import { Request, Response } from 'express'
import { Home } from '../common/interface'
import modules from '../modules/home.modules'

const get = (req: Request, res: Response):void => {
  modules.get().then((response: Home) => {
    res.send(response)
  }).catch(error => {
    console.log(error)
    res.statusCode = 500
    res.statusMessage = 'An internal error has occurred!'
    res.send({
      error: 'An internal error has occurred!'
    })
  })
}

export default {
  get
}