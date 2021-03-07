import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// element-plus
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
app.use(ElementPlus, { size: 'small' });

// echarts
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VueEcharts from 'vue-echarts';
echarts.use([PieChart, LegendComponent, TooltipComponent, CanvasRenderer]);
app.component('v-chart', VueEcharts);

// filters
import * as filters from './filters';
app.config.globalProperties.$filters = filters;

// global
import './styles/index.less';

// router
import router from './router';
app.use(router);

// store
import store from './store';
app.use(store);

app.mount('#app');
