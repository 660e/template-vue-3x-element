import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// element-plus
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
app.use(ElementPlus, { size: 'small' });

// global
import './styles/index.less';

// router
import router from './router';
app.use(router);

// store
import store from './store';
app.use(store);

app.mount('#app');
