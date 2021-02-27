import { Request, Response } from 'express'
import { IProduct } from '../../components/Product/IProduct'
import modules from '../modules/product.modules'

const get = (req: Request, res: Response) => {
  modules.get().then((response: IProduct[]) => {
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