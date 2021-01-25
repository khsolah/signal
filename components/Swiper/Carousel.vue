<template>
  <div>
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <swiper
        :options="swiperOptions"
        ref="swiper"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="item in banner" :key="item.name">
          <img :src="item.image" alt="" class="swiper__image" />
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- but product button -->
      <div :class="ctaClass">
        <h1>{{ banner[realIndex].title }}</h1>
        <p>{{ banner[realIndex].subtitle }}</p>
        <b-button class="swiper__cta--btn" variant="primary">{{ banner[realIndex].ctaText }}</b-button>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import SwiperClass, { SwiperOptions } from 'swiper'
import IBanner from './IBanner'

export default defineComponent({
  name: 'Carousel',
  setup(props, root) {
    const swiperOptions: SwiperOptions = {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    const banner: IBanner[] = [
      {
        name: 'GMK Dots',
        image: require('~/assets/images/carousel-banner/gmk-dots.jpg'),
        buttonPosition: 'left',
        title: 'GMK Dots',
        subtitle: 'Most popular keycaps set ever',
        ctaText: 'Buy Now',
      },
      {
        name: 'GMK Posh',
        image: require('~/assets/images/carousel-banner/gmk-posh.jpg'),
        buttonPosition: 'left',
        title: 'GMK Posh',
        subtitle: 'Pre-orders for extra stock live now!',
        ctaText: 'Pre-order Now',
      },
      {
        name: 'GMK Amethyst',
        image: require('~/assets/images/carousel-banner/gmk-amethyst.png'),
        buttonPosition: 'right',
        title: 'GMK Amethyst',
        subtitle: 'Shipping now!',
        ctaText: 'Buy Now',
      },
      {
        name: 'GMK Rainy Day',
        image: require('~/assets/images/carousel-banner/gmk-rainyday.png'),
        buttonPosition: 'left',
        title: 'GMK Rainy Day',
        subtitle: 'Last chance to get it',
        ctaText: 'Join Group Buy',
      },
    ]

    //// get swiper node element
    const swiper = ref<any>(null)
    const realIndex = ref(0)
    const ctaClass = ref('')
    const $swiper = computed(() => swiper.value?.$swiper as SwiperClass)

    const handleSlideChange = () => {
      realIndex.value = $swiper.value.realIndex
      ctaClass.value = banner[realIndex.value].buttonPosition === 'left' ? 'swiper__cta swiper__cta--left' : 'swiper__cta swiper__cta--right'
    }

    onMounted(async () => {
      await root.root.$nextTick()
      realIndex.value = $swiper.value.realIndex
      ctaClass.value = banner[realIndex.value].buttonPosition === 'left' ? 'swiper__cta swiper__cta--left' : 'swiper__cta swiper__cta--right'
    })

    return { swiperOptions, banner, swiper, realIndex, handleSlideChange, ctaClass }
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
    height: 45vw;
    object-fit: cover;
  }

  &__cta {
    position: absolute;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    z-index: 1;

    &--left {
      top: 35vw;
      left: 2vw;
    }

    &--right {
      top: 35vw;
      right: 2vw;
    }

    @media only screen and (max-width: 768px) {
      &--left,
      &--right {
        top: 30vw;
      }
    }

    @media only screen and (max-width: 576px) {
      position: relative;
      display: block;
      top: 0;
      right: 0;
      left: 0;
      color: black;
      text-align: center;
      text-shadow: none;
      margin: 1rem;
    }
  }
}
</style>
