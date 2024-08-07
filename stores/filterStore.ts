export const useFilterStore = defineStore('filters', () => {
  const query = ref('Amsterdam')
  const range = ref(5)
  return { query, range }
})