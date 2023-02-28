import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
// import coms from '@/components/Index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
// import 'element-plus/theme-chalk/el-dialog.css'

import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElMessage)
app.use(ElMessageBox)
// app.use(ElDialog)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const modules = import.meta.glob('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path])
}

app.mount('#app')
