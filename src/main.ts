import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import coms from '@/components/Index'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia()).use(router).use(coms).mount('#app')
