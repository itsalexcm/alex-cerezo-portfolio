<template>
  <div class="case">
    <component
      v-for="(block, index) in caseData?.components"
      :is="getComponent(block.type)"
      :key="index"
      v-bind="block.data"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/projects.js';
import CaseBlock from '@/components/CaseBlock.vue';
import CaseMedia from '@/components/CaseMedia.vue';

const route = useRoute();
const caseData = computed(() => projects.find(p => p.id === route.params.id));

const componentMap = {
  CaseBlock,
  CaseMedia
};

const getComponent = (type) => componentMap[type] || null;
</script>
  