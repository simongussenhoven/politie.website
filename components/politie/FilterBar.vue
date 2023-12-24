<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 flex justify-start">
        <div class="max-w-screen-xl flex flex-wrap justify-between mx-auto py-2 px-4">
            <div class="buttons flex flex-row items-center gap-8 ">
                <a href="/projects/politie"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page">Nieuws</a>
                <a href="#"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page">Vermiste personen</a>
                <a href="#"
                    class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page">Gezochte personen</a>
                <search-bar v-model="searchTerm" />
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import _ from 'lodash'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore();

// debounce the searchString
const searchTerm = ref('')
const debounce = _.debounce(() => {
    newsStore.setSearchTerm(searchTerm.value);
    newsStore.clearNewsItems();
    newsStore.getMoreNews();
}, 2000)
watch(searchTerm, () => {
    debounce.cancel();
    debounce();
})
</script>