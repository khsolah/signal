<template>
  <article>
    <Carousel />

    <section id="content">
      <!-- Featured Products -->
      <b-container id="featured-product" class="my-5">
        <b-row>
          <b-col :cols="12" class="mb-3">
            <h2 align="center">Featured Products</h2>
          </b-col>

          <b-col
            :cols="6"
            :md="3"
            v-for="item in FeaturedProducts"
            :key="item.id"
          >
            <ProductCard :product="item" category="featured" />
          </b-col>

          <b-col cols="auto" class="mr-auto ml-auto my-4 mx-a">
            <nuxt-link :to="{ path: '/collections/All'}">
              <b-button variant="outline-dark">
                <h3 class="mb-0">VIEW ALL</h3>
              </b-button>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>

      <!-- Categories -->
      <b-container fluid class="my-5">
        <b-row>
          <b-col
            :cols="12"
            :sm="12"
            :md="12"
            :lg="6"
            v-for="item in Category"
            :key="item.title"
            class="mb-4"
          >
            <nuxt-link :to="item.to" class="category__container--home">
              <img :src="item.image" alt="" class="category__image" />
              <header class="category__header">
                <h1 class="category__title mb-4">{{ item.title }}</h1>
                <b-button variant="outline-light">
                  <h3>VIEW PRODUCTS</h3>
                </b-button>
              </header>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { ICategory, IProductAbstract } from '~/components/Product/IProduct'

export default defineComponent({
  setup(prop, { root }) {
    interface IEntrance {
      name: string
      image: string
    }

    const FeaturedProducts = reactive<IProductAbstract[]>([
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
    ])

    const Category = reactive<ICategory[]>([
      {
        title: 'Keyboards',
        image: require('~/assets/images/mechanical-keyboard.jpeg'),
        to: {
          path: '/collections',
          query: {
            category: 'Keyboards'
          },
        },
      },
      {
        title: 'Keycaps',
        image: require('~/assets/images/keycaps.jpg'),
        to: {
          path: '/collections',
          query: {
            category: 'Keycaps',
          },
        },
      },
      {
        title: 'Switches',
        image: require('~/assets/images/switches.png'),
        to: {
          path: '/collections',
          query: {
            category: 'Switches',
          },
        },
      },
      {
        title: 'DIY Kits',
        image: require('~/assets/images/diy-kits.jpg'),
        to: {
          path: '/collections',
          query: {
            category: 'KIY Kits',
          },
        },
      },
    ])

    return {
      FeaturedProducts,
      Category,
    }
  },
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
    max-width: 100vw;
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

#store-introduce {
  position: relative;
}
</style>
