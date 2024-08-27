export const useFilterStore = defineStore('filters', () => {
  const query = ref('Amsterdam')
  const radius = ref(5)
  const maxNumberOfItems = ref(10)
  const offSet = ref(0)
  return { query, radius, maxNumberOfItems, offSet }
})