<template>
  <LayoutComponent
    :isCaseView="true"
    :caseData="caseData"
  >
    <article class="case">
      <div class="case-top">
        <div v-if="caseData?.tags && caseData?.tags.length" class="case-tags">
          <span
            v-for="(tag, tIdx) in caseData?.tags"
            :key="'btag-' + tIdx"
            class="tag-item text mini"
          >{{ tag }}</span>
        </div>
        <h1 class="hero-heading">{{ caseData?.title }}</h1>
        <div class="case-overview">
          <p class="text hero">{{ caseData?.subtitle }}</p>
        </div>
      </div>
      <component
        v-for="(block, index) in caseData?.components"
        :is="getComponent(block.type)"
        :key="index"
        v-bind="block.data"
        :customMargin="block.data?.customMargin"
        :customMargin0="block.data?.customMargin0"
      />
    </article>
    <div class="case-nav" v-if="prevCase || nextCase">
      <RouterLink
        v-if="prevCase"
        :to="`/work/${prevCase.id}`"
        class="nav-button prev text regular"
      >
        ← Prev
      </RouterLink>
      <RouterLink
        v-if="nextCase"
        :to="`/work/${nextCase.id}`"
        class="nav-button next text regular"
      >
        Next →
      </RouterLink>
    </div>
  </LayoutComponent>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { projects } from '@/data/projects.js'
  import LayoutComponent from '@/components/LayoutComponent.vue'
  import CaseTitle from '@/components/CaseTitle.vue'
  import CaseBlock from '@/components/CaseBlock.vue'
  import CaseMeta from '@/components/CaseMeta.vue'
  import CasePilars from '@/components/CasePilars.vue'
  import CaseMedia from '@/components/CaseMedia.vue'
  import CaseLine from '@/components/CaseLine.vue'
  import CarouselComponent from '@/components/CarouselComponent.vue'
  import SliderComponent from '@/components/SliderComponent.vue'
  import { initImageZoom } from '@/composables/useImageZoom.js'

  const route = useRoute()
  const caseData = computed(() => projects.find(p => p.id === route.params.id))
  const caseIndex = computed(() => projects.findIndex(p => p.id === route.params.id))
  const prevCase = computed(() => projects[caseIndex.value - 1] || null)
  const nextCase = computed(() => projects[caseIndex.value + 1] || null)

  const componentMap = {
    CaseTitle,
    CaseBlock,
    CaseMeta,
    CasePilars,
    CaseMedia,
    CaseLine,
    CarouselComponent,
    SliderComponent
  }

  const getComponent = (type) => componentMap[type] || null

  onMounted(() => {
    initImageZoom()
  })
</script>

<style lang="scss">
.case {
  display: block;
  .case-top {
    max-width: var(--width-md);
    text-align: center;
    margin: 0 auto var(--spacing-30x) auto;
    .case-tags {
      justify-content: center;
    }
    .case-overview {
      margin-top: 40px;
    }
  }
}
.case-nav {
  display: flex;
  justify-content: center;
  gap: var(--spacing-6x);
  margin: var(--spacing-30x) auto 0 auto;
  padding-top: var(--spacing-20x) auto 0 auto;
  .nav-button {
    color: #1A1A1A;
    padding: var(--spacing-3x) var(--spacing-5x);
    display: inline-flex;
    transition: all 0.3s ease;
    background-color: var(--accent-primary);
    border-radius: var(--spacing-30x);
    &.prev {
      text-align: left;
    }

    &.next {
      text-align: right;
    }
  }
}
</style>