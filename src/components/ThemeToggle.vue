<template>
  <button @click="toggleTheme" v-html="icon" class="toggle"></button>
</template>

<script setup>
  import { useTheme } from '@/composables/useTheme.js';

  const { icon, toggleTheme } = useTheme();
</script>

<style lang="scss">
  .toggle {
    position: relative;
    padding: 5px;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    z-index: 0;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }
</style>