import { ILoginResponse } from '@/types/common'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state () {
    return {
      collapse: true,
      user: (window.localStorage.user ? JSON.parse(window.localStorage.user) : null) as ILoginResponse|null
    }
  },
  actions: {
    updateCollapse () {
      this.collapse = !this.collapse
    },
    updateUseInfo (user:ILoginResponse) {
      window.localStorage.setItem('user', JSON.stringify(user))
      this.user = user
    }
  }
})
