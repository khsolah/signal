<template>
  <b-card
    :title="product.name"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 card"
    text-variant="primary"
  >
  </b-card>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ProductEntrance',
  props: {
    product: Object
  },
})
</script>

<style lang="scss" scoped>
.card {
  border: none;
  text-align: center;

  &-img-top {
    @media only screen and (min-width: 576px) {
      min-height: 22vw;
    }

    @media only screen and (min-width: 768px) {
      min-height: 11vw;
    }
  }
}
</style>