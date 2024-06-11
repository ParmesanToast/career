import { createStore } from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default createStore({
  state: {
    token: getToken() || '',
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    CLEAR_TOKEN(state) {
      state.token = ''
      removeToken()
    }
  },
  actions: {
    login({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    logout({ commit }) {
      commit('CLEAR_TOKEN')
    }
  },
  getters: {
    isAuthenticated: state => !!state.token, // 토큰이 존재하면 로그인 상태로 간주
    getToken: state => state.token // 토큰을 직접 접근하는 getter 추가
  }
})
