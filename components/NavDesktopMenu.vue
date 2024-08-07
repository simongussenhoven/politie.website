<template>
  <NavigationMenuItem>
    <NuxtLink to="/">
      <NavigationMenuLink :class="navigationMenuTriggerStyle()">
        <div class="flex items-center space-x-2">
          <Icon icon="material-symbols:home-outline" class="w-6 h-6" />
          <span>Home</span>
        </div>
      </NavigationMenuLink>
    </NuxtLink>
    <NuxtLink to="/">
      <NavigationMenuLink :class="navigationMenuTriggerStyle()">
        <div class="flex items-center space-x-2">
          <Icon icon="mdi:person-help-outline" class="w-6 h-6" />
          <span>Vermiste personen</span>
        </div>
      </NavigationMenuLink>
    </NuxtLink>
    <NuxtLink to="/">
      <NavigationMenuLink :class="navigationMenuTriggerStyle()">
        <div class="flex items-center space-x-2">
          <Icon icon="mdi:person-star-outline" class="w-6 h-6" />
          <span>Gezochte personen</span>
        </div>
      </NavigationMenuLink>
    </NuxtLink>
  </NavigationMenuItem>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
</script>