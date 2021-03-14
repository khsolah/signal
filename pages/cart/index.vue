<template>
  <main id="cart-page" class="container">
    <div v-if="cart.length === 0" class="cart__empty">
      <b-icon icon="bag" class="h1 mb-4"></b-icon>
      <h1>Your cart is empty!</h1>
    </div>

    <div v-else class="cart__list">
      <nuxt-link :to="`/collections/All/${item.name}`" class="cart__item" v-for="item in cart" :key="item.name">
        <img :src="item.image" alt="" class="cart__item--image mr-4">
        <div class="cart__item--detail">
          <h1 class="cart__item--name">{{ item.name }}</h1>
          <h5 class="cart__item--price">${{ item.price }}</h5>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { BIconBag } from 'bootstrap-vue'

export default defineComponent({
  name: 'Cart',
  setup (prop, { root }) {
    const cart = computed(() => root.$store.getters['cart/getCart'])

    return {
      cart
    }
  },
  components: {
    BIconBag
  }
})
</script>

<style lang="scss" scoped>
</style>