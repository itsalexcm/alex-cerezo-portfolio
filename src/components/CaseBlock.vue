<template>
  <div class="case-block">
    <template v-for="(block, index) in content" :key="index">
      <h3 v-if="block.type === 'heading'" v-html="block.text"></h3>
      <p v-if="block.type === 'paragraph'" v-html="block.text"></p>
      <component 
        :is="block.listType === 'ol' ? 'ol' : 'ul'" 
        v-if="block.type === 'list' && block.items.length" 
        class="case-list">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex" v-html="item"></li>
      </component>
    </template>
  </div>
</template>

<script setup>
  defineProps({
    content: Array
  });
</script>

<style scoped>
  .case-block {
		max-width: var(--width-container);
		margin: calc(var(--spacing-20x) + var(--spacing-10x)) auto;
		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
		span.bold {
			font-weight: 700;
		}
	}
</style>