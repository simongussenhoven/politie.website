<template>
  <div class="flex flex-row justify-between">
    <h1 class="text-3xl font-bold text-green-400 mb-4">{{ title }}</h1>
    <PFilter />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>
