<template>
  <section class="news-cards flex flex-col gap-2">
    <GenericCard v-for="item in useMissingStore().missingPersons" :item="item" :key="item.uid">
      <template #title>
        <h1>{{ item.titel }}</h1>
      </template>
      <template #content>
        <PNewsCardSubtitle :date="item.publicatiedatum" :location="item.laatstgezienin" />
        <PAccordion>
          <template #title>
            <div class="content flex gap-5 pr-5">
              <img class="max-w-32" :src="item.afbeeldingen[0].url" alt="missing person" />
            </div>
            {{ item.introductie }}
          </template>
          <template #content>
            <PFixedPar :text="item.omschrijving" />
          </template>
        </PAccordion>
      </template>
    </GenericCard>
  </section>
</template>
<script lang="ts" setup>

</script>