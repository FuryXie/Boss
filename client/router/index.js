import Vue from 'vue'
import Router from 'vue-router'
// import InfiniteScroll from '../components/InfiniteScroll'
// import ListX from '../components/ListX'
// import InfiniteScroll_List from '../components/InfiniteScroll_List'
// Pages @/pages/
import Index from '../pages/index/Index'
import Register from '../pages/register/Register'
import Introduce from '../pages/introduce/Introduce'
import Login from '../pages/login/Login'
import List from '../pages/list/List'
import Detail from '../pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/InfiniteScroll',
    //   name: 'InfiniteScroll',
    //   component: InfiniteScroll
    // }, {
    //   path: '/listx',
    //   name: 'ListX',
    //   component: ListX
    // }, {
    //   path: '/il',
    //   name: 'InfiniteScroll_List',
    //   component: InfiniteScroll_List
    // },
    // pages
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
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
