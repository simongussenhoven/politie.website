<template>
  <div class="flex flex-col">
    <PTitleBar title="Vermiste personen" />
    <PMissingPersonsCards />
    <PIntersect :is-loading="missingStore.isLoading" @intersected=" missingStore.getMissing()"
      :is-last="missingStore.iterator.last" />
  </div>
  <GenericDialog />
</template>
<script lang="ts" setup>
import { useMissingStore } from '@/stores/missingStore'
const missingStore = useMissingStore()
</script>