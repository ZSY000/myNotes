import Router from 'vue-router'
import routes from './routes'

// 返回函数，调用后得到Router实例对象
export default () => {
  return new Router({
    routes,
    mode: 'history'
  })
}
