import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
import _ from "lodash"
import type { NewsItem, NewsResponse } from "@/types"

export const useNewsStore = defineStore('news', () => {

  // state
  const iterator = ref({} as SearchIterator)
  const newsItems = ref([] as NewsItem[])
  const isLoading = ref(true)

  // filters
  const filterStore = useFilterStore();
  const params = computed(() => {
    return {
      query: filterStore.query,
      radius: filterStore.radius,
      maxNumberOfItems: filterStore.maxNumberOfItems,
      offset: newsItems.value.length
    }
  })

  // methods
  const getNews = async () => {
    if (iterator.value.last) return
    isLoading.value = true
    try {
      const response: NewsResponse = await $fetch(`api/getNews${objectToQueryParams(params.value)}`, {
        method: 'GET',
      })
      if (!response) {
        iterator.value.last = true
        isLoading.value = false
        return
      }
      iterator.value = response.iterator
      newsItems.value = [...newsItems.value, ...response.nieuwsberichten]
    } catch (error: any) {
      useInterfaceStore().onError(error)
    }
    isLoading.value = false
  }

  // when the query is changed, reset the newsItems and get the news after 2 seconds
  const debouncedGetNews = _.debounce(() => {
    newsItems.value = []
    iterator.value = {}
    getNews()
  }, 1500)

  watch(() => params.value.query, () => {
    debouncedGetNews.cancel();
    debouncedGetNews();
  })

  return {
    newsItems,
    getNews,
    iterator,
    isLoading
  }
})