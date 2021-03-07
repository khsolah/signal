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
          v-for="item in ProductsList.value"
          :key="item.id"
        >
          <ProductCard :product="item" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="auto mx-auto my-4">
          <b-pagination
            v-model="currentPage.value"
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
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import { IProductAbstract } from '~/common/interface'

interface topData {
  title?: string
  background?: ImageData
}

export default defineComponent({
  name: 'Collections',
  async asyncData(context) {
    console.log(context.route.params)
    const data = reactive<{ products: IProductAbstract[] }>({ products: [] })
    const response = await context.$axios.get(
      `http://localhost:4000/api/product?category=${context.route.params.category}`
    )

    data.products = response.data

    const currentPage = ref<number>(1)
    const perPage = 4

    const ProductsList = computed(() =>
      data.products.slice(
        (currentPage.value - 1) * perPage,
        currentPage.value * perPage
      )
    )

    console.log('productslist::', ProductsList.value)
    watch(
      () => currentPage.value,
      () => {
        window.scrollTo({
          behavior: 'smooth',
          top: 230,
          left: 0,
        })
      }
    )

    return {
      data,
      currentPage,
      perPage,
      ProductsList,
    }
  },
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

    return {
      top,
    }
  },
})
</script>

<style lang="scss" scoped></style>
