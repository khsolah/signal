import { IProduct } from "../../common/interface"

const get = (): Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: '0',
        name: 'name',
        subtitle: 'subtitle',
        price: 150,
        description: 'none',
        buttonText: ''
      }
    ])
    // reject(new Error())
  })
}

export default {
  get
}

