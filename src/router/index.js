import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Register from '@/pages/register/Register'
import Introduce from '@/pages/introduce/Introduce'
import Login from '@/pages/login/Login'
import List from '@/pages/list/List'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  // 去掉 “#”
  // mode: 'history',
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
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    }, 
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
