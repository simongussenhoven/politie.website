<template>
  <NavigationMenuItem class="flex" v-for="(item, index) in interfaceStore.navMenuItems" :key="index">
    <NuxtLink :to="item.link">
      <NavigationMenuLink>
        <div class="flex items-center space-x-2">
          <Icon :icon="item.icon" class="w-6 h-6" />
          <span>{{ item.title }}</span>
        </div>
      </NavigationMenuLink>
    </NuxtLink>
  </NavigationMenuItem>


</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useInterfaceStore } from '@/stores/interfaceStore'

const interfaceStore = useInterfaceStore();

</script>