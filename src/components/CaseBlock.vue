<template>
  <div class="case-block">
    <h2 v-if="title">{{ title }}</h2>
    <template v-for="(block, index) in content" :key="index">
      <h3 v-if="block.type === 'heading'" v-html="block.text"></h3>
      <p class="text large" v-if="block.type === 'paragraph'" v-html="block.text"></p>
      <component 
        :is="block.listType === 'ol' ? 'ol' : 'ul'" 
        v-if="block.type === 'list' && block.items.length" 
        :start="block.start"
        :class="['text large list', content[index - 1]?.type === 'heading' ? 'lonely' : '']">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex" v-html="item"></li>
      </component>
    </template>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true
  },
  title: String
});
</script>

<style lang="scss">
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
    font-weight: 500;
  }
}
</style>