import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
// https://api.politie.nl/v4/nieuws?language=nl&query=drie%20personen&radius=5.0&maxnumberofitems=10&offset=0

export const useNewsStore = defineStore('news', () => {

  // state
  const query = ref('Amsterdam')
  const iterator = ref({} as SearchIterator)
  const newsItems = ref([] as NewsItem[])
  const offset = newsItems.value.length

  // filters
  const filterStore = useFilterStore();
  const params = computed(() => {
    return {
      query: filterStore.query,
      radius: filterStore.radius,
      maxNumberOfItems: filterStore.maxNumberOfItems,
    }
  })

  // methods
  const getNews = async () => {
    try {
      console.log(params.value)
      const response: NewsResponse = await $fetch(`api/getNews${objectToQueryParams(params.value)}`, {
        method: 'GET',
      })
      console.log('iterator', response.iterator)
      iterator.value = response.iterator
      newsItems.value = response.nieuwsberichten
    } catch (error) {
      console.error(error)
    }
  }

  return {
    query,
    newsItems,
    getNews,
    iterator
  }
})