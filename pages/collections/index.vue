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
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
} from '@nuxtjs/composition-api'
import { IProductAbstract } from '~/components/Product/IProduct'

interface topData {
  title?: string
  background?: ImageData
}
export default defineComponent({
  name: 'Collections',
  setup(prop, { root }) {
    const top = reactive<topData>({
      title: 'Collections',
      background: require('~/assets/images/mechanical-keyboard.jpg'),
    })
    const data = reactive<{ products: IProductAbstract[] }>({
      products: [],
    })

    onMounted(() => {
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
    })

    return {
      top,
      data,
    }
  },
})
</script>

<style lang="scss" scoped></style>
