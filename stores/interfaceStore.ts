import { defineStore } from 'pinia'

export const useInterfaceStore = defineStore('interface', () => {
  const isMobile = ref(false)
  const isDialogOpen = ref(false)
  const dialogState = ref('disclaimer')

  const navMenuItems = [
    { title: 'Home', link: '/', icon: 'material-symbols:home-outline' },
    { title: 'Vermiste personen', link: '/vermiste-personen', icon: 'material-symbols:people-outline' },
    { title: 'Gezochte personen', link: '/gezochte-personen', icon: 'material-symbols:search-outline' },
  ]

  return { isMobile, isDialogOpen, dialogState, navMenuItems }
})