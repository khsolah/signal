import { ActionTree, GetterTree, MutationTree } from 'vuex'

export type RootState = ReturnType<typeof state>

export const state = () => ({
  WindowWidth: process.client ? window.innerWidth : 0,
  WindowSize: ''
})

export const getters: GetterTree<RootState, RootState> = {
  WindowWidth: state => state.WindowWidth
}

export const mutations: MutationTree<RootState> = {
  DetectWindowResize: (state) => {
    console.log('resize')
    state.WindowWidth = window.innerWidth
    switch (true) {
      case (window.innerWidth < 576):
        state.WindowSize = 'xs'
        break
      case (window.innerWidth < 768):
        state.WindowSize = 'sm'
        break
      case (window.innerWidth < 992):
        state.WindowSize = 'md'
        break
      case (window.innerWidth < 1200):
        state.WindowSize = 'lg'
        break
      default:
        state.WindowSize = 'xl'
    }
  },
  InitWindowWidth: state => {
    state.WindowWidth = window.innerWidth
  }
}

export const actions: ActionTree<RootState, RootState> = {
  DetectWindowResize: ({ commit }) => {
    commit('DetectWindowResize')
  },
  InitWindowWidth: ({ commit }) => {
    commit('InitWindowWidth')
  }
}
