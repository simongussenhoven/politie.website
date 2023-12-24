import { defineStore } from 'pinia'
import { paramsToQueryParamString } from '@/utils/api-helpers'
export const useNewsStore = defineStore('news', {
    state: () => ({
        newsItems: [] as NewsItem[],
        numberOfItems: 25 as number,
        searchTerm: '' as string,
        isLast: false as boolean,
        newsItemsLocal: [] as NewsItem[],
        isLastLocal: false as boolean,
    }),
    actions: {
        async getNews(params: any) {
            const baseUrl = '/.netlify/functions/get-news'
            const response = await fetch(baseUrl + paramsToQueryParamString(params))
                .then(response => response.json()
                )
            return response
        },
        async getMoreNews() {
            if (this.isLast) return

            const params = {
                offset: this.newsItems.length,
                query: this.searchTerm,
                maxnumberofitems: this.numberOfItems
            }
            const response = await this.getNews(params)
            if (!response.iterator || response.iterator.last) {
                this.isLast = true
                return
            }
            this.newsItems = [...this.newsItems, ...response.nieuwsberichten]
        },
        async getMoreLocalNews(location: string) {
            if (this.isLastLocal) return
            const params = {
                query: location,
            }
            const response = await this.getNews(params)
            this.newsItemsLocal = [...this.newsItemsLocal, ...response.nieuwsberichten]
        },
        setSearchTerm(string: string) {
            this.searchTerm = string
        },
        clearNewsItems() {
            this.newsItems = [];
        },
        clearLocalNewsItems() {
            this.newsItemsLocal = [];
        }
    }
})