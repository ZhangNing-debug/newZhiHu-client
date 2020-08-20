import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/components/style.js'

// import { BellFilled } from '@ant-design/icons-vue'

const app = createApp(App)
app.use(antd)
app.use(store)
app.use(router)
app.mount('#app')
// console.log(BellFilled.name)
// app.component(BellFilled.name, BellFilled)

app.config.globalProperties.$router = router
