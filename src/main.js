import { createApp } from 'vue';
import App from './App.vue';

import i18n from './i18n';
import router from './router';
import store from './store';

const app = createApp(App);

// mock
import './mock';

// element-plus
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
app.use(ElementPlus, { size: 'small', i18n: i18n.global.t });

// echarts
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([PieChart, LegendComponent, TooltipComponent, CanvasRenderer]);
app.config.globalProperties.$echarts = echarts;

// ccc
import ProTable from '@/components/pro-table.vue';
app.component('pro-table', ProTable);

// filters
import * as filters from './filters';
app.config.globalProperties.$filters = filters;

// global
import './styles/index.less';

app.use(i18n).use(router).use(store).mount('#app');
