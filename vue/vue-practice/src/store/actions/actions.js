// 对数据进行异步操作
export default {
  updateCount (store, data) {
    setInterval(() => {
      store.state.count += data.num
    }, data.time)
  }
}
