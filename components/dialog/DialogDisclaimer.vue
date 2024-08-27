<template>
  <PDialog>
    <template #title>
      Disclaimer
    </template>
    <template #description>
      <p class="pb-3">
        Deze pagina is een persoonlijk project en bestaat als inhoud van mijn portfolio. De informatie op gebaseerd op
        informatie van de Nederlandse Politie en maakt gebruik van de
        openbare API. Voor meer informatie over de API, zie de <a
          href="https://www.politie.nl/binaries/content/assets/politie/onderwerpen/algemeen/politieapi.pdf"
          target="_blank" rel="noopener" class="text-green-400 hover:underline">Politie API</a>.
      </p>
      <p>Gebruik deze website niet voor officiele of professionele doeleinden. Bezoek hiervoor de <a
          href="https://www.politie.nl/" target="_blank" rel="noopener" class="text-green-400 hover:underline">officiele
          website</a> van
        de Nederlandse Politie.</p>
    </template>
    <template #footer>
      <Button variant="secondary" @click="onAgree">Akkoord</Button>
      <Button @click="onAgreeAndStoreForSession">Akkoord en niet meer tonen</Button>
    </template>
  </PDialog>
</template>
<script lang="ts" setup>
import { useInterfaceStore } from '@/stores/interfaceStore'

const onAgree = () => {
  useInterfaceStore().isDialogOpen = false
}

const onAgreeAndStoreForSession = () => {
  useInterfaceStore().isDialogOpen = false
  localStorage.setItem('disclaimerAccepted', 'true')
}

</script>