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

// 原本-createApp(App).use(router).mount('#app')
// npmjs.com/package/vue-axios參找此網址改為下列
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
// #11-2 多處用到，全域註冊
app.component('LoadIng', Loading)
app.mount('#app')
