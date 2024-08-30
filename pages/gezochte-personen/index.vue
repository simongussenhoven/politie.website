<template>
  <div class="flex flex-col">
    <PTitleBar title="Gezochte personen" />
    <PWantedPersonsCards />
    <PIntersect :is-loading="wantedStore.isLoading" @intersected=" wantedStore.getWanted()"
      :is-last="wantedStore.iterator.last" />
  </div>
  <GenericDialog />
</template>
<script lang="ts" setup>
const wantedStore = useWantedStore()
</script>