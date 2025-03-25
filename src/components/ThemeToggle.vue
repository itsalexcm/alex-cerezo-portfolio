<template>
  <button @click="toggleTheme" v-html="icon" class="theme-toggle"></button>
</template>

<script setup>
  import { useTheme } from '@/composables/useTheme.js';

  const { icon, toggleTheme } = useTheme();
</script>

<style scoped>
  .theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>