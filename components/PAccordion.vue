<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger class="text-left">
        <slot name="title" />
      </AccordionTrigger>
      <AccordionContent>
        <slot name="content" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const props = defineProps({
  title: String,
  content: String,
})
</script>