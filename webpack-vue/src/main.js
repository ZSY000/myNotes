import App from './App.vue'
import Vue from 'vue'

new Vue({
  el: '#app', // 模板index.html中的#app元素
  render: h => h(App)
})