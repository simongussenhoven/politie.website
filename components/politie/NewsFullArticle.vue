<template>
    <div class="card pt-16 text-left">
        <h1 class="text-4xl font-extrabold text-left">{{ item?.titel }}</h1>
        <h2 class="text-left py-4 text-2xl"><span>{{ item?.gebied }}</span> | {{ getDateTime(item?.publicatiedatum
            ??
            'onbekend') }}</h2>
        <div class="content pb-5 ">
            <p v-for="alinea in item?.alineas" v-html="alinea.opgemaaktetekst" class="par text-xl text-left" />
        </div>
        <hr class="" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    item: NewsItem
}>()
</script>