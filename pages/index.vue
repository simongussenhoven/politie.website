<template>
  <div class="flex flex-col">
    <PTitleBar title="Nieuwsberichten" />
    <PNewsCards />
    <PIntersect :is-loading="useNewsStore().isLoading" @intersected=" useNewsStore().getNews()" />
  </div>
  <GenericDialog />


</template>
<script lang="ts" setup>
import { useNewsStore } from '@/stores/newsStore';
</script>