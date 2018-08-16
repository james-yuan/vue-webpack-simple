一个简单的webpack配置demo

npm run build

报错：integrity checksum failed when using sha1 （npm需要更新）

解决：
npm i -g npm 
npm install
npm run build
参考：https://www.cnblogs.com/GuliGugaLiz/p/7553006.html

在执行npm run build

build: `cross-env NODE_ENV=production webpack --progress --hide-modules`

npm install --save-dev cross-env

报错：EPERM: operation not permitted
添加cmd.exe的运行权限
https://www.cnblogs.com/haochuang/p/5796284.html


Unsupported platform for fsevents@1.1.3
如果是warning错误: 
这个fsevents是mac下用的，windows忽略即可；


install --save-dev webpack
(可能需要全局安装webpack-cli)


使用webpack构建本地服务器（安装自动刷新热更新服务）
npm install --save-dev webpack-dev-server


npm run server
即可在本地的8080端口查看结果

### Webpack的强大功能
#### devtool
生成Source Maps（使调试更容易）

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
// cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。

### vue-router基本用法
单页应用
https://www.cnblogs.com/SamWeb/p/6610733.html


# install dependencies
npm install


扩展
// 依赖包编排，支持动态构建（类似maven）  [npm install]






