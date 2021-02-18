import { ActionTree, GetterTree, MutationTree } from "vuex/types/index"
import { RootState } from "."

import { ICartProduct } from '~/common/interface'

export const state = () => ({
  id: '',
  name: '',
  token: '',
  legalToken: false,
  cart: [] as ICartProduct[]
})

export type AccountState = ReturnType<typeof state>

export const getters: GetterTree<AccountState, RootState> = {
  accountInformations: state => ({
    id: state.id,
    name: state.name,
    isLogin: state.token,
    legalToken: state.legalToken
  }),
  ShowCart: state => state.cart
}

export const mutations: MutationTree<AccountState> = {
  AddProductToCart: (state, payload: ICartProduct) => {
    const index = state.cart.findIndex(el => el.name === payload.name)
    if (index !== -1) {
      state.cart[index].amount++
    } else {
      state.cart.push(payload)
    }
  },
  RemoveProductFromCart: (state, name: string):void => {
    state.cart.splice(state.cart.findIndex(el => el.name === name), 1)
  }
}

export const actions: ActionTree<AccountState, RootState> = {
  AddProductToCart: ({ commit }, payload: ICartProduct) => {
    commit('AddProductToCart', payload)
  },
  RemoveProductFromCart: ({ commit }, name: string) => {
    commit('RemoveProductFromCart', name)
  },
}