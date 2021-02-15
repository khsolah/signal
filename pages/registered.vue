<template>
  <main class="my-5">
    <form id="registered-form" class="my-5">
      <header class="form__header">
        <h1 class="form__header--title text-light-cyan" align="center">
          CREATE ACCOUNT
        </h1>
        <p
          class="form__header--subtitle text-light-grey mt-5 pt-3 mb-0"
          align="center"
        >
          *By signing up you agree to receive emails from us. You can change
          your preferences any time.
        </p>
      </header>
      <div class="form__group my-4">
        <input
          id="firstName"
          type="text"
          class="form__input"
          placeholder="First name"
          v-model="firstName"
        />
        <transition name="fadeup">
          <label
            for="firstName"
            class="form__label"
            v-show="showLabelOfFirstName"
            >First name</label
          >
        </transition>
      </div>

      <div class="form__group my-4">
        <input
          id="lastName"
          type="text"
          class="form__input"
          placeholder="Last name"
          v-model="lastName"
        />
        <transition name="fadeup">
          <label for="lastName" class="form__label" v-show="showLabelOfLastName"
            >Last name</label
          >
        </transition>
      </div>

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

      <div class="form__group my-4">
        <input type="checkbox" v-model="subscribe" id="subscribe" />
        <b>Subscribe To Our Newsletter</b>
        <label for="subscribe"
          >Join our subscribers list to get the latest information, updates and
          special offers right to your inbox.</label
        >
      </div>

      <footer class="form__footer">
        <button @click.prevent="createAccount" class="form__button">Create</button>
      </footer>
    </form>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Registered',
  setup() {
    const firstName = ref<string>('')
    const lastName = ref<string>('')
    const id = ref<string>('')
    const password = ref<string>('')
    const subscribe = ref<boolean>(true)

    const showLabelOfId = computed(() => id.value !== '')
    const showLabelOfPassword = computed(() => password.value !== '')
    const showLabelOfFirstName = computed(() => firstName.value !== '')
    const showLabelOfLastName = computed(() => lastName.value !== '')

    const createAccount = () => {
      console.log('create account')
      // Todo:: call create account api
    }

    return {
      firstName,
      lastName,
      id,
      password,
      showLabelOfFirstName,
      showLabelOfLastName,
      showLabelOfId,
      showLabelOfPassword,
      subscribe,
      createAccount
    }
  },
})
</script>

<style lang="scss" scoped>
#registered-form {
  display: block;
  max-width: 400px;
  width: 75vw;
  margin: 0 auto;
}
</style>
