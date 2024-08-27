<template>
  <div class="news-cards flex flex-col gap-2">
    <GenericCard v-for="item in newsStore.newsItems" :item="item" :key="item.uid">
      <template #title>
        <h1>{{ item.titel }}</h1>
      </template>
      <template #content>
        <!-- <p>{{ item.introductie }}</p>
        <Transition>
          <div v-if="readMore.includes(item.uid)" class="readmore">
            <p v-for="alinea in item.alineas" class="pt-5" v-html="alinea.opgemaaktetekst" />
          </div>
        </Transition> -->
        <PAccordion>
          <template #title>
            {{ item.introductie }}
          </template>
          <template #content>
            <PFixedPar v-for="alinea in item.alineas" class="pt-5" :text="alinea.opgemaaktetekst" />
          </template>
        </PAccordion>
      </template>
      <!-- <template #footer>
        <Button @click="onClickReadMore(item.uid)" variant="secondary">
          {{ `Lees ${readMore.includes(item.uid) ? 'minder' : 'meer'}` }}
        </Button>
      </template> -->
    </GenericCard>

  </div>
</template>
<script setup lang="ts">
const newsStore = useNewsStore()
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
