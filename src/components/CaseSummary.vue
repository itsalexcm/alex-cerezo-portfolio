<template>
  <div class="case-summary">
    <div class="case-summary-inner">
      <div
        class="panel"
        v-for="(panel, index) in summaryPanels"
        :key="index"
      >
        <h3 class="panel-label">{{ panel.label }}</h3>
        <p class="text large">{{ panel.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  caseData: Object
})

const summaryPanels = props.caseData?.components.find(c => c.type === 'CaseSummary')?.data?.panels || []
</script>

<style lang="scss" scoped>
.case-summary {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--header-color);
  transition: background-color 0.3s ease;
  .case-summary-inner {
    width: 100%;
    max-width: var(--width-page);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 var(--spacing-8x) var(--spacing-12x) var(--spacing-8x);
    .panel {
      flex: 1 1 33.3333%;
      padding: var(--spacing-10x) var(--spacing-10x);
      color: var(--text-color);
      border: 1px solid var(--text-color);
      transition: all 0.3s ease;
      &:last-child {
        border-left: 0;
      }
      .panel-label {
        border-left: 18px solid var(--selection-bg-color);
        border-radius: 100px;
        padding-left: var(--spacing-4x);
        transition:  border-left-color 0.3s ease;
      }
    }
  }
}
@media (max-width: 720px) {
  .case-summary {
    .case-summary-inner {
      .panel {
        flex: 1 1 100%;
        &:first-child {
          border-bottom: 1px solid var(--text-color);
        }
        &:last-child {
          border-left: 1px solid var(--text-color);
          border-top: 0;
        }
      }
    } 
  }
}
</style>