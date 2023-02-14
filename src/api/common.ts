import api from '@/utils/api'

export const getLoginInfo = () => {
  return api.get('login/info')
}
