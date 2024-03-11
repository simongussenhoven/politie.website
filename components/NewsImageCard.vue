<template>
    <a href="#"
        class="news-card flex flex-grow flex-col items-start py-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-60">
        <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            :src="getImage(item.afbeelding.url)" alt=""> -->
        <div class="flex flex-col justify-between py-1 px-5 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
                {{ item.titel }}
            </h5>
            <span>{{ item.gebied }} | {{ getDateTime(item.publicatiedatum) }}</span>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                {{ getMaxChars(item.introductie, 280) }}
            </p>
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
<style scoped lang="scss">
.news-card {
    div {
        max-height: 100%;
    }
}
</style>
