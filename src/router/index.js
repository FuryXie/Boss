import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Register from '@/pages/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
