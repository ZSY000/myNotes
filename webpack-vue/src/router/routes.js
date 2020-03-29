import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
export default [
  { path: '/', redirect: '/home' },
  { path: '/home', redirect: Home },
  { path: '/login', component: Login }
]