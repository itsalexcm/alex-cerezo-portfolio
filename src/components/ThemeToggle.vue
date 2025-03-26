<template>
  <button @click="toggleTheme" v-html="icon" class="toggle"></button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js';

const { icon, toggleTheme } = useTheme();
</script>

<style lang="scss">
.toggle {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border: 1px solid var(--text-color);
  background-color: transparent;
  border-radius: 100%;
  position: relative;
  svg {
    width: 100%;
    height: 100%;
    circle,
    rect,
    path {
      fill: var(--text-color);
    }
  }
  &:hover {
    cursor: pointer;
  }
}
</style>