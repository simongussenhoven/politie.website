import {defineStore} from 'pinia'
export const useNewsStore = defineStore('news', {
    state: () => ({
        news: []
    }),
    actions: {
        async getNews(params: any) {
            const baseUrl = '/.netlify/functions/get-news'
            const response = await fetch(baseUrl + paramsToQueryParamString(params))
                .then(response => response.json()
                )
            return response
        },
    }
})