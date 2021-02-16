<template>
  <div class="swiper__container mb-5">
    <client-only>
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide v-for="item in product" :key="item">
          <img :src="item" alt="" class="swiper__image">
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { SwiperOptions } from 'swiper'

export default defineComponent({
  name: 'ProductCarousel',
  props: {
    product: Array
  },
  setup () {
    const swiperOptions: SwiperOptions = {
      speed: 500,
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    return {
      swiperOptions
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    directive,
  },
})
</script>

<style lang="scss" scoped>
</style>