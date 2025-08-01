<template>
  <div class="image-slider">
    <div class="slide">
      <div class="slide-inner">
        <button class="nav prev" @click="prev" :disabled="currentIndex === 0">‹</button>

        <div class="case-img">
          <img
            :src="images[currentIndex].src"
            :alt="images[currentIndex].alt"
            class="case-img-zoom"
          />
          <button class="case-img-open"></button>
        </div>

        <button class="nav next" @click="next" :disabled="currentIndex === images.length - 1">›</button>
      </div>

      <p v-if="caption" class="text regular caption">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  caption: String
})

const currentIndex = ref(0)

const next = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style lang="scss">
.image-slider {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  // max-width: 800px;
  margin: 0 auto;
}

.image-slider + .image-slider {
  margin: var(--spacing-10x) auto;
}

.slide {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: var(--spacing-4x);
  transition: background-color 0.3s ease;
}

.nav {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.caption {
  color: var(--social-color);
  width: 100%;
  text-align: center;
  margin-top: var(--spacing-4x);
}

.slide-inner {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-secondary);
  cursor: pointer;
  z-index: 2;
}

.nav.prev {
  left: var(--spacing-4x);
}

.nav.next {
  right: var(--spacing-4x);
}
</style>