// 注册全局组件
import { createApp } from 'vue';
import { Button, message, Input, Spin } from 'ant-design-vue';
// import Antd from 'ant-design-vue';
import App from './App.vue';

const app = createApp(App);

app.use(Button);
app.use(message);
app.use(Input);
app.use(Spin);

export default app;
