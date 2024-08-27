import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
import _ from "lodash"

// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {

  // state
  const query = ref('Amsterdam')
  const iterator = ref({} as SearchIterator)
  const newsItems = ref([] as NewsItem[])
  const isLoading = ref(false)

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
      iterator.value = response.iterator
      newsItems.value = [...newsItems.value, ...response.nieuwsberichten]
    } catch (error) {
      console.error(error)
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
    query,
    newsItems,
    getNews,
    iterator,
    isLoading
  }
})