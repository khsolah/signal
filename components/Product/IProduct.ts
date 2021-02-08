export interface IProductAbstract {
  id: string
  name: string
  subtitle?: string
  price: number
  image: ImageData
  hoveredImage?: ImageData
  tag?: string
}