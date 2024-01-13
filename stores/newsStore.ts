import { defineStore } from 'pinia'
import { paramsToQueryParamString } from '@/utils/api-helpers'
export const useNewsStore = defineStore('news', {
    state: () => ({
        newsItems: [] as NewsItem[],
        isLast: false as boolean,
        filters: {
            language: 'nl'
        }
    }),
    actions: {
        async getMoreNews() {
            if (this.isLast) return;
            const baseUrl = '/.netlify/functions/get-news';
            const response = await fetch(baseUrl + paramsToQueryParamString(this.filters))
                .then(response => response.json())
            this.newsItems = response.nieuwsberichten;
        },
    }
})