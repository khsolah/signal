<template>
  <div>
    <Header />
    <Carousel />
    <b-container fluid class="entrance__container">
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
    </b-container>

    <b-container fluid class="grid__container"> </b-container>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { IProductAbstract } from '~/components/Product/IProduct'

export default defineComponent({
  setup() {
    const product = reactive<IProductAbstract[]>([
      {
        id: 'gmk-posh-1',
        name: 'GMK Posh',
        subtitle: 'Signal Store',
        price: 150,
        image: '',
        hoveredImage: '',
      },
    ])

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

    return {
      Entrance,
    }
  },
})
</script>

<style lang="scss" scoped>
.entrance {
  &__container {
    @media only screen and (min-width: 576px) {
      padding: 2vw;
    }

    @media only screen and (min-width: 768px) {
      padding-top: 1.5vw;
    }

    @media only screen and (min-width: 960px) {
      padding-top: 1vw;
    }

    @media only screen and (min-width: 1140px) {
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

    @media only screen and (min-width: 960px) {
      min-height: 21vw;
    }

    @media only screen and (min-width: 1140px) {
      min-height: 14rem;
    }
  }
}
</style>
