import { objectToQueryParams } from "@/utils/api-helpers"
import { useFilterStore } from "@/stores/filterStore"
import _ from "lodash"
import type { MissingPerson, MissingPersonsResponse } from "@/types"

export const useMissingStore = defineStore('missing', () => {

  // state
  const iterator = ref({} as SearchIterator)
  const missingPersons = ref([] as MissingPerson[])
  const isLoading = ref(true)

  // filters
  const filterStore = useFilterStore();
  const params = computed(() => {
    return {
      query: filterStore.query,
      radius: filterStore.radius,
      maxNumberOfItems: filterStore.maxNumberOfItems,
      offset: missingPersons.value.length
    }
  })

  // methods
  const getMissing = async () => {
    if (iterator.value.last) return
    isLoading.value = true
    try {
      const response: MissingPersonsResponse = await $fetch(`api/getMissing${objectToQueryParams(params.value)}`, {
        method: 'GET',
      })
      if (!response) {
        iterator.value.last = true
        isLoading.value = false
        return
      }
      iterator.value = response.iterator
      missingPersons.value = [...missingPersons.value, ...response.vermisten]
    } catch (error: any) {
      useInterfaceStore().onError(error)
    }
    isLoading.value = false
  }

  // when the query is changed, reset the newsItems and get the news after 2 seconds
  const debounceGetMissing = _.debounce(() => {
    missingPersons.value = []
    iterator.value = {}
    getMissing()
  }, 1500)

  watch(() => params.value.query, () => {
    debounceGetMissing.cancel();
    debounceGetMissing();
  })

  return {
    missingPersons,
    getMissing,
    iterator,
    isLoading
  }
})