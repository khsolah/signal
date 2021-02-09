<template>
  <div>
    <Header />
    <Carousel />
    <!-- <b-container fluid class="entrance__container">
      <b-row>
        <b-col
          :cols="6"
          :xs="6"
          :sm="6"
          :md="3"
          v-for="item in Entrance"
          :key="item.name"
          class="entrance__item"
        >
          <nuxt-link :to="{ path: 'Product' }">
            <ProductEntrance :product="item" />
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container> -->

    <b-container id="featured-product" class="my-3">
      <b-row>
        <b-col :cols="12" class="mb-3">
          <h2 align="center">Featured Products</h2>
        </b-col>

        <b-col
          :cols="6"
          v-for="item in FeaturedProducts"
          :key="item.id"
        >
          <ProductCard :product="item" />
        </b-col>

        <b-col cols="auto" class="mr-auto ml-auto mb-3 mx-a">
          <b-button variant="outline-dark">
            <h3 class="mb-0">VIEW ALL</h3>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api'
import { IProductAbstract } from '~/components/Product/IProduct'

export default defineComponent({
  setup(prop, { root }) {
    interface IEntrance {
      name: string
      image: string
    }
    const Entrance = reactive<IEntrance[]>([
      { name: 'Keyboards', image: 'https://picsum.photos/600/300/?image=25' },
      { name: 'Keycaps', image: 'https://picsum.photos/600/300/?image=25' },
      { name: 'Accessories', image: 'https://picsum.photos/600/300/?image=25' },
      { name: 'DIY Kits', image: 'https://picsum.photos/600/300/?image=25' },
    ])

    const FeaturedProducts = reactive<IProductAbstract[]>([
      { id: 'gmk-dots', name: 'GMK Dots', price: 160, image: require('~/assets/images/carousel-banner/gmk-dots.jpg') },
      { id: 'gmk-posh', name: 'GMK Posh', price: 158, image: require('~/assets/images/carousel-banner/gmk-posh.jpg') },
      { id: 'gmk-amethyst', name: 'GMK Amethyst', price: 165, image: require('~/assets/images/carousel-banner/gmk-amethyst.png') },
      { id: 'gmk-rainy-day', name: 'GMK Rainy Day', price: 159, image: require('~/assets/images/carousel-banner/gmk-rainyday.png') }
    ])

    return {
      Entrance,
      FeaturedProducts
    }
  }
})
</script>

<style lang="scss" scoped>
#featured-product {
  max-width: 90vw;

  @media only screen and (min-width: 480px) {
    max-width: 80vw;
  }

  @media only screen and (min-width: 576px) {
    max-width: 67vw;
  }

  @media only screen and (min-width: 786px) {
    max-width: 63vw;
  }

  @media only screen and (min-width: 996px) {
    max-width: 57vw;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 50vw;
  }
}

.entrance {
  &__container {
    @media only screen and (min-width: 576px) {
      padding: 2vw;
    }

    @media only screen and (min-width: 768px) {
      padding-top: 1.5vw;
    }

    @media only screen and (min-width: 992px) {
      padding-top: 1vw;
    }

    @media only screen and (min-width: 1200px) {
      padding-top: 1.75rem;
    }
  }

  &__item {
    display: flex;
    align-items: center;

    @media only screen and (min-width: 576px) {
      min-height: 40vw;
    }

    @media only screen and (min-width: 768px) {
      min-height: 27vw;
    }

    @media only screen and (min-width: 992px) {
      min-height: 21vw;
    }

    @media only screen and (min-width: 1200px) {
      min-height: 14rem;
    }
  }
}
</style>
