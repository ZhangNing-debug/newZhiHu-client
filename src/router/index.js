import { createRouter, createWebHistory } from 'vue-router';
// import { setToken, getToken } from '@/libs/util'
import { getToken, setToken } from '@/libs/util';
import config from '@/config/index.js';
import { getGitHubUserInfo } from '@/api/oauth.js';
// import store from "@/store";

const { homeName } = config;
import routes from './routers';
const LOGIN_PAGE_NAME = 'Login';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  const token = getToken();
  if (!token && to.name === 'oauth') {
    // 授权页面
    console.log('授权页面', to, from);
    getGitHubUserInfo({
      client_id: '05836262c1c99fc6f393',
      client_secret: '56c0601c0b20edbf954ed79e8b90a3030cd6aa7d',
      code: to.query.code
    })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          console.log(res);
          setToken(res.token);
          if (from.query.redirectPath) {
            next({
              path: from.query.redirectPath
            });
          } else {
            next({ name: homeName });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // https://github.com/login/oauth/access_token
  } else if (!token && to.name !== LOGIN_PAGE_NAME) {
    // const targetRoute = to.query;
    // 未登录且要跳转的页面不是登录页
    // 记录要跳转的页面 登陆成功后跳转到指定页
    // targetRoute.redirectPath = location.pathname;
    // console.log(location);
    // 跳转到登录页
    next({
      name: LOGIN_PAGE_NAME,
      query: { redirect: to.fullPath }
    });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    });
  } else {
    console.log('跳转', from);
    // if (from.query.redirectPath) {
    //   next({
    //     path: from.query.redirectPath
    //   });
    // } else {
    //   next();
    // }
    next();
    // if (store.state.user.hasGetInfo) {
    //   // turnTo(to, store.state.user.access, next);
    // } else {
    //   store
    //     .dispatch("getUserInfo")
    //     .then(user => {
    //       console.log(user);
    //       // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
    //       // turnTo(to, user.access, next);
    //     })
    //     .catch(() => {
    //       setToken("");
    //       next({
    //         name: "login"
    //       });
    //     });
    // }
  }
});
export default router;
