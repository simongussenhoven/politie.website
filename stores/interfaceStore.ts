import { defineStore } from 'pinia'
export const useInterfaceStore = defineStore('interface', {
    state: () => ({
        maintenanceMode: false
    }),
})