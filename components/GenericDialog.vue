<template>
  <component :is="genericComponent" />
</template>
<script lang="ts" setup>
import { useInterfaceStore } from '@/stores/interfaceStore'

const genericComponent = computed(() => {
  if (useInterfaceStore().dialogState === "error") {
    return defineAsyncComponent(() => import('@/components/dialog/DialogError.vue'))
  }
  if (useInterfaceStore().dialogState === "disclaimer") {
    return defineAsyncComponent(() => import('@/components/dialog/DialogDisclaimer.vue'))
  }
})
</script>