<template>
  <el-pagination
    :current-page="props.page"
    :page-size="props.limit"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="props.total"
    :page-sizes="[2,3,4]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  loadData: {
    type: Function,
    default: () => {}
  }
})

const emit = defineEmits(['update:limit', 'update:page'])

const handleSizeChange = (val: number) => {
  emit('update:limit', val)
  emit('update:page', 1)
  props.loadData()
}
const handleCurrentChange = (val: number) => {
  emit('update:page', val)
  props.loadData()
}
</script>

<style lang="scss"></style>
