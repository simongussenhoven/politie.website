<template>
  <div class="news-cards flex flex-col gap-2">
    <GenericCard v-for="item in newsStore.newsItems" :item="item" :key="item.uid">
      <template #title>
        <h1>{{ item.titel }}</h1>
      </template>
      <template #content>
        <PCardSubtitle :date="item.publicatiedatum" :location="item.gebied" />
        <PAccordion>
          <template #title>
            {{ item.introductie }}
          </template>
          <template #content>
            <PFixedPar v-for="alinea in item.alineas" class="pt-5" :text="alinea.opgemaaktetekst" />
          </template>
        </PAccordion>
      </template>
    </GenericCard>

  </div>
</template>
<script setup lang="ts">
import { useNewsStore } from '@/stores/newsStore'
const newsStore = useNewsStore()

</script>
