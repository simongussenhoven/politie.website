import { defineStore } from 'pinia'

export const useInterfaceStore = defineStore('interface', () => {
  const isMobile = ref(false)
  const isDialogOpen = ref(false)
  const dialogState = ref('disclaimer')
  const navMenuItems = [
    { title: 'Home', link: '/' },
    { title: 'Vermiste personen', link: '/about' },
    { title: 'Gezochte personen', link: '/contact' },
  ]
  return { isMobile, isDialogOpen, dialogState, navMenuItems }
})