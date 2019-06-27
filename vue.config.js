module.exports = {
    //axios域代理，解决axios跨域问题
    publicPath: process.env.NODE_ENV === 'development' ? '/': '/',// 需要区分生产环境和开发环境
    devServer: {
        proxy: {
            '/': {
                target: 'http://www.jiajiahebao.com', //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                  '^/': '/' //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
              }
        }
    }
}