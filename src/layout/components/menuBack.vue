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
    <slot id="'title'">
      系统测试
    </slot>
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="product">
      <template #title>
        <el-icon><GoodsFilled /></el-icon>
        <span>商品信息</span>
      </template>
      <el-menu-item
        index="/product/list"
      >
        商品列表
      </el-menu-item>
      <el-menu-item
        index="/product/classify"
      >
        商品分类
      </el-menu-item>
      <el-menu-item
        index="/product/attr"
      >
        商品规格
      </el-menu-item>
      <el-menu-item
        index="/product/reply"
      >
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="permission">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>权限管理</span>
      </template>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Files /></el-icon>
      <template #title>
        附件管理
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/global'
import { Files, HomeFilled, GoodsFilled, Setting } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
const { collapse } = storeToRefs(useGlobalStore())
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
