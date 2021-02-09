<template>
  <div class="swiper__container mb-5">
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <swiper
        :options="swiperOptions"
        ref="swiper"
        @slideChange="handleSlideChange"
        @slideChangeTransitionStart="slideChangeTransitionStart"
        @slideChangeTransitionEnd="slideChangeTransitionEnd"
      >
        <swiper-slide v-for="(item, index) in banner" :key="item.name">
          <img :src="item.image" alt="" class="swiper__image" />
          <!-- but product button -->
          <transition name="fade">
            <div :class="ctaClass" v-show="fadeIn && index === realIndex">
              <h1>{{ banner[realIndex].title }}</h1>
              <p>{{ banner[realIndex].subtitle }}</p>
              <b-button class="swiper__cta--btn" variant="primary">{{ banner[realIndex].ctaText }}</b-button>
            </div>
          </transition>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import SwiperClass, { SwiperOptions } from 'swiper'
import IBanner from './IBanner'

export default defineComponent({
  name: 'Carousel',
  setup(props, root) {
    const swiperOptions: SwiperOptions = {
      speed: 500,
      loop: true,
      // effect: 'fade',
      autoplay: {
        delay: 4000,
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

    const handleSlideChange = async () => {
      realIndex.value = $swiper.value.realIndex
      ctaClass.value = banner[realIndex.value].buttonPosition === 'left' ? 'swiper__cta swiper__cta--left' : 'swiper__cta swiper__cta--right'
    }

    onMounted(async () => {
      await root.root.$nextTick()
      realIndex.value = $swiper.value.realIndex
      ctaClass.value = banner[realIndex.value].buttonPosition === 'left' ? 'swiper__cta swiper__cta--left' : 'swiper__cta swiper__cta--right'
      fadeIn.value = true
    })

    // fadeIn transition
    const fadeIn = ref(false)
    const slideChangeTransitionStart = () => {
      fadeIn.value = false
    }

    const slideChangeTransitionEnd = async () => {
      fadeIn.value = true
    }

    return { swiperOptions, banner, swiper, realIndex, handleSlideChange, ctaClass, fadeIn, slideChangeTransitionStart, slideChangeTransitionEnd }
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
  &__container {
    position: relative;
  }

  &__image {
    width: 100vw;
    height: 91vh;
    object-fit: cover;

    @media only screen and (min-width: 576px) {
      height: 70vh;
    }

    @media only screen and (min-width: 768px) {
      height: 60vh;
    }

    @media only screen and (min-width: 1200px) {
      height: 87vh;
    }
  }

  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.2em;
    text-align: center;
    z-index: 1;


    @media only screen and (min-width: 576px) {
      margin: 1rem auto;
      top: 73%;

      &--left {
        left: 2rem;
        transform: translate(0, -50%);
      }
  
      &--right {
        left: 75%;
      }
    }

    @media only screen and (min-width: 768px) {
      top: 75%;
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  padding-top: 30px;
}

.fade-enter-active {
  transition: opacity .5s, padding-top .5s;
}

.fade-leave-active {
  transition: opacity 0s, padding-top 0s;
}

.fade-enter-to {
  padding-top: 0;
}
</style>
