<template>
  
  <div class="app">
    <div v-if="interfaceStore.maintenanceMode" class="home">
      <h1 >Politie.website</h1>
      <img src="../public//construction.jpg"/>
   </div>
    <div v-else>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useInterfaceStore } from './stores/interfaceStore';

  const interfaceStore = useInterfaceStore();
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

html {
  background: #000;
  color: white;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
