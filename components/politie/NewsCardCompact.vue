<template>
    <div class="news-card-compact flex flex-col px-5 items-start">
        <h1 class="text-4xl font-extrabold dark:text-white truncate text-left">{{ item.titel }}</h1>
        <p class="pt-2">{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</p>
        <p class="text-left py-8">{{ item.introductie }}</p>
        <NuxtLink :to="`politie/posts/${item.uid}`">
            <icon-button class="w-24 mb-0 mt-auto">Lees</icon-button>
        </NuxtLink>
        <hr class="my-8" />
    </div>
</template>
<script lang="ts" setup>
import IconButton from '../IconButton.vue';
const props = defineProps<{
    item: NewsItem
}>()
</script>
