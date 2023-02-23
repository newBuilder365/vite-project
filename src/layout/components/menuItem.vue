<template>
  <el-sub-menu
    :v-if="menu.children&&menu.children.length"
    index="product"
  >
    <MenuItem
      :key="subMenu.path"
      v-for="subMenu in menu.children"
      :menu="subMenu"
    />
  </el-sub-menu>
  <el-menu-item
    :index="menu.path"
    :key="menu.path"
  >
    商品列表
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
