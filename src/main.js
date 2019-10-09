// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 引入fastClick
import axios from 'axios';
import qs from 'qs';
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'


Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
