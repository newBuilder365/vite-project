<template>
  <el-dialog
    ref="dialog"
    width="50%"
    :modal="true"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button
          type="primary"
          @click="handleConfirm"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IDialog } from '@/types/element'
const dialog = ref<IDialog>(null)
interface EmitsType {
  (e:'confirm'):void
}
const emit = defineEmits<EmitsType>()
const handleCancel = () => {
  if (dialog.value) {
    dialog.value.visible = false
  }
}

const handleConfirm = () => {
  emit('confirm')
}
</script>

<style lang="scss"></style>
