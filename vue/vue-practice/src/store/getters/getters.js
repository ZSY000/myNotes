// 可以认为是 store 的计算属性
// 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
// 且只有当它的依赖值发生了改变才会被重新计算

// 可以接受其他 getter 作为第二个参数
export default {
  res (state) {
    return state.num1 + state.num2
  }
}
