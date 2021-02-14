<template>
  <b-navbar toggleable="md" type="dark" variant="dark" class="p-3 nav">
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
    <b-button-group class="mr-0 nav__button-group">
      <b-button
        variant="outline"
        class="nav__button"
        v-show="windowWidth > 576"
      >
        <b-icon icon="search"></b-icon>
      </b-button>
      <b-button variant="outline" class="nav__button px-2">
        <b-icon icon="bag"></b-icon>
      </b-button>
      <b-button variant="outline" class="nav__button px-2">
        <b-icon icon="person-circle"></b-icon>
      </b-button>
    </b-button-group>
  </b-navbar>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
import {
  BIcon,
  BIconSearch,
  BIconBag,
  BIconPersonCircle,
  BIconList,
} from 'bootstrap-vue'
import { ICategory } from '../Product/IProduct'
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
  setup() {
    const windowWidth = ref(768)
    const onWindowWidthChange = () => {
      windowWidth.value = window.innerWidth
    }

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
      windowWidth,
      list,
    }
  },
})
</script>

<style scoped lang="scss">
#sidebar {
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
}

.nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 9vh;
  z-index: 2;

  &__button {
    color: #fff;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }

    &-group {
      margin-left: auto;
    }
  }

  @media only screen and(max-width: 768px) {
    &__brand {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
