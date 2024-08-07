<template>
  <Dialog v-model:open="interfaceStore.isDialogOpen">
    <DialogTrigger v-if="$slots.trigger">
      <slot name="trigger" />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader v-if="$slots.title || $slots.description">
        <DialogTitle v-if="$slots.title">
          <slot name="title" />
        </DialogTitle>
        <DialogDescription v-if="$slots.description">
          <slot name="description" />
        </DialogDescription>
      </DialogHeader>

      <DialogFooter v-if="$slots.footer">
        <slot name="footer" />
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useInterfaceStore } from '@/stores/interfaceStore'

const interfaceStore = useInterfaceStore()
</script>