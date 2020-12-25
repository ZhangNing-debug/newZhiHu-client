// vue.config.js
const path = require('path');

const CompressionWebpackPlugin = require('compression-webpack-plugin'); // 开启gzip压缩， 按需引用
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 打包分析
// cdn链接
// const cdn = {
//   // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
//   externals: {
//     vue: 'Vue',
//     vuex: 'Vuex',
//     'vue-router': 'VueRouter',
//     marked: 'marked',
//     'highlight.js': 'hljs',
//     nprogress: 'NProgress',
//     axios: 'axios'
//   },
//   // cdn的css链接
//   css: ['https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'],
//   // cdn的js链接
//   js: [
//     'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
//     'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
//     'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
//     'https://cdn.bootcss.com/marked/0.8.0/marked.min.js',
//     'https://cdn.bootcss.com/highlight.js/9.18.1/highlight.min.js',
//     'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
//     'https://cdn.bootcss.com/axios/0.19.2/axios.min.js'
//   ]
// }
// // 是否为生产环境
// const isProduction = process.env.NODE_ENV !== 'development'

// // 本地环境是否需要使用cdn
// const devNeedCdn = false

// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: true, // 生产环境的 source map
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: (config) => {
    // config.resolve.symlinks(true) // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    // config.plugin('html').tap((args) => {
    //   // 修复 Lazy loading routes Error
    //   args[0].chunksSortMode = 'none'
    //   // 生产环境或本地需要cdn时，才注入cdn path:https://juejin.im/post/6844904071896236040
    //   // if (isProduction || devNeedCdn) args[0].cdn = cdn
    //   return args
    // })
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))
      .set('@use', resolve('src/use'));
    // 打包分析
    // 打包之后自动生成一个名叫report.html文件(可忽视)
    if (process.env.npm_config_report) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ]);
    }
    // 压缩图片
    // 需要 npm i -D image-webpack-loader
    // ============压缩图片 start============
    // config.module
    //   .rule('images')
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({
    //     mozjpeg: {
    //       progressive: true,
    //       quality: 65
    //     },
    //     // optipng.enabled: false will disable optipng
    //     optipng: {
    //       enabled: false
    //     },
    //     pngquant: {
    //       quality: [0.65, 0.90],
    //       speed: 4
    //     },
    //     gifsicle: {
    //       interlaced: false
    //     },
    //     // the webp option will enable WEBP
    //     webp: {
    //       quality: 75
    //     }
    //   })
    // ============压缩图片 end============
  },
  configureWebpack: (config) => {
    // 开启 gzip 压缩
    // 需要 npm i -D compression-webpack-plugin
    const plugins = [];
    if (process.env.npm_config_gzip) {
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    if (process.env.NODE_EN === 'production') {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    }

    config.plugins = [...config.plugins, ...plugins];
  },
  css: {
    // extract: IS_PROD,
    // requireModuleExtension: false, // 去掉文件名中的 .module
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        lessOptions: {
          // `globalVars` 定义全局对象，可加入全局变量
          // globalVars: {
          //   primary: '#333'
          // },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    // host: 'localhost',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    hotOnly: true // 热更新
    // proxy: 'http://localhost:8090' // 配置跨域处理,只有一个代理
    // proxy: {
    //   // 配置多个跨域
    //   '/v1': {
    //     target: 'http://localhost:8090',
    //     changeOrigin: true,
    //     // ws: true,//websocket支持
    //     secure: false,
    //     pathRewrite: {
    //       '^/v1': '/'
    //     }
    //   }
    // }
  }
};
