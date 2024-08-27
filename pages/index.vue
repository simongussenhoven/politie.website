<template>
  <div class="flex flex-col">
    <PTitleBar />
    <NewsCards />
    <PIntersect :is-loading="newsStore.isLoading" @intersected="newsStore.getNews()" />
  </div>
  <DialogDisclaimer />


</template>
<script lang="ts" setup>
import { useNewsStore } from '@/stores/newsStore';

const newsStore = useNewsStore()

</script>