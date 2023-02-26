import { IAdminQuery, IAdminRes } from '@/types/setting'
import api from '@/utils/api'

export const getAdmin = (params:IAdminQuery) => {
  return api.get<{
    list:IAdminRes[],
    count:number
  }>('/admin/setting/admin', { params })
}
