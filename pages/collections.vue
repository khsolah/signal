<template>
  <article id="collection">
    <!-- <SideMenu /> -->
    <b-container>
      <b-row></b-row>
    </b-container>
    <ProductsList />
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Collections',
  setup (prop, { root }) {
    
  },
})
</script>

<style lang="scss" scoped>
</style>