import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './router/index'

Vue.use(VueRouter)

const router = createRouter()
new Vue({
  el: '#app', // 模板index.html中的#app元素
  router,
  render: h => h(App)
})