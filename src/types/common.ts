import { AxiosResponse } from 'axios'

// 接口返回后最终想要类型
export type ICommom<T>= {
  status: number;
  msg: string;
  data: T;
}

// 服务返回的数据类型
export type AxiosResponseData<T, D = any> = Promise<AxiosResponse<ICommom<T>, D>['data']>

// 登录参数类型
export type ILogin = {
  account: string,
  pwd: string,
  imgcode: string
}

// 登录接口返回类型
export type ILoginResponse = ICommom<{
  token: string;
  expires_time: number;
  path: string;
  title: string;
  icon: string;
  header: string;
  is_header: number;
  children: never[];
}>
