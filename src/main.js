import { createApp } from 'vue'

// npm VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 11 vue3-loading-overlay
// Import component引入路經須改為vue3和overlay
import Loading from 'vue3-loading-overlay';
// Import stylesheet引入路經須改為vue3和overlay
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import App from './App.vue'
import router from './router'
// <!-- 14.3套用全域的千分號方法 -->
import { currency } from './methods/filter';

// 15.Toast訊息改為全域使用
import $httpMessageState from './methods/pushMessageState';

// 原本-createApp(App).use(router).mount('#app')
// npmjs.com/package/vue-axios參找此網址改為下列
const app = createApp(App)
// 14.3套用全域的千分號方法
app.config.globalProperties.$filter = {
    currency,
};

// 15.Toast訊息改為全域使用
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios)
app.use(router)
// #11-2 多處用到，全域註冊
app.component('LoadIng', Loading)
app.mount('#app')
