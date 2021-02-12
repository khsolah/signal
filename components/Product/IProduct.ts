export interface IProductAbstract {
  id: string
  name: string
  subtitle?: string
  price: number
  image: ImageData
  hoveredImage?: ImageData
  tag?: string
}

export interface ICategory {
  title: string
  image?: ImageData
  to: {
    path: string
    name?: string
    query?: Object
    params?: Object
  }
}