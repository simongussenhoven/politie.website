<template>
  <div :class="{ container: !interfaceStore.isMobile }">
    <NavBar />
    <div class="main p-5">
      <slot />
    </div>

  </div>
</template>
<script lang="ts" setup>
import { useInterfaceStore } from '@/stores/interfaceStore'
const interfaceStore = useInterfaceStore();

onMounted(() => {
  interfaceStore.isMobile = window.innerWidth < 768
  window.addEventListener('resize', () => {
    interfaceStore.isMobile = window.innerWidth < 768
  })
  useInterfaceStore().isDialogOpen = !localStorage.getItem('disclaimerAccepted')
})
</script>