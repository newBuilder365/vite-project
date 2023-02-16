import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  meta: {
    title: '附件列表'
  },
  component: () => import('@/views/media/index.vue')
}

export default routes
