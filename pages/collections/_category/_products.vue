<template>
  <main>
    <ProductCarousel :product="data.product.images" />

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

      <button block class="form__button product__button" @click="addProductToCart(data.product)">
        <h4 class="mb-0">{{ data.product.buttonText }}</h4>
      </button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@nuxtjs/composition-api'
import { ICartOfProduct, IProduct } from '~/common/interface'

export default defineComponent({
  name: 'ProductPage',
  async asyncData(context) {
    const route = context.route.params
    const data = reactive<{ product?: IProduct }>({ product: undefined })
    const response = await context.$axios.get(
      `https://khsolah.xyz/api/product?category=${route.category}&product=${route.products}`,
      {
        withCredentials: true
      }
    )

    data.product = response.data

    return {
      data,
    }
  },
  setup(prop, { root }) {
    const buy = () => {
      console.log(buy)
    }

    const addProductToCart = (product: IProduct) => {
      root.$store.dispatch('cart/AddProductToCart', {
          name: product.name,
          price: product.price,
          image: product.images[0],
          amount: 1
        } as ICartOfProduct)
    }

    return {
      buy,
      addProductToCart
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
