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
      <b-row id="products-list">
        <b-col
          :cols="6"
          :md="3"
          v-for="product in ProductsList"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="auto mx-auto my-4">
          <b-pagination
            v-model="currentPage"
            :total-rows="data.products.length"
            :per-page="perPage"
            aria-controls="products-list"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </article>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
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
    let background!: ImageData
    switch (root.$route.params.category) {
      case 'Keyboards':
        background = require('~/assets/images/mechanical-keyboard.jpeg')
        break
      case 'Keycaps':
        background = require('~/assets/images/keycaps.jpg')
        break
      case 'Switches':
        background = require('~/assets/images/switches.png')
        break
      case 'DIY Kits':
        background = require('~/assets/images/diy-kits.jpg')
        break
      default:
        background = require('~/assets/images/all.jpeg')
      // Todo::
      // handle exception
      // route push to 404 page
    }
    const top = reactive<topData>({
      title: root.$route.params.category,
      background: background,
    })
    const data = reactive<{ products: IProductAbstract[] }>({
      products: [],
    })

    const currentPage = ref<number>(1)
    // Todo:: modify perPage to 12
    const perPage = 4

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
        {
          id: 'gmk-pos-2',
          name: 'GMK Posh',
          price: 158,
          image: require('~/assets/images/carousel-banner/gmk-posh.jpg'),
        },
        {
          id: 'gmk-dots-2',
          name: 'GMK Dots',
          price: 160,
          image: require('~/assets/images/carousel-banner/gmk-dots.jpg'),
        },
        {
          id: 'gmk-rainy-day-2',
          name: 'GMK Rainy Day',
          price: 159,
          image: require('~/assets/images/carousel-banner/gmk-rainyday.png'),
        },
        {
          id: 'gmk-amethyst-2',
          name: 'GMK Amethyst',
          price: 165,
          image: require('~/assets/images/carousel-banner/gmk-amethyst.png'),
        },
      ]
    })
    const ProductsList = computed(() =>
      data.products.slice(
        (currentPage.value - 1) * perPage,
        currentPage.value * perPage
      )
    )

    watch(() => currentPage.value, () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 230,
        left: 0
      })
    })

    return {
      top,
      data,
      ProductsList,
      currentPage,
      perPage,
    }
  },
})
</script>

<style lang="scss" scoped></style>
