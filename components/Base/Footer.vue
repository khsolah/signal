<template>
  <footer class="container footer__container">
    <b-row>
      <b-col :col="12">
        <b-card tag="div" class="footer__card" title="Follow Us">
          <b-card-text>
            <b-button variant="outline" class="social__button">
              <b-icon icon="facebook" variant="light"></b-icon>
            </b-button>
            <b-button variant="outline" class="social__button">
              <b-icon icon="instagram" variant="light"></b-icon>
            </b-button>
            <b-button variant="outline" class="social__button">
              <b-icon icon="twitter" variant="light"></b-icon>
            </b-button>
            <b-button variant="outline" class="social__button">
              <b-icon icon="envelope-fill" variant="light"></b-icon>
            </b-button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { BIcon, BIconFacebook, BIconInstagram, BIconTwitter, BIconEnvelopeFill } from 'bootstrap-vue'

export default defineComponent({
  name: 'Footer',
  setup() {},
  components: {
    BIcon,
    BIconFacebook,
    BIconInstagram,
    BIconTwitter,
    BIconEnvelopeFill
  }
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
}

.social {
  &__button {
    border-radius: 50%;
  }
}
</style>
