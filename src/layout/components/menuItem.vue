<template>
  <el-sub-menu
    v-if="menu.children&&menu.children.length"
    :index="menu.path"
  >
    <template #title>
      <el-icon><Document /></el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem
      :key="subMenu.path"
      v-for="subMenu in menu.children"
      :menu="subMenu"
    />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
    :key="menu.path"
  >
    <el-icon><HomeFilled /></el-icon>
    {{ menu.title }}
  </el-menu-item>
</template>

<script lang="ts" setup>
import { IMenu } from '@/types/common'
import { PropType, ref } from 'vue'
const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})
const menu = ref(props.menu)
</script>
