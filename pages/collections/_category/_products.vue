<template>
  <main>
    <ProductCarousel :product="ProductCarousel" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProductPage',
  setup (prop, { root }) {
    const ProductCarousel: ImageData[] = [
      require('@/assets/images/carousel-banner/gmk-amethyst.png'),
      require('@/assets/images/carousel-banner/gmk-dots.jpg'),
      require('@/assets/images/carousel-banner/gmk-posh.jpg'),
      require('@/assets/images/carousel-banner/gmk-rudy.png'),
    ]

    return {
      ProductCarousel
    }
  }
})
</script>

<style lang="scss" scoped>
</style>