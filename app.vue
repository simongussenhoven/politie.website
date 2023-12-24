<template>
    <div class="app">
        <nav-bar />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script lang="ts" setup>
import NavBar from './components/NavBar.vue';
</script>