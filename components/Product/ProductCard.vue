<template>
  <b-card
    :title="product.name"
    :sub-title="`$${product.price}`"
    :img-src="product.image"
    sub-title-text-variant="light-pink"
    img-alt="Image"
    img-top
    tag="div"
    class="mb-2 bg__dark-grey product__card text-light-blue"
    align="center"
  >
    <b-card-text>
      {{ product.subtitle }}
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: Object
  },
  setup() {
  },
})
</script>

<style lang="scss" scoped>
.card {
  &-img-top {
    object-fit: cover;
    object-position: center;

    @media only screen and (min-width: 576px) {
      height: 50vw;
    }

    @media only screen and (max-width: 768px) {
      height: 45vw;
    }
  }
}
</style>