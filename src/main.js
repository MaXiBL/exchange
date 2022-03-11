import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.less'

import backNav from './components/navbar/BackNav'
import backNav2 from './components/navbar/BackNav2'

const app = createApp(App)
// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
app.use(router).use(store).use(ElementPlus).mount('#app')
app.component('BackNav', backNav)
app.component('BackNav2', backNav2)
