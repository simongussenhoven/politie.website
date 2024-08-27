<template>
  <div class="flex flex-col">
    <PTitleBar />
    <NewsCards :items="newsItemsShallow" />
    <PIntersect />
  </div>
  <DialogDisclaimer />
  <!-- <Intersect :is-loading="isLoading" @intersected="newsStore.getNews()" /> -->

</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/newsStore';

onMounted(() => {
  newsStore.getNews()
  if (!localStorage.getItem('disclaimerAccepted')) useInterfaceStore().isDialogOpen = true
})

const newsItemsShallow = computed(() => {
  return newsStore.newsItems.map((item: NewsItem) => {
    return {
      uid: item.uid,
      title: item.titel,
      content: item.introductie,
    } as CardContent
  })
})

const newsStore = useNewsStore()
const isLoading = ref(true)

</script>