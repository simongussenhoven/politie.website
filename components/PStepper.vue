<template>
  <NumberField :id="id" :default-value="defaultValue" :min="min" :max="max" v-model="modelValueInternal">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>

<script setup lang="ts">
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: number
  id: string
  defaultValue: number
  min: number
  max: number
}>()

const modelValueInternal = computed({
  get: () => props.modelValue,
  set: (value: number) => {
    emit('update:modelValue', value)
  },
})
</script>
