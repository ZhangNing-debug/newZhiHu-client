import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const app = createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
app.config.globalProperties.$router = router;
