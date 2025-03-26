<template>
  <HeaderComponent
    :isCaseView="isCaseView"
    :title="title"
    :subtitle="subtitle"
  />
  <main>
    <section class="fade-in">
      <slot />
    </section>
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

defineProps({
  isCaseView: Boolean,
  title: String,
  subtitle: String
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