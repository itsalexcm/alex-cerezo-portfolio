<template>
  <article class="fade-in">
    <div class="case">
      <component
        v-for="(block, index) in caseData?.components"
        :is="getComponent(block.type)"
        :key="index"
        v-bind="block.data"
      />
    </div>
  </article>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { projects } from '@/data/projects.js';
  import CaseBlock from '@/components/CaseBlock.vue';
  import CaseMedia from '@/components/CaseMedia.vue';
  import { initImageZoom } from '@/composables/useImageZoom.js'; // 👈 Importamos el composable

  const route = useRoute();
  const caseData = computed(() => projects.find(p => p.id === route.params.id));

  const componentMap = {
    CaseBlock,
    CaseMedia
  };

  const getComponent = (type) => componentMap[type] || null;

  onMounted(() => {
    initImageZoom(); // 👈 Ejecutamos el zoom solo cuando este view está montado
  });
</script>