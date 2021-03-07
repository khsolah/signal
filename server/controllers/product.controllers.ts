import { Request, Response } from 'express'
import { IProduct, IProductAbstract } from '../../common/interface'
import modules from '../modules/product.modules'

const get = (req: Request, res: Response) => {
  modules
    .get(
      req.query.category as string | undefined,
      req.query.product as string | undefined
    )
    .then((response: IProductAbstract[] | IProduct) => {
      res.json(response)
    })
    .catch(
      ({
        status,
        statusMessage,
      }: {
        status: number
        statusMessage: string
      }) => {
        res.status(status)
        res.statusMessage = statusMessage
        res.send()
      }
    )
}

export default {
  get,
}
