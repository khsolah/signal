<template>
  <b-navbar toggleable="md" type="light" class="p-3 nav">
    <!-- SideBar -->
    <SideBar id="sidebar" v-show="windowWidth < 768" />

    <!-- brand -->
    <b-navbar-brand href="#" class="nav__brand ml-0">
      <h1>Signal</h1>
    </b-navbar-brand>

    <!-- site nav -->
    <b-navbar-nav class="ml-3 mr-auto" v-show="windowWidth > 768">
      <nuxt-link
        v-for="item in list"
        :key="item.title"
        :to="item.to"
        class="p-2"
        >{{ item.title }}</nuxt-link
      >
    </b-navbar-nav>

    <!-- buttons -->
    <b-button-group class="mr-1 nav__button-group">
      <b-button
        variant="outline"
        class="nav__button"
        v-show="windowWidth > 576"
      >
        <b-icon icon="search"></b-icon>
      </b-button>
      <b-button variant="outline" class="nav__button px-2">
        <b-icon :icon="cartIcon"></b-icon>
      </b-button>
      <nuxt-link :to="{ path: '/signin' }">
        <b-button variant="outline" class="nav__button px-2">
          <b-icon icon="person-circle"></b-icon>
        </b-button>
      </nuxt-link>
    </b-button-group>
  </b-navbar>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import {
  BIcon,
  BIconSearch,
  BIconBag,
  BIconBagPlusFill,
  BIconPersonCircle,
  BIconList,
} from 'bootstrap-vue'
import { ICategory } from '~/common/interface'
import SideBar from '@/components/Base/sidebar.vue'

export default defineComponent({
  name: 'Header',
  components: {
    BIcon,
    BIconSearch,
    BIconBag,
    BIconPersonCircle,
    BIconList,
    SideBar,
  },
  setup(prop, { root }) {
    const windowWidth = ref(768)
    const onWindowWidthChange = () => {
      windowWidth.value = window.innerWidth
    }

    const cartStatus = computed<number>(() => root.$store.getters['cart/cartStatus'])

    const cartIcon = ref<'bag' | 'bag-plus-fill'>('bag')
    watch(
      () => cartStatus.value,
      () => {
        cartIcon.value = cartStatus.value === 0 ? 'bag' : 'bag-plus-fill'
      }
    )

    if (process.client) {
      onMounted(() => {
        windowWidth.value = window.innerWidth
        window.addEventListener('resize', onWindowWidthChange)
      })

      onUnmounted(() => {
        window.removeEventListener('resize', onWindowWidthChange)
      })
    }

    const list = reactive<ICategory[]>([
      {
        title: 'Home',
        to: {
          path: '/',
        },
      },
      {
        title: 'Keyboards',
        to: {
          path: '/collections/Keyboards',
        },
      },
      {
        title: 'Keycaps',
        to: {
          path: '/collections/Keycaps',
        },
      },
      {
        title: 'Switches',
        to: {
          path: '/collections/Switches',
        },
      },
      {
        title: 'DIY Kits',
        to: {
          path: '/collections/DIY Kits',
        },
      },
    ])

    return {
      cartIcon,
      windowWidth,
      list,
    }
  },
})
</script>
