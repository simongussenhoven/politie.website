<template>
    <filter-bar />
    <div class="page flex justify-center">
        <div class="container flex flex-col items-center">
            <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <news-card v-for="item in highlightedNewsItems" :item="item" :key="item.uid"
                    :relative-link="`/projects/politie/posts/${item.uid}`" />
            </div>
            <div class="news-cards-compact pt-5 container">
                <news-card-compact v-for="item in otherNews" :item="item" />
            </div>
            <div class="last pb-10" v-if="newsStore.isLast">{{ getLastMessage() }}</div>
        </div>
    </div>
    <intersection-observer @intersected="onIntersect" :isLoading="isLoading" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useNewsStore } from '@/stores/newsStore';
import IntersectionObserver from '@/components/IntersectionObserver.vue';
import NewsCard from '@/components/politie/NewsCard.vue';
import NewsCardCompact from '@/components/politie/NewsCardCompact.vue'
import FilterBar from '@/components/politie/FilterBar.vue';

const newsStore = useNewsStore();
const highlightedNewsItems = computed(() => newsStore.newsItems.slice(0, 8))
const otherNews = computed(() => newsStore.newsItems.slice(8, newsStore.newsItems.length))
const getLastMessage = () => {
    if (newsStore.newsItems.length === 0 && newsStore.isLast) return "Geen items gevonden"
    if (newsStore.isLast) return "Einde van de lijst"
}

const modalVisible = ref(true)

const isLoading = ref(false)
const onIntersect = () => {
    isLoading.value = true
    newsStore.getMoreNews().then(() => {
        isLoading.value = false
    });
}
</script>

