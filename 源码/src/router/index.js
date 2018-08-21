import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// import create from '@/pages/create/tem.vue'
// import detail from '@/pages/detail/tem.vue'
// import edit from '@/pages/edit/tem.vue'
// import index from '@/pages/index/tem.vue'
// import login from '@/pages/login/tem.vue'
// import my from '@/pages/my/tem.vue'
// import register from '@/pages/register/tem.vue'
// import user from '@/pages/user/tem.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/pages/index/tem.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/pages/create/tem.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogid',
      name: 'detail',
      component: () => import('@/pages/detail/tem.vue')
    },
    {
      path: '/edit/:blogid',
      name: 'edit',
      component: () => import('@/pages/edit/tem.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/tem.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/pages/my/tem.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/register/tem.vue')
    },
    {
      path: '/user/:userid',
      name: 'user',
      component: () => import('@/pages/user/tem.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('islogin').then(islogin=>{
      if (!islogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() 
  }
})

export default router
