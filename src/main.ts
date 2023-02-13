import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import coms from '@/components/Index'
// import Foo from '@/components/foo/index.vue'
// const coms = {
//   install: (app: VueApp) => {
//     app.component('Foo', Foo)
//   }

// }
console.log('coms', coms)

createApp(App).use(createPinia()).use(router).use(coms).mount('#app')
