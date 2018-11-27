import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// let defaultCity = '上海'
// // 如果浏览器被设置了隐身模式或者屏蔽了localStorage使用localStorage会报错，避免报错导致不能正常执行，使用try catch
// try {
//   defaultCity = localStorage.city || defaultCity
// } catch (e) {}
// Store里的代码和操作变多后，可以将state、actions和mutations单独提出去为三个js文件
export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // }
  state: state,
  actions: {
    changeCity: (ctx, city) => {
      ctx.commit('changeCity', city)
    }
  },
  // mutations: {
  //   changeCity: (state, city) => {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}
  //   }
  // }
  mutations: mutations
})
