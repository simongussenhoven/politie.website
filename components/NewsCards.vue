<template>
  <div class="news-cards grid">
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
<style scoped lang="scss">
.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;

}
</style>