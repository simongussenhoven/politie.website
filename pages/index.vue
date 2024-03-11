<template>
    <section class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div v-for="newsItem in newsStore.newsItems">
            {{ newsItem.titel }}
        </div>
        <!-- <Intersect :is-loading="isLoading" @intersected="newsStore.getNews()" /> -->
    </section>
</template>
<script lang="ts" setup>
import Intersect from '@/components/Intersect.vue'
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/newsStore';

onMounted(() => {
    newsStore.getNews()
})
const newsStore = useNewsStore()
const isLoading = ref(true)

</script>