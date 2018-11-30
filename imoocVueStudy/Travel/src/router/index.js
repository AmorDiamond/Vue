import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import CityPage from '@/pages/city/city'
import DetailPage from '@/pages/detail/detail'
// 配置组件按需懒加载（VUE里所有使用组件的地方都可以使用以下方法来实现按需加载，不只是在router配置里实现）
// const DetailPage = () => import('@/pages/detail/detail')

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
  ],
  // 界面路由跳转后可能会出现新加载的页面滚动条在上一个页面的滚动位置，vue router提供啦方法解决https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
