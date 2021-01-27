<template>
  <div>
    <button @click="login">Login</button>
    <button @click="buy">Buy</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {}
  },
  setup(props, root) {
    const token = ref('')
    const login = () => {
      root.root.$axios
        .post('https://172.104.117.56:88/api/member/login', {
          email: 'a@a.a',
          password: 'aaaaaa',
        })
        .then((response) => {
          console.log(response)
          token.value = response.data
        })
        .catch((error) => {
          console.log('error::', error)
        })
    }

    const buy = () => {
      console.log('click buy')
      root.root.$axios.post('https://admin-jjkk-payment-test.iavnight.com:8081/api/buy_vip/hy/107/30', {}, {
        headers: {
          'access-token': token.value
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('error::', error)
        console.error('error.response::', error.response)
      })
    }

    return { login, buy }
  },
  // methods: {
  //   login () {
  //     this.axios
  //       .post(`http://172.104.117.56:88/api/member/login`, {
  //         email: 'a@a.a',
  //         password: 'aaaaaa'
  //       })
  //       .then(response => {
  //         console.log(response)
  //         this.$cookie.set('token', response.data, '3d')
  //       })
  //       .catch(error => {
  //         console.error(error.response)
  //       })
  //   },
  //   buy () {
  //     this.axios
  //       .post(
  //         'https://admin-jjkk-payment-test.iavnight.com:8081/api/buy_vip/hy/107/30',
  //         {},
  //         {
  //           headers: {
  //             'access-token': this.$cookie.get('token')
  //           }
  //         }
  //       )
  //       .then(response => {
  //         console.log('response')
  //         console.log(response)
  //       })
  //       .catch(error => {
  //         console.log('errpr')
  //         Object.keys(error).forEach(el => {
  //           console.group(el)
  //           console.log(error[el])
  //           console.groupEnd()
  //         })
  //       })
  //   }
  // }
})
</script>
