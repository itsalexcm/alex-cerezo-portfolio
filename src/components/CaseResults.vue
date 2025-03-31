<template>
    <div class="case-results">
      <div class="case-results-inner">
        <div
          class="panel"
          v-for="(panel, index) in panels"
          :key="index"
        >
          <p class="text large panel-label" v-html="panel.label"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    panels: Array
  })
  </script>
  
  <style lang="scss" scoped>
  .case-results {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: calc(var(--spacing-20x) + var(--spacing-10x)) auto;
    .case-results-inner {
      width: 100%;
      max-width: var(--width-page);
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      gap: var(--spacing-4x);
      box-sizing: border-box;
      .panel {
        flex: 1 1 33.3333%;
        padding: var(--spacing-12x) var(--spacing-8x);
        color: #1F1F1F; // No variable
        background-color: var(--highlight-color);
        box-sizing: border-box;
        transition: all 0.3s ease;
        .panel-label {
          margin: 0;
          ::v-deep(span.bold) {
            font-size: var(--font-size-extralarge);
            font-weight: 700;
          }
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