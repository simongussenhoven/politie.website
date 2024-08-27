import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
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
    isLoading.value = true
    try {
      console.log(params.value)
      const response: NewsResponse = await $fetch(`api/getNews${objectToQueryParams(params.value)}`, {
        method: 'GET',
      })
      console.log('iterator', response.iterator)
      iterator.value = response.iterator
      newsItems.value = [...newsItems.value, ...response.nieuwsberichten]
    } catch (error) {
      console.error(error)
    }
    isLoading.value = false
  }

  return {
    query,
    newsItems,
    getNews,
    iterator,
    isLoading
  }
})