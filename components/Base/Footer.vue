<template>
  <footer class="footer__container px-3">
    <b-row>
      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card" title="Menu">
          <b-list-group>
            <nuxt-link v-for="item in menu" :key="item.name" :to="item.to" class="footer__link">
              <b-list-group-item button :disabled="item.active">
                {{ item.name }}
              </b-list-group-item>
            </nuxt-link>
          </b-list-group>
        </b-card>
      </b-col>

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

        <b-card tag="div" class="footer__card" title="Subscribe to the latest news">
          <b-form @submit="handleSubmit">
            <b-form-group
              id="input-group-1"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Subscribe</b-button>
          </b-form>
        </b-card>
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
      { name: 'SIGN IN', to: 'signin', active: false }
    ])

    return { email, handleSubmit, menu }
  },
  components: {
    BIcon,
    BIconFacebook,
    BIconInstagram,
    BIconTwitter,
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
