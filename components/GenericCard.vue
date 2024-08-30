<template>
  <Card>
    <div class="card-container flex border">
      <div class="card-prepend" v-if=$slots.prepend>
        <slot name="prepend" />
      </div>
      <div class="card-content min-w-full">
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
      </div>
    </div>
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
