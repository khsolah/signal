import { IProductAbstract } from '../../common/interface'

const get = (category?: string): Promise<IProductAbstract[]> => {
  return new Promise((resolve, reject) => {
    if (category) {
      let data: IProductAbstract[] = []
      switch (category) {
        case 'Keyboards':
          data = [
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
          ]
          break
        case 'Keycaps':
          data = [
            {
              id: 'gmk-dots-keycaps',
              name: 'GMK Dots',
              price: 1600,
              image: '/images/carousel-banner/gmk-dots.jpg',
            },
          ]
          break
        case 'Switches':
          data = [{
            id: 'gmk-dots-switches',
            name: 'GMK Dots',
            price: 160,
            image: '/images/carousel-banner/gmk-dots.jpg',
          },]
          break
        default:
          data = [
            {
              id: 'gmk-dots-default',
              name: 'GMK Dots',
              price: 160,
              image: '/images/carousel-banner/gmk-dots.jpg',
            },
          ]
          break
      }

      resolve(data)
    } else {
      resolve([
        {
          id: '0',
          name: 'name',
          subtitle: 'subtitle',
          price: 150,
        },
      ])
    }
  })
}

export default {
  get,
}
