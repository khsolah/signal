<template>
  <article id="collection">
    <!-- <SideMenu /> -->
    <header id="collection-header" class="collection__header mb-5">
      <img :src="top.background" alt="" class="collection__header--image" />
      <h1 class="collection__header--title">
        {{ top.title }}
      </h1>
    </header>
    <b-container fluid>
      <b-row>
        <b-col
          :cols="6"
          :md="3"
          v-for="product in data.products"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api'
import { IProductAbstract } from '~/components/Product/IProduct'

interface topData {
  title?: string
  background?: ImageData
}
export default defineComponent({
  name: 'Collections',
  setup(prop, { root }) {
    const top = reactive<topData>({
      title: '',
      background: undefined,
    })
    let data = reactive<{ products: IProductAbstract[] }>({ products: [] })

    watch(
      () => root.$route.query.category,
      () => {
        if (typeof root.$route.query.category === 'string') {
          // config category title and background image
          top.title = root.$route.query.category
          console.log(root.$route.query)
          switch (root.$route.query.category) {
            case 'Keyboards':
              top.background = require('~/assets/images/mechanical-keyboard.png')
              break
            case 'Keycaps':
              top.background = require('~/assets/images/keycaps.jpg')
              break
            case 'Switches':
              top.background = require('~/assets/images/switches.png')
              break
            case 'DIY Kits':
              top.background = require('~/assets/images/diy-kits.jpg')
              break
          }
        } else {
          // all product
          top.title = 'Collections'
          top.background = require('~/assets/images/mechanical-keyboard.jpg')
        }

        // call api to get product data
        if (data.products.length === 0) {
          data.products = [
            {
              id: 'gmk-dots',
              name: 'GMK Dots',
              price: 160,
              image: require('~/assets/images/carousel-banner/gmk-dots.jpg'),
            },
            {
              id: 'gmk-posh',
              name: 'GMK Posh',
              price: 158,
              image: require('~/assets/images/carousel-banner/gmk-posh.jpg'),
            },
            {
              id: 'gmk-amethyst',
              name: 'GMK Amethyst',
              price: 165,
              image: require('~/assets/images/carousel-banner/gmk-amethyst.png'),
            },
            {
              id: 'gmk-rainy-day',
              name: 'GMK Rainy Day',
              price: 159,
              image: require('~/assets/images/carousel-banner/gmk-rainyday.png'),
            },
          ]
        } else {
          data.products.length = 0
          data.products = [
            {
              id: 'gmk-posh',
              name: 'GMK Posh',
              price: 158,
              image: require('~/assets/images/carousel-banner/gmk-posh.jpg'),
            },
            {
              id: 'gmk-amethyst',
              name: 'GMK Amethyst',
              price: 165,
              image: require('~/assets/images/carousel-banner/gmk-amethyst.png'),
            },
            {
              id: 'gmk-rainy-day',
              name: 'GMK Rainy Day',
              price: 159,
              image: require('~/assets/images/carousel-banner/gmk-rainyday.png'),
            },
            {
              id: 'gmk-dots',
              name: 'GMK Dots',
              price: 160,
              image: require('~/assets/images/carousel-banner/gmk-dots.jpg'),
            },
          ]
        }
      },
      {
        immediate: true,
      }
    )

    return {
      top,
      data,
    }
  },
})
</script>

<style lang="scss" scoped></style>
