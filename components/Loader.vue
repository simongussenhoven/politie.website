<template>
    <div class="loader" />
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.loader {
    display: inline-block;
    width: 42px;
    height: 42px;
    margin: 10px;
}

.loader:after {
    content: " ";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>