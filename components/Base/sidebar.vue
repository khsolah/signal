<template>
  <div>
    <b-button
      v-b-toggle.sidebar-content
      variant="outline"
      class="text-light-blue"
    >
      <b-icon icon="list"></b-icon>
    </b-button>

    <b-sidebar
      id="sidebar-content"
      title="Menu"
      backdrop-variant="light"
      backdrop
      shadow
    >
      <b-list-group>
        <nuxt-link v-for="item in list" :key="item.name" :to="item.to">
          <b-list-group-item :disabled="$route.path === item.to">
            {{ item.name }}
          </b-list-group-item>
        </nuxt-link>
      </b-list-group>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api'
import { BIcon, BIconList } from 'bootstrap-vue'

export default defineComponent({
  name: 'SideBar',
  setup(prop, { root }) {
    const isLogin = computed<boolean>(() => root.$store.getters['account/accountInformations'].legalToken)
    const accountActionName = computed<string>(() => isLogin.value ? 'LOG OUT' : 'SIGN IN')
    const accountActionTo = computed<string>(() => isLogin.value ? '/signout' : '/signin')

    const list = reactive([
      { name: 'HOME', to: '/home', active: true },
      { name: 'KEYBOARDS', to: '/collections/Keyboards', active: false },
      { name: 'KEYCAPS', to: '/collections/Keycaps', active: false },
      { name: 'SWITCHES', to: '/collections/Switches', active: false },
      { name: 'DIY KITS', to: '/collections/DIY Kits', active: false },
      { name: accountActionName.value, to: accountActionTo.value, active: false },
    ])

    return { list }
  },
  components: {
    BIcon,
    BIconList,
  },
})
</script>
