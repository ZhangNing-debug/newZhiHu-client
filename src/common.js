// 注册全局组件
import { createApp } from 'vue';
import { Button, message, Input } from 'ant-design-vue';
import App from './App.vue';

const app = createApp(App);

app.use(Button);
app.use(message);
app.use(Input);

export default app;
