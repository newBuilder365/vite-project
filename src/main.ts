import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
const modules = import.meta.glob('./components/**/index.ts')

const app = createApp(App).use(createPinia()).use(router)

for (const path in modules) {
  app.use(modules[path])
}

app.mount('#app')
