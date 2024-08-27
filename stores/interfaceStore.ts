export const useInterfaceStore = defineStore('interface', () => {
  const isMobile = ref(false)
  const isDialogOpen = ref(false)
  const dialogState = ref('disclaimer')

  const navMenuItems = [
    { title: 'Home', link: '/', icon: 'material-symbols:home-outline' },
    { title: 'Vermiste personen', link: '/vermiste-personen', icon: 'mdi:user-help' },
    { title: 'Gezochte personen', link: '/gezochte-personen', icon: 'mdi:user-alert' },
  ]

  return { isMobile, isDialogOpen, dialogState, navMenuItems }
})