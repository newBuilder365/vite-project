import { RouterView, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'setting',
  name: 'setting',
  component: RouterView,
  children: [
    {
      path: 'system_role/index',
      name: 'system_role',
      meta: {
        title: '角色'
      },
      component: import('@/views/permission/role/index.vue')
    },
    {
      path: 'system_admin/index',
      name: 'system_admin',
      meta: {
        title: '管理员'
      },
      component: () => import('@/views/permission/admin/index.vue')
    },
    {
      path: 'system_menus/index',
      name: 'system_menus',
      meta: {
        title: '权限'
      },
      component: () => import('@/views/permission/rule/index.vue')
    }
  ]
}

export default routes
