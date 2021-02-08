<template>
  <footer class="footer__container px-3">
    <!-- Subscribe Email Form -->
    <b-row class="footer__row">
      <b-col :cols="7" :xs="12" :sm="8" :md="6" :lg="5" :xl="5">
        <b-card
          tag="div"
          class="footer__card"
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

    <!-- Social Media Link Button -->
    <b-row class="footer__row">
      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card" title="Follow Us">
          <b-button variant="outline" class="px-2 social__button">
            <b-icon icon="facebook" variant="light"></b-icon>
          </b-button>
          <b-button variant="outline" class="px-2 social__button">
            <b-icon icon="instagram" variant="light"></b-icon>
          </b-button>
          <b-button variant="outline" class="px-2 social__button">
            <b-icon icon="twitter" variant="light"></b-icon>
          </b-button>
        </b-card>
      </b-col>
    </b-row>

    <!-- Copyright Text -->
    <b-row class="footer__row">
      <b-col :cols="6">
        <p class="text-white">© 2021 Signal® Mechanical Keyboards Store</p>
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
    BIconEnvelopeFill,
  },
})
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    background-color: #394047;
    justify-content: center;
  }

  &__row {
    justify-content: center;
    text-align: center;
  }

  &__card {
    border: none;
    color: #fff;
    background-color: #394047;
  }

  &__link {
    color: #fff;
    background-color: #394047;
  }

  @media only screen and (max-width: 768px) {
    &__card {
      text-align: left;
    }
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
</style>
