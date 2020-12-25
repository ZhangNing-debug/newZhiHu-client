import Home from '../views/Home.vue';
import Follow from '../views/component/Follow.vue';
import Hot from '../views/component/Hot.vue';
import Recommend from '../views/component/Recommend.vue';
const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'recommend',
        component: Recommend
      },
      {
        path: '/follow',
        name: 'follow',
        component: Follow
      },
      {
        path: '/hot',
        name: 'hot',
        component: Hot
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Login/index.vue")
    component: () => import(/* webpackChunkName: "about" */ '@views/Login/index.vue')
  },
  {
    path: '/oauth',
    name: 'oauth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Login/index.vue")
    component: () => import(/* webpackChunkName: "oauth" */ '@views/oauth/index.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import(/* webpackChunkName: "about" */ '@views/explore.vue')
  }
];
export default routers;
