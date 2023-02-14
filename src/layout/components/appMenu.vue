<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <template #title>
        导航二
      </template>
    </el-menu-item>
    <el-menu-item
      index="3"
      disabled
    >
      <i class="el-icon-document" />
      <template #title>
        导航三
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting" />
      <template #title>
        导航四
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
