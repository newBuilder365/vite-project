import { IFormRule } from './element'

export type IAdminQuery= {
  page: number;
  limit:number;
  name?:string;
  roles?:string;
  status?:number|''
}

export type IAdminRes = {
  id:number;
  account: string;
  head_pic: string;
  pwd: string;
  real_name: string;
  roles: string;
  last_ip: string;
  last_time: number;
  add_time: number;
  login_count:number;
  level: number;
  status: number;
  is_del: number;
  _add_time: string;
  _last_time: string;
}

export type ISelectOptions ={
  label:string;
  value: number
}

export type IAdminCreateRule ={
  field:string;
  options?:ISelectOptions[],
  props: {
    type:string;
    placeholder: string;
  },
  title: string;
  type: string;
  validate:IFormRule[],
  value: string
}

export type IAdminCreate= {
  action:string;
  info: string;
  method: string;
  rules:IAdminCreateRule[];
  status: boolean;
  title: string;
}
