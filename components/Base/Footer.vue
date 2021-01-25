<template>
  <footer class="footer__container px-3">
    <b-row>
      <b-col :cols="12" :xs="12" :sm="12" :md="6">
        <b-card tag="div" class="footer__card" title="Menu"></b-card>
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
      </b-col>
    </b-row>

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
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
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

    return { email, handleSubmit }
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
    text-align: center;
  }
}

.social {
  &__button {
    border-radius: 50%;
  }
}
</style>
