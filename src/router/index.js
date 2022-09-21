import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/edit-info',
    children: [
      {
        path: 'edit-info',
        component: () => import('@/views/student/editInfo')
      },
      {
        path: 'search-info',
        component: () => import('@/views/student/searchInfo')
      },
      {
        path: 'grade',
        component: () => import('@/views/grade')
      },
      {
        path: 'course',
        component: () => import('@/views/course')
      },
      {
        path: 'major',
        component: () => import('@/views/majorAndClass/major')
      },
      {
        path: 'class',
        component: () => import('@/views/majorAndClass/class')
      }
    ]
  }
  // {
  //   path: '/reg',
  //   component: () => import('@/views/register')
  // },
  // {
  //   path: '/login',
  //   component: () => import('@/views/login')
  // }
]

const router = new VueRouter({
  routes
})

// const whiteList = ['/login', '/reg'] // 白名单

// router.beforeEach((to, from, next) => {
//   const token = store.state.token
//   if (token) {
//     // 已登录
//     if (!store.state.userInfo.username) {
//       // 有token值但没有用户信息，请求用户信息
//       store.dispatch('getUserInfoActions')
//     }
//     next()
//   } else {
//     // 未登录
//     if (whiteList.includes(to.path)) {
//       // 目的地址在白名单里，直接放行
//       next()
//     } else {
//       // 强制跳转
//       next('/login')
//     }
//   }
// })

export default router
