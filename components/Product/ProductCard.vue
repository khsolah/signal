<template>
  <div @mouseenter="show" @mouseleave="hide" class="mb-3 product__container">
    <nuxt-link :to="{ path: `/collections/${$route.params.category || 'All'}/${product.name}` }">
      <b-card
        :title="product.name"
        :img-src="product.images[0]"
        img-alt="Image"
        img-top
        border-variant="white"
        tag="div"
        class="mb-3 product__card"
        align="center"
      >
        <h6 class="card-subtitle my-0">${{ product.price }}</h6>
      </b-card>
    </nuxt-link>
    <b-button variant="outline-dark" :class="CardBodyClass" @click="AddToCart"
      >ADD TO CART</b-button
    >
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import { ICartOfProduct } from '~/common/interface'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: Object,
    category: String
  },
  setup(prop, { root }) {
    const CardBodyClass = ref<'fadeup--show' | 'fadeup--hide'>('fadeup--hide')
    const WindowWidth = computed(() => root.$store.getters.WindowWidth)
    const show = () => {
      if (WindowWidth.value < 997) return
      CardBodyClass.value = 'fadeup--show'
    }
    const hide = () => {
      if (WindowWidth.value < 997) return
      CardBodyClass.value = 'fadeup--hide'
    }

    onMounted(() => {
      if (WindowWidth.value < 997) CardBodyClass.value = 'fadeup--show'
    })

    // add to cart function
    const AddToCart = () => {
      if (typeof prop.product !== 'undefined') {
        root.$store.dispatch('account/AddProductToCart', {
          name: prop.product.name,
          price: prop.product.price,
          amount: 1
        } as ICartOfProduct)
      }
    }

    const cart = computed(() => root.$store.getters['account/ShowCart'])
    watch(() => cart.value, () => console.log(cart.value))

    return { CardBodyClass, show, hide, AddToCart }
  },
})
</script>

<style lang="scss" scoped>
.card {
  &-img-top {
    object-fit: cover;
    object-position: center;
    height: 22.5vw;

    @media only screen and (min-width: 576px) {
      height: 25vw;
    }

    @media only screen and (min-width: 768px) {
      height: 16vw;
    }

    @media only screen and (min-width: 996px) {
      height: 18vw;
    }

    @media only screen and (min-width: 1200px) {
      height: 13rem;
    }
  }
}
</style>
