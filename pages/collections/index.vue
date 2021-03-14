<template>
  <main id="collection">
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
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
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
    const data = reactive<{ products: IProductAbstract[] }>({
      products: [],
    })

    const response = await context.$axios.get('https://khsolah.xyz/api/product', { withCredentials: true })
    data.products = response.data

    return {
      data,
    }
  },
  setup(prop, { root }) {
    const top = reactive<topData>({
      title: 'Collections',
      background: require('~/assets/images/mechanical-keyboard.jpg'),
    })

    return {
      top,
    }
  },
})
</script>

<style lang="scss" scoped></style>
