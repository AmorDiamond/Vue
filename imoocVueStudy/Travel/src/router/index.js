import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import CityPage from '@/pages/city/city'
import DetailPage from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: CityPage
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: DetailPage
    }
  ]
})
