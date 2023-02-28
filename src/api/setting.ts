import { IAdminCreate, IAdminQuery, IAdminRes } from '@/types/setting'
import api from '@/utils/api'

export const getAdmin = (params:IAdminQuery) => {
  return api.get<{
    list:IAdminRes[],
    count:number
  }>('/admin/setting/admin', { params })
}

// 获取角色
export const getRoles = () => {
  return api.get<IAdminCreate>('admin/setting/admin/create').then(data => {
    const roles = data.data.rules.find(v => v.field === 'roles')
    if (roles && roles.options) {
      return roles.options
    }
    return []
  })
}
