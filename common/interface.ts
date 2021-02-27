export interface IBanner {
  name: string;
  image: ImageData;
  buttonPosition: 'left' | 'right';
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface IProductAbstract {
  id: string
  name: string
  subtitle?: string
  price: number
  image?: ImageData
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

export interface ICartOfProduct {
  name: string
  price: number
  amount: number
}
