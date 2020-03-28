// development 开发环境的配置

// 导入公共配置
const base = require('./webpack.base.js')
// 导入webpack-merge用于配置合并，是一个方法
const merge = require('webpack-merge')

// 导出开发环境的配置
// merge可以传入多个参数，会将多个参数合并成一个对象
// 如果有重复的属性名，后面的对象属性会覆盖前面的
module.exports = merge(base, {
  // 打包模式mode，development不压缩，production压缩
  mode: 'development',
  // 配置开发服务器
  devServer: {
    port: 3000, //配置端口
    open: true  // 自动打开浏览器
  }
})