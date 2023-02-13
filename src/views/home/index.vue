<template>
  <h1>{{ name }}</h1>
  <Foo />
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { useUserStore } from '@/store/user'
import { onMounted } from 'vue'
const { name } = useUserStore()
onMounted(() => {
  getLoginInfo().then(res => {
    console.log('res', res)
  })
})

</script>
