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
import VueEcharts from 'vue-echarts';
echarts.use([PieChart, LegendComponent, TooltipComponent, CanvasRenderer]);
app.component('v-chart', VueEcharts);

// ccc
import CccTable from '@/components/ccc-table.vue';
app.component('ccc-table', CccTable);

// filters
import * as filters from './filters';
app.config.globalProperties.$filters = filters;

// global
import './styles/index.less';

app.use(i18n).use(router).use(store).mount('#app');
