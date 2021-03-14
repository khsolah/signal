import { ActionTree, GetterTree, MutationTree } from "vuex/types/index"
import { RootState } from "."

export const state = () => ({
  id: '',
  name: '',
  token: '',
  legalToken: false,
})

export type AccountState = ReturnType<typeof state>

export const getters: GetterTree<AccountState, RootState> = {
  accountInformations: state => ({
    id: state.id,
    name: state.name,
    isLogin: state.token,
    legalToken: state.legalToken
  }),
}

export const mutations: MutationTree<AccountState> = {
}

export const actions: ActionTree<AccountState, RootState> = {
}