import { createStore } from 'vuex'
// import { createApp } from 'vue'
import { getToken, setToken, removeToken } from '@/utils/auth'

// const app = createApp() // Vue 초기화를 위한 새로운 메서드
// app.use(Vuex)

const store = createStore({
  state: {
    token: getToken() || ''
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    },
    CLEAR_TOKEN (state) {
      state.token = ''
      removeToken()
    }
  },
  actions: {
    login ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    logout ({ commit }) {
      commit('CLEAR_TOKEN')
    }
  },
  getters: {
    isAuthenticated: state => !!state.token
  }
})

export default store
