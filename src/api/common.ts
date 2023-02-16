import { ILogin, ILoginResponse } from '@/types/common'
import api from '@/utils/api'

export const getLoginInfo = () => {
  return api.get('/admin/login/info')
}

// 登录
export const login = (params:ILogin) => {
  return api.post<ILoginResponse>('/admin/login', params)
}
