const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
        .set('@', resolve('src'))
        .set('_c',resolve('src/components'))
        .set('assets',resolve('src/assets'))
        .set('img',resolve('src/assets/img'))
  },
  devServer: {
    proxy: 'http://service.dev.gddiyi.cn/'
    // proxy: 'http://www.dy.cc'
  }

}
