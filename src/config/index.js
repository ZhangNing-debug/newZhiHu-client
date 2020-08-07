export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: "http://localhost:8090/"
    // dev: "http://39.106.79.14:3000/",
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: "home"
};
