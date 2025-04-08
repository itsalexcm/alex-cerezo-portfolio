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
  width: 36px;
  height: 36px;
  padding: 9px;
  // border: none;
  border: 1px solid var(--text-color);
  border-radius: 100%;
  background-color: transparent;
  z-index: 0;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: -3px;
  //   left: -3px;
  //   right: -3px;
  //   bottom: -3px;
  //   z-index: -2;
  //   background: linear-gradient(
  //     to right,
  //     #0057ff,
  //     #8affff,
  //     #fcaaff,
  //     #cc99ff
  //   );
  //   animation: spin 4s linear infinite;
  //   border-radius: 50%;
  // }

  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 2px;
  //   left: 2px;
  //   right: 2px;
  //   bottom: 2px;
  //   background-color: var(--background-color);
  //   border-radius: 50%;
  //   z-index: -1;
  //   transition: all 0.3s ease;
  // }
  svg {
    width: 100%;
    height: 100%;
    circle,
    rect,
    path {
      fill: var(--text-color);
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>