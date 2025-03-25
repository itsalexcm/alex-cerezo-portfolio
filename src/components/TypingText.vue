<template>
  <div class="typing-container">
    <span class="typing">{{ text }}</span>
    <span class="cursor" v-if="cursorVisible">|</span>
  </div>
</template>
  
<script setup>
  import { useTyping } from '@/composables/useTyping.js';
  
  const { text, cursorVisible } = useTyping();
</script>
  
<style scoped>
  .typing-container {
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
  }
  .cursor {
    display: inline-block;
    animation: blink 1s infinite;
  }
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>