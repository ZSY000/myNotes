// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import createRouter from './router/router'
import createStore from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
