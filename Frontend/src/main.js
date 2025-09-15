// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 新增，匯入 router
import './style.css'

const app = createApp(App)
app.use(router) // 註冊 router
app.mount('#app')
