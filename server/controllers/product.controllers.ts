import { Request, Response } from 'express'
import { IProductAbstract } from '../../common/interface'
import modules from '../modules/product.modules'

const get = (req: Request, res: Response) => {
  modules.get((req.query.category) as string|undefined).then((response: IProductAbstract[]) => {
    res.json(response)
  }).catch((error: Error) => {
    console.error(error)
    res.status(500)
    res.statusMessage = 'An internal error has occurred!'
    res.send()
  })
}

export default {
  get
}