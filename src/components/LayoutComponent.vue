<template>
  <HeaderComponent
    :isCaseView="isCaseView"
    :title="title"
    :subtitle="subtitle"
    :caseData="caseData"
  />
  <main :data-project="caseData?.id">
    <div class="fade-in" :key="route.fullPath">
      <slot />
    </div>
  </main>
  <FooterComponent />
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

defineProps({
  isCaseView: Boolean,
  title: String,
  subtitle: String,
  caseData: Object
})
const route = useRoute()
</script>

<style lang="scss">
main {
  width: 100%;
  max-width: var(--width-xl);
  box-sizing: border-box;
  padding: var(--spacing-20x) var(--spacing-10x);
}
</style>