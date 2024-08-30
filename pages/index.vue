<template>
  <div class="flex flex-col">
    <PTitleBar />
    <PNewsCards />
    <PIntersect :is-loading="useNewsStore().isLoading" @intersected=" useNewsStore().getNews()" />
  </div>
  <GenericDialog />


</template>
<script lang="ts" setup>
import { useNewsStore } from '@/stores/newsStore';

onMounted(() => useInterfaceStore().isDialogOpen = !localStorage.getItem('disclaimerAccepted'))
</script>