export interface IProductAbstract {
  id: string
  name: string
  subtitle?: string
  price: number,
  images: string[]
  hoveredImage?: ImageData
  tag?: string
  tagVariant?: string
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

export interface IProduct extends IProductAbstract {
  description: string
  buttonText: string
}

export interface Home {
  featuredProducts: IProductAbstract[],
}