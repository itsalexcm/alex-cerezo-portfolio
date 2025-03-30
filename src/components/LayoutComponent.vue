<template>
  <HeaderComponent
    :isCaseView="isCaseView"
    :title="title"
    :subtitle="subtitle"
    :caseData="caseData"
  />
  <main>
    <div class="fade-in">
      <slot />
    </div>
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

defineProps({
  isCaseView: Boolean,
  title: String,
  subtitle: String,
  caseData: Object
})
</script>

<style lang="scss">
main {
	width: 100%;
  max-width: var(--width-page);
	box-sizing: border-box;
	padding: calc(var(--spacing-20x) + var(--spacing-10x)) var(--spacing-8x);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: var(--font-size-base);
	line-height: var(--line-height-base);
}
</style>