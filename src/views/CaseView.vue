<template>
  <LayoutComponent
    :isCaseView="true"
    :title="caseData?.title"
    :subtitle="caseData?.subtitle"
  >
    <article class="case">
      <component
        v-for="(block, index) in caseData?.components"
        :is="getComponent(block.type)"
        :key="index"
        v-bind="block.data"
      />
    </article>
  </LayoutComponent>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects.js'
import LayoutComponent from '@/components/LayoutComponent.vue'
import CaseBlock from '@/components/CaseBlock.vue'
import CaseMedia from '@/components/CaseMedia.vue'
import { initImageZoom } from '@/composables/useImageZoom.js'

const route = useRoute()
const caseData = computed(() => projects.find(p => p.id === route.params.id))

const componentMap = {
  CaseBlock,
  CaseMedia
}

const getComponent = (type) => componentMap[type] || null

onMounted(() => {
  initImageZoom()
})
</script>

<style lang="scss">
.caption {
	color: var(--social-color);
	width: 100%;
	text-align: center;
	margin-top: var(--spacing-6x);
}
</style>