<template>
  <div class="cart__container">
    <span class="cart__status">{{ cartStatus }}</span>
    <nuxt-link to="/cart" id="cart" class="cart__button">
      <b-icon icon="bag-plus-fill" variant="light"></b-icon>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from '@nuxtjs/composition-api'
import { BIconBagPlusFill } from 'bootstrap-vue'
export default defineComponent({
  name: 'Cart',
  setup(prop, { root }) {
    const cartStatus = computed(() => root.$store.getters['cart/cartStatus'])

    watch(
      () => cartStatus.value,
      () => console.log('watching')
    )
    return {
      cartStatus,
    }
  },
  components: {
    BIconBagPlusFill,
  },
})
</script>

<style lang="scss" scoped>

</style>
