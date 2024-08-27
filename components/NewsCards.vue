<template>
  <div class="news-cards flex flex-col gap-2">
    <GenericCard v-for="item in items" :item="item" :key="item.uid">
      <template #title>
        <h1>{{ item.title }}</h1>
      </template>
      <template #content>
        <p>{{ item.content }}</p>
      </template>
    </GenericCard>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  items: CardContent[]
}>()
</script>
