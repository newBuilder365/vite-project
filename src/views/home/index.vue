<template>
  <h1>{{ name }}</h1>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-button
    type="primary"
    round
  >
    Primary
  </el-button>
  <Foo />
  <AppIcon
    name="edit"
  />
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import { useUserStore } from '@/store/user'
import { Edit } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
const { name } = useUserStore()
onMounted(() => {
  getLoginInfo().then((res) => {
    console.log('res', res)
  })
})
</script>
