<template>
  <h1>{{ name }}</h1>
  <Foo />
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const { name } = useUserStore()

</script>
