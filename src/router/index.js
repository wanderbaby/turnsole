import { createRouter, createWebHistory } from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Nprogress.configure({
  showSpinner: false
})

const ROUTER = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/index-page/index-page.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login-page/login.vue')
    }
  ]
})

ROUTER.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

ROUTER.afterEach(() => {
  Nprogress.done()
})

export default ROUTER
