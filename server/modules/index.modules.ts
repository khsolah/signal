import { Home } from '../common/interface'

const get = (): Promise<Home> => {
  return new Promise((resolve, reject) => {
    resolve({
      featuredProducts: [
        {
          id: 'gmk-dots',
          name: 'GMK Dots',
          price: 160,
          image: '/images/carousel-banner/gmk-dots.jpg',
        },
        {
          id: 'gmk-posh',
          name: 'GMK Posh',
          price: 158,
          image: '/images/carousel-banner/gmk-posh.jpg',
        },
        {
          id: 'gmk-amethyst',
          name: 'GMK Amethyst',
          price: 165,
          image: '/images/carousel-banner/gmk-amethyst.png',
        },
        {
          id: 'gmk-rainy-day',
          name: 'GMK Rainy Day',
          price: 159,
          image: '/images/carousel-banner/gmk-rainyday.png',
        },
      ],
    })
  })
}

export default {
  get,
}
