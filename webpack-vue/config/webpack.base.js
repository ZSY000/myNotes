// 公共配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 自动打包html
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 分离css插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  // 清除dist目录插件
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 处理vue

module.exports = {
  // 入口entry，从哪个文件开始打包
  entry: './src/main.js',
  // 出口output，打包到哪里
  output: {
    // 打包输出的目录（必须是绝对路径）
    path: path.join(__dirname, '../dist'),
    // 打包后生成的文件名
    filename: 'js/bundle.js'  //把放入js文件中
  },

  // 配置模块加载规则
  // 默认webpack只认识json和js，不认识其他文件，如果需要打包其他文件，需要配置对应loader
  module: {
    rules: [
      // 处理vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/, // 正则表达式，用来匹配
        // css-loader让webpack能够识别解析css文件
        // style-loader通过动态创建style标签的方式让解析后的css内容作用在页面上
        // use: ['style-loader', 'css-loader'] // 处理顺序：从后往前处理
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }, 
          'css-loader', 
          'less-loader'
        ] // less-loader将less转换为css
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // i忽视大小写
        use: [
          {
            // 如果不配置url-loader，默认会将文件转成base64字符串格式
            loader: 'url-loader',
            options: {
              limit: 8*1024, // 8k以内，转成base64，减少请求次数；大于8k，会请求图片
              name: '[name].[ext]', // 配置输出的文件名
              publicPath: '../images/',  // 配置静态资源的引用路径（相对于index.html）
              outputPath: 'images/' // 配置输出的文件目录
            }
          }
        ]
      },
      // 处理js高级语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // 引入插件
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new MiniCssExtractPlugin({
      filename: 'css/index.css' // 定义打包好的文件的存放路径和文件名（dist/css/index.css）
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],

  // 提取公共模块
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}