import { createApp } from 'vue'

// npm VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

// 原本-createApp(App).use(router).mount('#app')
// npmjs.com/package/vue-axios參找此網址改為下列
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
