import { RouterView, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/product',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'list',
      name: 'product_list',
      meta: {
        title: '产品列表'
      },
      component: import('@/views/product/list/index.vue')
    },
    {
      path: 'classify',
      name: 'product_classify',
      meta: {
        title: '产品分类'
      },
      component: import('@/views/product/classify/index.vue')
    },
    {
      path: 'attr',
      name: 'product_attr',
      meta: {
        title: '商品规格'
      },
      component: import('@/views/product/attr/index.vue')
    },
    {
      path: 'reply',
      name: 'product_reply',
      meta: {
        title: '商品评论'
      },
      component: import('@/views/product/reply/index.vue')
    }
  ]
}

export default routes
