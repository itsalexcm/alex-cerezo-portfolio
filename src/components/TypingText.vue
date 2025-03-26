<template>
  <div class="hi-there">
    <span class="typing">{{ text }}</span>
    <span class="cursor" v-if="cursorVisible">|</span>
  </div>
</template>
  
<script setup>
import { useTyping } from '@/composables/useTyping.js';

const { text, cursorVisible } = useTyping();
</script>
  
<style lang="scss">
.hi-there {
  height: var(--line-height-extralarge);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: var(--spacing-2x);
    .typing,
    .cursor {
      min-height: var(--line-height-extralarge);
      font-family: 'CircularStd', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      font-size: var(--font-size-hero);
      line-height: var(--line-height-extralarge);
    }
    .cursor {
      display: inline-block;
      animation: blink 1s infinite;
    }
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>