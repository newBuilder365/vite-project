<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    :collapse="collapse"
    :width="300"
    router
  >
    <menuItem
      v-for="menu in menus"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import menuItem from './menuItem.vue'
const { collapse } = storeToRefs(useGlobalStore())
const menus = computed(() => useGlobalStore().user?.menus)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
