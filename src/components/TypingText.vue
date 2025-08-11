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
  height: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: var(--spacing-2x);
    .typing,
    .cursor {
      min-height: 46px;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      font-size: 36px;
      line-height: 46px;
      font-weight: var(--font-weight-bold);     
    }
    .cursor {
      animation: blink 1s infinite;
			margin-top: -3px;
      font-weight: var(--font-weight-medium);
    }
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>