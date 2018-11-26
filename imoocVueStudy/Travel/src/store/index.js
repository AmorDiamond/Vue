import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '成都'
  },
  actions: {
    changeCity: (ctx, city) => {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity: (state, city) => {
      state.city = city
    }
  }
})
