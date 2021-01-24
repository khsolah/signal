<template>
  <div>
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item in banner" :key="item.name">
          <img :src="item.image" alt="" class="swiper__image">
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- loading indicator, rendered on server-side -->
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { SwiperOptions } from 'swiper'
import IBanner from './IBanner'

export default defineComponent({
  name: 'Carousel',
  setup() {
    const swiperOptions: SwiperOptions = {
      loop: true,
      effect: 'coverflow',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    const banner: IBanner[] = [
      { name: 'GMK Posh', image: require('~/assets/images/carousel-banner/gmk-posh.jpg'), buttonPosition: 'left' },
      { name: 'GMK Amethyst', image: require('~/assets/images/carousel-banner/gmk-amethyst.png'), buttonPosition: 'right' },
      { name: 'GMK Rainyday', image: require('~/assets/images/carousel-banner/gmk-rainyday.png'), buttonPosition: 'left' },
      { name: 'GMK Retrocast', image: require('~/assets/images/carousel-banner/gmk-retrocast.png'), buttonPosition: 'right' }
    ]

    return { swiperOptions, banner }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    directive,
  },
})
</script>

<style lang="scss" scoped>
.swiper {
  &__image {
    width: 100vw;
    height: 50vw;
    object-fit: cover;
  }
}
</style>
