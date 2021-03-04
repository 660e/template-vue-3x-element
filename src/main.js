import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import router from './router';
import store from './store';

// element-plus
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
app.use(ElementPlus, { size: 'small' });

app.use(router).use(store).mount('#app');
