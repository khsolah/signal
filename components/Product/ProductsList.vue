<template>
  <b-container>
    <b-row>
      <b-col :cols="6" :xs="6" :sm="6" :md="4" :lg="3" v-for="product in ProductList" :key="product.id">
        <ProductCard :product="product" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProductsList',
  setup () {
    const ProductList = reactive([
      { id: 'gmk-dots', name: 'GMK Dots', price: 160, image: require('~/assets/images/carousel-banner/gmk-dots.jpg') },
      { id: 'gmk-posh', name: 'GMK Posh', price: 158, image: require('~/assets/images/carousel-banner/gmk-posh.jpg') },
      { id: 'gmk-amethyst', name: 'GMK Amethyst', price: 165, image: require('~/assets/images/carousel-banner/gmk-amethyst.png') },
      { id: 'gmk-rainy-day', name: 'GMK Rainy Day', price: 159, image: require('~/assets/images/carousel-banner/gmk-rainyday.png') }
    ])

    return { ProductList }
  }
})
</script>

<style lang="scss" scoped>
</style>