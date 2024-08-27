<template>
  <div class="flex flex-row gap-3">
    <NavigationMenuItem v-for="(item, index) in interfaceStore.navMenuItems" :key="index">
      <NuxtLink :to="item.link">
        <NavigationMenuLink>
          <Button variant="secondary">
            <div class="flex items-center space-x-2">
              <Icon :icon="item.icon" class="w-6 h-6" />
              <span>{{ item.title }}</span>
            </div>
          </Button>
        </NavigationMenuLink>
      </NuxtLink>
    </NavigationMenuItem>
  </div>
</template>
<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useInterfaceStore } from '@/stores/interfaceStore'

const interfaceStore = useInterfaceStore();

</script>