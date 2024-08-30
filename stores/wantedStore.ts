import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
import _ from "lodash"
import type { WantedPerson, WantedPersonsResponse } from "@/types/wanted"

export const useWantedStore = defineStore('wanted', () => {

  // state
  const iterator = ref({} as SearchIterator)
  const wantedPersons = ref([] as WantedPerson[])
  const isLoading = ref(true)

  // filters
  const filterStore = useFilterStore();
  const params = computed(() => {
    return {
      query: filterStore.query,
      radius: filterStore.radius,
      maxNumberOfItems: filterStore.maxNumberOfItems,
      offset: wantedPersons.value.length
    }
  })

  // methods
  const getWanted = async () => {
    if (iterator.value.last) return
    isLoading.value = true
    try {
      const response: WantedPersonsResponse = await $fetch(`api/getWanted${objectToQueryParams(params.value)}`, {
        method: 'GET',
      })
      if (!response) {
        iterator.value.last = true
        isLoading.value = false
        return
      }
      iterator.value = response.iterator
      wantedPersons.value = [...wantedPersons.value, ...response.opsporingsberichten]
    } catch (error: any) {
      useInterfaceStore().onError(error)
    }
    isLoading.value = false
  }

  // when the query is changed, reset the newsItems and get the news after 2 seconds
  const debounceGetWanted = _.debounce(() => {
    wantedPersons.value = []
    iterator.value = {}
    getWanted()
  }, 1500)

  watch(() => params.value.query, () => {
    debounceGetWanted.cancel();
    debounceGetWanted();
  })

  return {
    wantedPersons,
    getWanted,
    iterator,
    isLoading
  }
})