<template>
  <el-space size="large">
    <ToggleSidebar />
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <MenuSearch />
    <FullScreen />
    <Notification />
    <UserInfo />
  </el-space>
</template>

<script lang="ts" setup>
import UserInfo from './userInfo.vue'
import Notification from './notification.vue'
import FullScreen from './fullScreen.vue'
import MenuSearch from './menuSearch.vue'
import ToggleSidebar from './toggleSidebar.vue'
import Breadcrumb from './breadcrumb.vue'
</script>
