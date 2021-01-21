<template>
  <div>
    <p class="title">{{ title }}</p>
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Header from '@/components/Header/index.vue'

export default defineComponent({
  setup() {
    const title = ref('Welcome to Nuxt Typescript')

    return { title }
  }
})
</script>
