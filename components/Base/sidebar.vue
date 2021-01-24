<template>
  <div>
    <b-button v-b-toggle.sidebar-content variant="outline" class="togglebtn">
      <b-icon icon="list"></b-icon>
    </b-button>

    <b-sidebar id="sidebar-content" title="Menu" backdrop-variant="light" backdrop shadow>
      <b-list-group>
        <nuxt-link v-for="item in list" :key="item.name" :to="item.to">
          <b-list-group-item :disabled="item.active">
            {{ item.name }}
          </b-list-group-item>
        </nuxt-link>
      </b-list-group>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { BIcon, BIconList } from 'bootstrap-vue'

export default defineComponent({
  name: 'SideBar',
  setup() {
    const list = reactive([
      { name: 'HOME', to: '/home', active: true },
      { name: 'PRODUCTS', to: '/products', active: false },
      { name: 'ABOUT US', to: '/aboutus', active: false },
      { name: 'FAQ', to: '/shop', active: false },
      { name: 'SIGN IN', to: 'signin', active: false }
    ])

    return { list }
  },
  components: {
    BIcon,
    BIconList,
  },
})
</script>

<style lang="scss" scoped>
.togglebtn {
  color: white;
}
</style>
