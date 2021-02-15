<template>
  <b-card
    :title="product.name"
    :img-src="product.image"
    img-alt="Image"
    img-top
    border-variant="white"
    tag="div"
    class="mb-3 product__card"
    align="center"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <h6 class="card-subtitle my-3">${{ product.price }}</h6>
    <b-button variant="outline-dark" :class="CardBodyClass">ADD TO CART</b-button>
  </b-card>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: Object,
  },
  setup(prop, { root }) {
    const CardBodyClass = ref<'fadeup--show'|'fadeup--hide'>('fadeup--hide')
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

    return { CardBodyClass, show, hide }
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
