<template>
  <div v-if="interfaceStore.isMobile">
    <Icon icon="carbon:filter" class="w-6 h-6" />
  </div>
  <div v-else class="flex flex-row gap-3 items-center">
    <Input placeholder="Zoeken" v-model="filterStore.query" />
    <!-- <PStepper id="range" :min="5" :max="5" :default-value="5" v-model="filterStore.range" /> -->
  </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Input } from '@/components/ui/input'
import { useFilterStore } from '@/stores/filterStore'
const filterStore = useFilterStore()
const interfaceStore = useInterfaceStore()
</script>