import { defineStore } from 'pinia'

export const useInterfaceStore = defineStore('interface', () => {
  const isMobile = ref(false)
  const isDialogOpen = ref(false)
  const dialogState = ref('disclaimer')
  return { isMobile, isDialogOpen, dialogState }
})