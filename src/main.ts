import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import coms from '@/components/Index'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia()).use(router).use(coms).use(ElMessage).use(ElMessageBox).mount('#app')
