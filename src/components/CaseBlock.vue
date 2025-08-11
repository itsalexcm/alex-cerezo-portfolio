<template>
  <div :class="['case-block', direction || '', align || '', customMargin || '']">
    <h2 class="block-heading" v-if="title">{{ title }}</h2>
    <div :class="['block-content', directionContent || '', alignContent || '']">
      <template
        v-for="(block, index) in content"
        :key="index"
        >
        <div :class="['block-item', block.customWidth || '']">
          <h3 v-if="block.title">{{ block.title }}</h3>
          <p
            v-if="block.subtitle"
            class="block-subtitle text regular"
            v-html="block.subtitle"
          ></p>
          <p
            v-for="(txt, i) in block.texts || [block.text]"
            :key="'text-' + i"
            :class="['text regular', block.margin || '']"
            v-html="txt"
          ></p>
          <component
            v-if="block.list && block.list.length"
            :is="block.listType === 'ol' ? 'ol' : 'ul'"
            :start="block.start"
            class="text regular list"
          >
            <li
              v-for="(item, i) in block.list"
              :key="i"
              v-html="item"
            ></li>
          </component>
          <p
            v-if="block.textAfterList"
            class="text regular"
            v-html="block.textAfterList"
          ></p>
          <div
            v-if="block.images && block.images.length"
            class="case-img-multi"
          >
            <div
              v-for="(img, i) in block.images"
              :key="'img-' + i"
              :class="['case-img', img.class]"
            >
              <img :src="img.src" :alt="img.alt" class="case-img-zoom" />
              <button class="case-img-open"></button>
            </div>
          </div>

          <div v-else-if="block.image" :class="['case-img', block.image.class]">
            <img :src="block.image.src" :alt="block.image.alt" class="case-img-zoom" />
            <button class="case-img-open"></button>
          </div>
          <component
            v-if="block.panels && block.panels.length"
            :is="CasePanel"
            :panels="block.panels"
            :variant="block.panelStyle || 'default'"
          />
          <component
            v-if="block.pilars && block.pilars.length"
            :is="CasePilars"
            :content="block.pilars"
          >
          </component>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import CasePanel from '@/components/CasePanel.vue'
import CasePilars from '@/components/CasePilars.vue';

defineProps({
  content: {
    type: Array,
    required: true
  },
  title: String,
  direction: String,
  align: String,
  margin: String,
  directionContent: String,
  alignContent: String,
  customMargin: String
});
</script>

<style lang="scss">
div[id]::before {
  content: "";
  display: block;
  height: 240px;
  margin-top: -240px;
}
.case-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-6x);
  margin: var(--spacing-30x) auto;
  &:last-child {
    margin-bottom: 0;
  }
  &.direction-column {
    flex-direction: column;
  }
  &.justify-end {
    justify-content: end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.custom-margin {
    margin: var(--spacing-30x) auto var(--spacing-10x) auto;
  }
  &.custom-margin-0 {
    margin: 0;
  }
  .block-content {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-10x);
    &.direction-column {
      flex-direction: column;
      .block-item {
        max-width: 100%;
      }
    }
    &.align-center {
      align-items: center;
    }
    .block-item {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      &.custom-width {
        max-width: var(--width-md);
      }
      p {
        &.margin-bottom {
          margin-bottom: var(--spacing-10x);
        }
        span.bold {
          font-weight: 700;
        }
      }
      .block-img {
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
      .block-subtitle {
        margin: var(--spacing-2x) 0 0 0;
        color: var(--tag-fg, var(--text-secondary));
        background: var(--tag-bg);
        display: inline-block;
        padding: var(--spacing-2x) var(--spacing-4x);
        border-radius: var(--spacing-30x);
        font-size: var(--font-size-sm);
        line-height: 1.2;
      }
      .tag-chip {
        padding: var(--spacing-2x) var(--spacing-4x);
        border-radius: var(--spacing-30x);
        background: var(--tag-bg);
        color: var(--tag-fg);
        line-height: 1;
        white-space: nowrap;
      }
    }
  }
}
.case-img-multi {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8x);
  flex-direction: column;
  .case-img {
    flex: 1 1 200px;
  }
}
@media (max-width: 720px) {
  .case-block {
    flex-direction: column;
    .block-content {
      flex-direction: column;
    }
  }
}
</style>