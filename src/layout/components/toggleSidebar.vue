<template>
  <el-icon
    @click="updateCollapse"
    v-show="!collapse"
  >
    <Fold />
  </el-icon>
  <el-icon
    @click="updateCollapse"
    v-show="collapse"
  >
    <Expand />
  </el-icon>
</template>

<script lang='ts' setup>
import { useGlobalStore } from '@/store/global'
import { Fold, Expand } from '@element-plus/icons-vue'
import { computed } from 'vue'
const { updateCollapse } = useGlobalStore()
const collapse = computed(() => useGlobalStore().collapse)
</script>

<style lang="scss" scoped>
i {
  font-size: 19px;
  cursor: pointer;
}

</style>
