import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HandleList from '@/components/list/HandleList'
import TodoDetail from '@/components/list/TodoDetail'
import Main from '@/components/layout/Main'
// import User from '@/components/user/user'
// import UserList from '@/components/user/list'
// 将几个组件打包在一起然后懒加载配置（webpackChunkName一样就打包在一起）
const User = () => import(/* webpackChunkName: "group-user" */ '@/components/user/user')
const UserList = () => import(/* webpackChunkName: "group-user" */ '@/components/user/list')
// import UserDetail from '@/components/user/userDetail'
// 懒加载配置
const UserDetail = () => import('@/components/user/userDetail')
const HandleList = () => import('@/components/list/HandleList')

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/list',
//       name: 'List',
//       component: HandleList,
//       children: [
//         {
//           path: 'detail/:content',
//           component: TodoDetail
//         }
//       ]
//     },
//     {
//       path: '/layout',
//       component: Main,
//       children: [
//         {
//           path: 'user',
//           component: User,
//           children: [
//             {path: '',
//               components: {
//                 default: UserList,
//                 bottom: UserDetail
//               }
//             },
//             {path: 'detail/:name', name: 'userDetail', component: UserDetail, props: true}// 不使用$router传参，使用props
//           ]
//         }
//       ]
//     }
//   ]
// })
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: HandleList,
      children: [
        {
          path: 'detail/:content',
          component: TodoDetail
        }
      ]
    },
    {
      path: '/layout',
      component: Main,
      meta: { requiresAuth: true }, // 添加是否验证权限
      children: [
        {
          path: 'user',
          component: User,
          children: [
            {path: '',
              components: {
                default: UserList,
                bottom: UserDetail
              }
            },
            {path: 'detail/:name', name: 'userDetail', component: UserDetail, props: true}// 不使用$router传参，使用props
          ]
        }
      ]
    }
  ]
})
// 从路由配置里获取需要验证权限的路由进行处理
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  // this route requires auth, check if logged in
  // if not, redirect to login page.
    const isLogin = true
    if (!isLogin) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
