<template>
  <div class="flex flex-col">
    <PTitleBar title="Nieuwsberichten" />
    <PNewsCards />
    <PIntersect :is-loading="newsStore.isLoading" @intersected="newsStore.getNews()"
      :nothing-found="!newsStore.newsItems.length" />
  </div>
  <GenericDialog />


</template>
<script lang="ts" setup>
import { useNewsStore } from '@/stores/newsStore';
const newsStore = useNewsStore();
</script>