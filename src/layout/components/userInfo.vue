<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ globalStore.user?.user_info.account }}
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'
import { ArrowDown } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const globalStore = computed(() => useGlobalStore())
const logout = () => {
  globalStore.value.updateUseInfo(null)
  router.push({
    name: 'login'
  })
}
</script>

<style lang="scss" scoped></style>
