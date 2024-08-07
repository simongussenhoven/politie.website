<template>
  <nav class="navbar border-b border-b-sky-400 py-2 px-5 md:px-0">
    <NavigationMenu>
      <NavigationMenuList>
        <NavDesktopMenu v-if="!interfaceStore.isMobile" />
        <NavigationMenuItem v-else>
          <NavigationMenuTrigger>{{ title }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NuxtLink v-for="item in menuItems" :key="item.title" :to="item.link" class="block py-2 px-4"
              :class="{ 'text-sky-500': $route.path === item.link }">{{ item.title }}</NuxtLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ColorToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
</template>
<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useInterfaceStore } from '@/stores/interfaceStore'

const interfaceStore = useInterfaceStore()
const router = useRouter()

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Vermiste personen', link: '/about' },
  { title: 'Gezochte personen', link: '/contact' },
]

const title = computed(() => {
  return router.currentRoute.title || 'Menu'
})
</script>
