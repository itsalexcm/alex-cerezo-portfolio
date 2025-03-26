<template>
  <div class="case-header" v-if="isCaseView">
    <section class="fade-in">
      <div class="case-header-container">
        <header>
          <HeaderBrand />
          <MenuComponent />
        </header>
        <div class="case-title">
          <h1>{{ title }}</h1>
          <p class="text large">{{ subtitle }}</p>
        </div>
      </div>
    </section>
  </div>
  <header v-else>
    <HeaderBrand />
    <MenuComponent />
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderBrand from './HeaderBrand.vue';
import MenuComponent from './MenuComponent.vue';

const route = useRoute();
const isCaseView = computed(() => route.name === 'case');

defineProps({
  isCaseView: Boolean,
  title: String,
  subtitle: String
})
</script>

<style lang="scss">
.case-header {
  width: 100%;
  height: auto;
  .case-header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--header-color);
    transition: background-color 0.3s ease;
    .case-title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      max-width: var(--width-page);
      margin-bottom: var(--spacing-20x);
      box-sizing: border-box;
      padding: calc(var(--spacing-20x) + var(--spacing-20x)) var(--spacing-8x) 0 var(--spacing-8x);
      h1 {
        margin-bottom: var(--spacing-2x);
      }
    }
  }
}
header {
  width: 100%;
  max-width: var(--width-page);
  padding: var(--spacing-20x) var(--spacing-8x) 0 var(--spacing-8x);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  menu {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--spacing-4x);
    margin: 0;
    padding: 0;
    .menu-link {
      color: var(--text-color);
      border-bottom: 1px solid var(--text-color);
      padding-bottom: 2px;
    }
  }
}
.alex {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	gap: var(--spacing-4x);
	h1 {
		color: transparent;
		line-height: var(--line-height-medium);
		&::selection {
			background-color: var(--selection-bg-color);
			color: var(--selection-color);
		}
	}
}
@media (max-width: 720px) {
  header {
    padding-bottom: var(--spacing-6x);
  }
	.alex {
		h1 {
			font-size: var(--font-size-large);
			line-height: var(--line-height-medium);
		}
	}
}
</style>