<template>
  <main id="cart-page" class="container">
    <div v-if="cart.length === 0" class="cart__empty">
      <b-icon icon="bag" class="h1 mb-4"></b-icon>
      <h1>Your cart is empty!</h1>
    </div>

    <div v-else class="cart__list">
      <div class="cart__item" v-for="(item, index) in cart" :key="item.name">
        <nuxt-link :to="`/collections/All/${item.name}`">
          <img :src="item.image" alt="" class="cart__item--image mr-4">
        </nuxt-link>
        <div class="cart__item--detail">
          <h1 class="cart__item--name">{{ item.name }}</h1>
          <h5 class="cart__item--price">${{ item.price }}</h5>
        </div>
        <b-form-group
          id="quantity"
          label-cols-sm="6"
          label-cols-lg="6"
          label="Quantity"
          :label-for="`quantity-${i}`"
          class="ml-auto"
        >
          <b-form-select v-model="selected[index]" :id="`quantity-${i}`" class="cart__item--select" @click="updateProduct({ index: index, quantity: selected[index] })">
            <b-form-select-option :value="i" v-for="i in 10" :key="i">{{ i }}</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-button variant="outline" @click.prevent="removeProduct">
          <b-icon icon="x-circle-fill"></b-icon>
        </b-button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from '@nuxtjs/composition-api'
import { BIconBag, BIconXCircleFill } from 'bootstrap-vue'
import { ICartOfProduct } from '~/common/interface'

export default defineComponent({
  name: 'Cart',
  setup (prop, { root }) {
    const cart = computed(() => root.$store.getters['cart/getCart'])
    const selected = reactive([...cart.value.map((element: ICartOfProduct) => element.amount)])

    const removeProduct = (name: string) => {
      root.$store.dispatch('cart/RemoveProductFromCart', name)
    }

    const updateProduct = (index: number, quantity: number) => {
      console.log('updateProduct::', index, quantity)
      root.$store.dispatch('cart/UpdateProductFromCart', { index, quantity })
    }

    watch(() => selected, () => console.log('selected::', selected))

    return {
      cart,
      selected,
      removeProduct,
      updateProduct
    }
  },
  components: {
    BIconBag,
    BIconXCircleFill
  }
})
</script>

<style lang="scss" scoped>
</style>