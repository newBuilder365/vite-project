import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state () {
    return {
      collapse: true
    }
  },
  actions: {
    updateCollapse () {
      this.collapse = !this.collapse
    }
  }
})
