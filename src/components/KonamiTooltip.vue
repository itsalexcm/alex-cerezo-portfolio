<template>
  <span
    ref="trigger"
    :class="['tooltip', { 'animated-text': !konamiActivated }]"
    @mouseenter="showTooltip"
    @mouseleave="handleMouseLeave"
    @touchstart.prevent="isTouchDevice ? null : showTooltip"
  >
    <slot>Konami Code</slot>
    <div
      v-if="!konamiActivated"
      ref="tooltip"
      class="tooltiptext"
      :class="{ visible: show }"
    >
      <span class="key-content">
        <span
          v-for="(key, index) in displaySequence"
          :key="index"
          :class="['key', { correct: !konamiActivated && index < progress }]"
        >
          {{ key }}
        </span>
        <span class="emo">👀</span>
      </span>
    </div>
  </span>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const show = ref(false)
const tooltip = ref(null)
const trigger = ref(null)
const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
const displaySequence = ['↑','↑','↓','↓','←','→','←','→','B','A']
const progress = ref(0)
const konamiActivated = ref(false)
const isTouchDevice = ref(false)

onMounted(() => {
  isTouchDevice.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
})

const showTooltip = () => {
  if (isTouchDevice.value) return
  show.value = true
}

const hideTooltip = () => {
  show.value = false
  progress.value = 0
}

const handleMouseLeave = () => {
  if (konamiActivated.value) {
    hideTooltip()
  }
}

const handleKeydown = (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
  const expected = sequence[progress.value]
  if (key === expected) {
    progress.value++
    if (progress.value === sequence.length) {
      konamiActivated.value = true
      hideTooltip()
    }
  } else {
    hideTooltip()
  }
}

const handleClick = () => {
  hideTooltip()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClick)
})
</script>

<style lang="scss" scoped>
.emo {
  margin-left: var(--spacing-2x);
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: var(--spacing-8x) var(--spacing-12x);
  border-radius: 8px;
  font-size: var(--font-size-large);
  line-height: var(--line-height-medium);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: none;
  color: var(--text-color);
  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: -200px;
    right: -200px;
    bottom: -200px;
    background: linear-gradient(
      90deg,
      var(--konami-color-01),
      var(--konami-color-02),
      var(--konami-color-03),
      var(--konami-color-04),
      var(--konami-color-05)
    );
    border-radius: 6px;
    z-index: -2;
    animation: spin 4s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background-color: var(--background-color);
    border-radius: 6px;
    z-index: -1;
  }
}

.tooltiptext.visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.animated-text {
  font-weight: 700;
  background: linear-gradient(
    90deg,
    var(--konami-color-01),
    var(--konami-color-02),
    var(--konami-color-03),
    var(--konami-color-04),
    var(--konami-color-05)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: textShine 4s linear infinite;
}

@media (max-width: 720px) {
  .tooltip.animated-text {
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    color: var(--text-color);
    animation: none;
    font-weight: 300;
  }
}

.key-content {
  display: flex;
  gap: 4px;
  align-items: end;
}
.key {
  flex: 1;
  width: 28px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid var(--nintendo-color);
  display: block;
  color: var(--text-color);
}
.key.correct {
  color: var(--nintendo-color);
  background-color: var(--header-color);
}
@keyframes textShine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
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
@media (max-width: 720px) {
  .tooltiptext {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    z-index: 1000;
  }
}
</style>