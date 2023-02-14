import { AxiosResponse } from 'axios'

// 接口返回后最终想要类型
export type ICommom<T>= {
  status: number;
  msg: string;
  data: T;
}

// 服务返回的数据类型
export type AxiosResponseData<T, D=any> = Promise<AxiosResponse<ICommom<T>, D>['data']>
