<template>
  <Card>
    <CardHeader v-if="$slots.title || $slots.description">
      <CardTitle v-if="$slots.title">
        <slot name="title" />
      </CardTitle>
      <CardDescription v-if="$slots.description">
        <slot name="description" />
      </CardDescription>
    </CardHeader>
    <CardContent v-if="$slots.content">
      <slot name="content" />
    </CardContent>
    <CardFooter v-if="$slots.footer">
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>
<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>