<template>
    <filter-bar />
    <div class="page flex justify-center">
        <div class="container">
            <div v-if="item">
                <news-full-article :item="item" />
                <div class="more-from-region">
                    <h1 class="text-4xl text-left mt-4">Meer uit de regio {{ item.gebied }}</h1>
                    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        <div
                            v-for="localItem in newsStore.newsItemsLocal.filter((local: NewsItem) => local.uid !== item?.uid)">
                            <news-card :item="localItem" :relative-link="localItem.uid" />
                        </div>
                        <intersection-observer @intersected="onIntersect" :isLoading="isLoading" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from '../../../../stores/newsStore';
import FilterBar from '@/components/politie/FilterBar.vue'
import NewsCard from '@/components/politie/NewsCard.vue';
import NewsFullArticle from "@/components/politie/NewsFullArticle.vue";
import intersectionObserver from '@/components/IntersectionObserver.vue'

const route = useRoute()
const newsStore = useNewsStore();
const isLoading = ref(false)

const item = newsStore.newsItems.find((item) => {
    return item.uid === route.params.id
})
const moreItems = computed(() => {
    return newsStore.newsItems.filter((item) => {
        return item.uid !== route.params.id
    }).slice(0, 6)
})
const onIntersect = async () => {
    isLoading.value = true

    if (item) {
        await newsStore.getMoreLocalNews(item.gebied).then(() => {
            isLoading.value = false;
        })
    }
}

onBeforeUnmount(() => {
    newsStore.clearLocalNewsItems();
})

</script>
<style scoped lang="scss">
.par {
    text-align: left;

    :deep(h2) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(h3) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(b) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(p) {
        margin-top: 15px;
    }
}
</style>
