import { Home } from '../common/interface'

const get = (): Promise<Home> => {
  return new Promise((resolve, reject) => {
    resolve({
      featuredProducts: [
        {
          id: '1',
          name: 'GMK Dots',
          price: 130,
          images: [
            '/images/keycaps/dots/dots-1.jpg',
            '/images/keycaps/dots/dots-2.jpg',
            '/images/keycaps/dots/dots-3.jpg',
            '/images/keycaps/dots/dots-4.jpg',
            '/images/keycaps/dots/dots-5.jpg',
          ],
          tag: 'group buy',
          tagVariant: 'warning',
        },
        {
          id: '3',
          name: 'GMK Amethyst',
          price: 160,
          images: [
            '/images/keycaps/amethyst/amethyst-1.jpg',
            '/images/keycaps/amethyst/amethyst-2.jpg',
          ],
          tag: 'group buy',
          tagVariant: 'warning',
        },
        {
          id: '4',
          name: 'Zealios V2 Switches (Tactile)',
          price: 10,
          images: [
            '/images/switches/zealios/zealios-1.webp',
            '/images/switches/zealios/zealios-2.webp',
          ],
          tag: 'group buy',
          tagVariant: 'warning',
        },
        {
          id: '5',
          name: 'KBD67 DIY Kits',
          price: 230,
          images: [
            '/images/diy/kbd67/kbd67-1.webp',
            '/images/diy/kbd67/kbd67-2.webp',
            '/images/diy/kbd67/kbd67-3.webp',
          ],
          tag: 'group buy',
          tagVariant: 'warning',
        },
      ],
    })
  })
}

export default {
  get,
}
