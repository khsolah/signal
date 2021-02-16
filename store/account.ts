import { GetterTree } from "vuex/types/index"
import { RootState } from "."

export const state = () => ({
  id: '',
  name: '',
  token: '',
  legalToken: false
})

export type AccountState = ReturnType<typeof state>

export const getters: GetterTree<AccountState, RootState> = {
  accountInformations: state => ({
    id: state.id,
    name: state.name,
    isLogin: state.token,
    legalToken: state.legalToken
  })
}