<template>
  <p v-html="fixedText" />
</template>
<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const fixedText = computed(() => {
  return props.text;
});
</script>