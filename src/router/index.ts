import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/index.vue'
import MediaRoute from '@/router/modules/media'
import OrderRoute from '@/router/modules/order'
import PermissionRoute from '@/router/modules/permission'
import ProductRoute from '@/router/modules/product'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: AppLayout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue')
      },
      ProductRoute,
      PermissionRoute,
      OrderRoute,
      MediaRoute
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  nprogress.start()
  // document.title = to.meta.title
})

router.afterEach(() => {
  nprogress.done()
})

export default router
