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

// 菜单类型
export type IMenu={
  header: string;
  icon: string;
  is_header: number;
  path: string;
  title: string;
}

// 用户信息类型
export type IUserInfo={
  account: string;
  head_pic: string;
  id: number;
}

// 登录接口返回类型
export type ILoginResponse = ICommom<{
  expires_time: number;
  logo: string;
  logo_square: string;
  menus: IMenu[];
  newOrderAudioLink: string;
  token: string;
  unique_auth:Array<string>;
  user_info:IUserInfo;
  version: string;
}>
