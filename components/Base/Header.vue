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
      <nuxt-link to="/" class="p-2">Home</nuxt-link>
      <nuxt-link to="/" class="p-2">Products</nuxt-link>
    </b-navbar-nav>

    <!-- buttons -->
    <b-button-group class="mr-0 nav__button-group">
      <b-button variant="outline" class="nav__button" v-show="windowWidth > 576">
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

<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@nuxtjs/composition-api'
import {
  BIcon,
  BIconSearch,
  BIconBag,
  BIconPersonCircle,
  BIconList,
} from 'bootstrap-vue'
import SideBar from '@/components/Base/sidebar'

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

    return { windowWidth }
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
