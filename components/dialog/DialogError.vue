<template>
  <PDialog>
    <template #title>
      Foutmelding
    </template>
    <template #description>
      <p class="pb-3">Er ging iets mis bij het laden van data. Probeer het later nog eens.</p>

      <strong>Technische details</strong>
      <p class="pb-2">Code: {{ interfaceStore.error.message.split(':')[1] }}</p>
      <p>Query: {{ interfaceStore.error.message.split(':')[0] }}</p>
    </template>
    <template #footer>
      <Button variant="secondary" @click="onAgree">Ok</Button>
    </template>
  </PDialog>
</template>
<script lang="ts" setup>
import { useInterfaceStore } from '@/stores/interfaceStore'

const interfaceStore = useInterfaceStore()
const onAgree = () => interfaceStore.isDialogOpen = false

</script>