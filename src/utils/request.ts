import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'

const request: AxiosInstance = axios.create({
  baseURL: '/api',
  // baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以对请求参数进行处理，例如加入 token
    const user = window.localStorage.getItem('user')
    let token = ''
    if (user) {
      token = JSON.parse(user).token
    }
    config.headers.Authorization = 'Bearer ' + token
    return config
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.data.status !== 200) {
      ElMessage.error(response.data.msg)
    }
    return response.data
  },
  (error: any) => {
    // Handle errors here
    return Promise.reject(error)
  }
)

export default request
