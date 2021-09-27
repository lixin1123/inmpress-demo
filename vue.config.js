const express = require('express')
const app = express()

var data = require('./mock/data')  //本地json文件数据

var apiRoutes = express.Router();
app.use('/api', apiRoutes)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/impress-demo/'
    : '/',
  configureWebpack: {
    externals: {
      impress: "impress",
    },
  },
  devServer: {
    before(app) {
      app.get('/api/getData', (req,res) => {
        res.json({
          errno: 0,
          data: data
        })
      })
    },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null
  }
};