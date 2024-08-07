<template>
  <Button variant="outline" @click="onClick">
    <Icon icon="radix-icons:moon"
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon icon="radix-icons:sun"
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
const icon = computed(() => {
  return mode.value === 'dark' ? 'radix-icons:sun' : 'radix-icons:moon'
})
const onClick = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>