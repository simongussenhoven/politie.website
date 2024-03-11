<template>
    <a href="#"
        class="news-card text-left flex flex-col items-start py-3 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 h-30">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            :src="getImage(item.afbeelding.url)" alt="">
        <div class="flex flex-col justify-between py-1 px-5 leading-normal">
            <h3 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
                {{ item.titel }}
            </h3>
            <span>{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</span>
        </div>
    </a>
</template>
<script lang="ts" setup>
import { getMaxChars } from '@/utils/text-helpers';
import { getDateTime } from '@/utils/date-time-helpers';
import { getImage } from '@/utils/image-helpers';
const props = defineProps<{
    item: NewsItem
}>();
</script>
<style scoped>
.news-card {
    max-width: 400px;

    div {
        max-height: 100%;
    }
}
</style>
