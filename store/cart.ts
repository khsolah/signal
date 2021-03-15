import { ActionTree, GetterTree, MutationTree } from "vuex/types/index"
import { RootState } from "."

import { ICartOfProduct } from '~/common/interface'

export const state = () => ({
  cart: [] as ICartOfProduct[]
})

export type CartState = ReturnType<typeof state>

export const getters: GetterTree<CartState, RootState> = {
  cartStatus: state => state.cart.length,
  getCart: state => state.cart
}

export const mutations: MutationTree<CartState> = {
  AddProductToCart: (state, payload: ICartOfProduct) => {
    const index = state.cart.findIndex(el => el.name === payload.name)
    if (index !== -1) {
      state.cart[index].amount++
    } else {
      state.cart.push(payload)
    }

    console.log('state::', state)
  },
  RemoveProductFromCart: (state, name: string):void => {
    state.cart.splice(state.cart.findIndex(el => el.name === name), 1)
  },
  UpdateProductFromCart: (state, { index, quantity }: { index: number, quantity: number }): void => {
    state.cart[index].amount = quantity
  }
}

export const actions: ActionTree<CartState, RootState> = {
  AddProductToCart: ({ commit }, payload: ICartOfProduct) => {
    commit('AddProductToCart', payload)
  },
  RemoveProductFromCart: ({ commit }, name: string) => {
    commit('RemoveProductFromCart', name)
  },
  UpdateProductFromCart: ({ commit }, { index, quantity }: { index: number, quantity: number }) => {
    commit('UpdateProductFromCart', { index, quantity })
  }
}