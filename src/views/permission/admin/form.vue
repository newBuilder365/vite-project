<!-- eslint-disable vue/no-mutating-props -->
<template>
  <el-form :model="form">
    <el-form-item
      label="姓名"
      :label-width="formLabelWidth"
    >
      <el-input
        v-model="props.form.account"
      />
    </el-form-item>
    <el-form-item
      label="账号"
      :label-width="formLabelWidth"
    >
      <el-input
        v-model="props.form.real_name"
      />
    </el-form-item>
    <el-form-item
      label="身份"
      :label-width="formLabelWidth"
    >
      <el-input
        v-model="props.form.roles"
      />
    </el-form-item>
    <el-form-item
      label="状态"
      :label-width="formLabelWidth"
    >
      <el-input
        v-model="props.form.status"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>

const props = defineProps({
  form: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      account: '',
      real_name: '',
      roles: '',
      region: '',
      status: 0
    }
  }
})

// const emit = defineEmits(['update:form'])

const formLabelWidth = '80px'

</script>

<style lang="scss"></style>
