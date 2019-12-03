import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    decrement:state => state.counter--,
    increment:state => state.counter++
  },
  actions: {
    decrement: ({commit}) => commit('decrement'),
    increment: ({commit}) => {
      setTimeout(() => {
        commit('increment')
      },2000)
    }
  },
  modules: {
  },
  getters: {
    counter: state => state.counter
  },
})
