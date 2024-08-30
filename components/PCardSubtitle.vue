<template>
  <div class="news-card-subtitle flex gap-3">
    <div class="location flex flex-row items-center gap-2" v-if="props.location">
      <Icon icon="ic:baseline-location-on" />
      <span class="pb-1">{{ location }}</span>
    </div>
    <span class="sm:hidden md:visible" v-if="props.date">|</span>
    <div class="date flex flex-row items-center gap-2" v-if="props.date">
      <Icon icon="ic:baseline-event" />
      <span class="pb-1">{{ formatDate(date) }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { DateTime } from 'luxon'


const props = defineProps<{
  date: string
  location: string
}>()

const formatDate = (date: string) => {
  const JSDate = new Date(date)
  return DateTime.fromJSDate(JSDate).setLocale('nl')
    .toLocaleString(DateTime.DATETIME_FULL)
}
</script>