// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex)
Vue.prototype.$axios = axios
const store = new Vuex.Store({
  state: {
    count: 0,
    width: '30%',
    color: 'red'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    rest (state) {
      state.count = 0
    },
    changeWidth (state, option) {
      state.width = option
    },
    restWidth (state) {
      state.width = '30%'
    },
    changeColor (state, payload) {
      state.color = payload.data
    },
    restColor (state) {
      state.color = 'red'
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
console.log(store.state.count)
