<template>
  <LayoutComponent>
    <article class="profile">
      <component
        v-for="(block, index) in aboutSections"
        :is="getComponent(block.type)"
        :key="index"
        v-bind="block.data"
      />
    </article>
  </LayoutComponent>
</template>

<script setup>
import { aboutSections } from '@/data/about.js'
import LayoutComponent from '@/components/LayoutComponent.vue'
import AboutBlock from '@/components/AboutBlock.vue'

const componentMap = {
  AboutBlock
}

const getComponent = (type) => componentMap[type] || null
</script>