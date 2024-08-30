<template>
  <div class="flex flex-col">
    <PTitleBar title="Vermiste personen" />
    <PMissingPersonsCard />
    <!-- <PIntersect :is-loading="useNewsStore().isLoading" @intersected=" useNewsStore().getNews()" /> -->
  </div>
  <GenericDialog />


</template>
<script lang="ts" setup>
import { useMissingStore } from '@/stores/missingStore'

onMounted(() => useMissingStore().getMissing())
</script>