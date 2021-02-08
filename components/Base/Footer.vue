<template>
  <footer class="footer__container px-3">
    <b-row>
      <!-- About Us -->
      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card text-light-grey" title="About Me">
          <b-card-text class="text-white">
            I'm Jia-Zhan Wu, a Front-end Web Developer and mechanical keyboard
            fanatic. I'm very enthusiastic about learning new skills. Intergrate
            these two interests, I made this keyboard store with Nuxt
            Typescript, Vue 3 Composition Api and Bootstrap-Vue after get off
            work.
          </b-card-text>
        </b-card>
      </b-col>

      <!-- Subscribe Email Form -->
      <b-col :cols="12" :xs="12" :sm="12" :md="6" :lg="4" :xl="4">
        <b-card
          tag="div"
          class="footer__card text-light-grey"
          title="Subscribe to the latest news"
        >
          <b-form @submit="handleSubmit">
            <b-form-group
              id="input-group-1"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-input-group>
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="primary">
                    <b-icon icon="envelope-fill"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <!-- Follow us -->
      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card text-light-grey" title="Follow Me" align="center">
          <b-button variant="outline" class="px-2 social__button text-white">
            <b-icon icon="facebook"></b-icon>
          </b-button>
          <b-button variant="outline" class="px-2 social__button text-white">
            <b-icon icon="instagram"></b-icon>
          </b-button>
          <b-button variant="outline" class="px-2 social__button text-white">
            <b-icon icon="twitter"></b-icon>
          </b-button>
          <b-button variant="outline" class="px-2 social__button text-white">
            <b-icon icon="youtube"></b-icon>
          </b-button>
        </b-card>
      </b-col>

      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card text-light-grey" title="Contact Me" align="center">
          <b-card-text class="text-white">
            khsolah@gmail.com
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- Copyright Text -->
    <b-row>
      <b-col :cols="12">
        <p class="text-white" align="center">© 2021 Signal® Mechanical Keyboards Store</p>
      </b-col>
    </b-row>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import {
  BIcon,
  BIconFacebook,
  BIconInstagram,
  BIconTwitter,
  BIconYoutube,
  BIconEnvelopeFill,
} from 'bootstrap-vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const email = ref('')

    const handleSubmit = () => {}

    // Menu
    const menu = reactive([
      { name: 'HOME', to: '/home', active: true },
      { name: 'PRODUCTS', to: '/products', active: false },
      { name: 'ABOUT US', to: '/aboutus', active: false },
      { name: 'FAQ', to: '/shop', active: false },
      { name: 'SIGN IN', to: 'signin', active: false },
    ])

    return { email, handleSubmit, menu }
  },
  components: {
    BIcon,
    BIconFacebook,
    BIconInstagram,
    BIconTwitter,
    BIconYoutube,
    BIconEnvelopeFill,
  },
})
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    background-color: #394047;
  }

  &__card {
    border: none;
    background-color: #394047;
  }

  &__link {
    color: #fff;
    background-color: #394047;
  }
}

.social {
  &__button {
    border-radius: 50%;
  }
}

.list-group-item {
  color: #fff;
  background-color: #394047;
  border: none;
}

.card {
  &-title {
    text-align: center;
  }
}
</style>
