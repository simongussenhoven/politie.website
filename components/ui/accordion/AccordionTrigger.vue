<template>
  <AccordionHeader class="flex">
    <AccordionTrigger v-bind="delegatedProps" :class="cn(
      'flex flex-1 items-start justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
      props.class,
    )
      ">
      <slot />
      <slot name="icon">
        <ChevronDown class="h-6 w-6 shrink-0 transition-transform duration-200" />
      </slot>
    </AccordionTrigger>

  </AccordionHeader>

</template>

<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>
<style scoped lang="scss">
.icon {
  border: 1px solid red !important;
}
</style>
