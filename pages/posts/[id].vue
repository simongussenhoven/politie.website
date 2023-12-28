<template>
    <div class="page flex justify-center">
        <div class="flex flex-col justify-center">
            <Loader v-if="isLoading" />
            <div class="container" v-else>

                {{ item }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useNewsStore } from '../../stores/newsStore';
import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import Loader from '../../components/loader.vue'

const route = useRoute()
const newsStore = useNewsStore();
const isLoading = ref(true)
let item = ref({})
onMounted(async () => {
    const item = newsStore.getNewsItemById(route.params.id)
    item = newsStore.singleNewsItem
    isLoading.value = false;
})
</script>
<style scoped lang="scss">
.par {
    text-align: left;

    :deep(h2) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(h3) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(b) {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        margin-top: 15px;
    }

    :deep(p) {
        margin-top: 15px;
    }
}
</style>
