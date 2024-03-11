import { defineStore } from 'pinia'

export const useInterfaceStore = defineStore('interface', {
    state: () => ({
        isGeneralModalVisible: false as Boolean
    }),
    actions: {
        async toggleGeneralModalVisible() {
            this.isGeneralModalVisible = !this.isGeneralModalVisible
        }
    }
})