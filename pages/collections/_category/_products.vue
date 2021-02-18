<template>
  <main>
    <ProductCarousel :product="ProductCarousel" />

    <section id="product-description" class="mx-auto my-5">
      <header class="description__header pb-5 my-3">
        <h1 class="description__header--title">{{ data.product.name }}</h1>
        <div class="descriptoin__header--subtitle">
          <!-- <span
            class="tag mr-2"
            :tag-variant="data.product.tagVariant"
            v-if="data.product.tag !== ''"
            >{{ data.product.tag }}</span
          > -->
          <h5 class="mb-0">${{ data.product.price }}</h5>
        </div>
      </header>

      <div
        v-html="data.product.description"
        class="my-5 description__content"
      ></div>

      <button block class="form__button product__button">
        <h4 class="mb-0" @click.prevent="buy">{{ data.product.buttonText }}</h4>
      </button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api'
import { IProduct } from '~/components/Product/IProduct'

export default defineComponent({
  name: 'ProductPage',
  setup(prop, { root }) {
    const ProductCarousel: ImageData[] = [
      require('@/assets/images/carousel-banner/gmk-amethyst.png'),
      require('@/assets/images/carousel-banner/gmk-dots.jpg'),
      require('@/assets/images/carousel-banner/gmk-posh.jpg'),
      require('@/assets/images/carousel-banner/gmk-rudy.png'),
    ]

    let data = reactive<{ product: IProduct | {} }>({ product: {} })

    onMounted(() => {
      // Todo:: axios to get product data
      data.product = {
        id: '1',
        name: root.$route.params.products,
        price: 160,
        tag: 'group buy',
        tagVariant: 'warning',
        description: `<h2>THIS IS A GROUPBUY</h2>
          <h6>
            <b>
              Groupbuy will run from December 6th - December 31th 2020. <br>
              The approximate shipping time is around Q4 2021.<br>
              Keycap Set Designed by Omnitype
            </b>
          </h6>
          <h2>Details</h2>
          <ul>
            <li>Designed by Plop</li>
            <li>Produced by ePBT</li>
            <li>PBT Dyesub</li>
            <li>Deskmats: stitched edge, 900x400 mm, 3mm thick</li>
            <li>THOK Novelty: Aluminum, R1 profile, 2 color resin infill.</li>
          </ul>
          <p>The images shown are renders of the product and are only used to estimate the final product. The end product may vary in color from the renders as they are not guaranteed to be 100% accurate to the end product. By purchasing this product, you are agreeing to the above terms.</p>`,
        buttonText: 'Join Group Buy',
      }
    })

    const buy = () => {
      console.log(buy)
    }

    return {
      ProductCarousel,
      data,
      buy,
    }
  },
})
</script>

<style lang="scss" scoped>
#product-description {
  max-width: 500px;
  width: 80vw;
}
</style>
