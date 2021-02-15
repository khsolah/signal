<template>
  <main class="my-5">
    <form id="signin-form" class="my-5">
      <header class="form__header">
        <h1 class="form__header--title text-light-cyan" align="center">LOGIN</h1>
        <p class="form__header--subtitle text-light-grey mt-5 pt-3 mb-0" align="center">*By signing up you agree to receive emails from us. You can change your preferences any time.</p>
      </header>
      <div class="form__group my-4">
        <input
          id="id"
          type="email"
          class="form__input"
          placeholder="Email"
          v-model="id"
        />
        <transition name="fadeup">
          <label for="id" class="form__label" v-show="showLabelOfId"
            >Email</label
          >
        </transition>
      </div>
      <div class="form__group my-4">
        <input
          id="password"
          type="password"
          class="form__input"
          placeholder="Password"
          v-model="password"
        />
        <transition name="fadeup">
          <label for="password" class="form__label" v-show="showLabelOfPassword"
            >Password</label
          >
        </transition>
      </div>

      <footer class="form__footer">
        <button @click.prevent="signin" class="form__button">Sign In</button>
        <nuxt-link :to="{ path: 'registered' }" class="form__text form__link my-2" align="center">New Customer? Create one</nuxt-link>
      </footer>
    </form>
  </main>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Signin',
  setup() {
    const id = ref<string>('')
    const password = ref<string>('')

    const showLabelOfId = computed(() => id.value !== '')
    const showLabelOfPassword = computed(() => password.value !== '')

    // sign in function:
    const signin = () => {
      // Todo: call api
      console.log('signin successful')
    }

    return {
      id,
      password,
      showLabelOfId,
      showLabelOfPassword,
      signin
    }
  },
})
</script>

<style lang="scss" scoped>
#signin-form {
  display: block;
  max-width: 400px;
  width: 75vw;
  margin: 0 auto;
}
</style>
