<template>
  <NavigationMenuItem class="flex" v-for="(item, index) in interfaceStore.navMenuItems" :key="index">
    <NuxtLink to="/">
      <NavigationMenuLink>
        <div class="flex items-center space-x-2">
          <Icon icon="material-symbols:home-outline" class="w-6 h-6" />
          <span>Home</span>
        </div>
      </NavigationMenuLink>
    </NuxtLink>
  </NavigationMenuItem>


</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useInterfaceStore } from '@/stores/interfaceStore'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const interfaceStore = useInterfaceStore()
</script>