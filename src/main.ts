import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import coms from '@/components/Index'

createApp(App).use(createPinia()).use(router).use(coms).mount('#app')
