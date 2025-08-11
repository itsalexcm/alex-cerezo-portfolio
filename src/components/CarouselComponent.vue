<template>
  <div :class="['carousel-container', props.customClass || '']">
    <div class="carousel-track" :style="{ animationDuration: props.speed + 's' }">
      <div class="carousel-group" v-for="n in 2" :key="n">
        <template v-if="props.images && props.images.length">
          <img
            v-for="(image, i) in props.images"
            :key="i"
            :src="image.src"
            :alt="image.alt"
          />
        </template>
        <template v-else-if="props.items && props.items.length">
          <div class="carousel-item" v-for="(it, i) in props.items" :key="i">
            <slot name="item" :item="it" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  customClass: String,
  images: { type: Array, default: null },
  items: { type: Array, default: null },
  speed: { type: Number, default: 30 }
})
</script>

<style lang="scss">
.carousel-container {
  &.margin-top {
    margin-top: var(--spacing-30x);
  }
  position: relative;
  overflow: hidden;
  width: 100%;
  mask-image:
    linear-gradient(
      to right,
      rgba(var(--bg-primary-rgb), 0) 0%,
      rgb(var(--bg-primary-rgb)) 12.5%,
      rgb(var(--bg-primary-rgb)) 87.5%,
      rgba(var(--bg-primary-rgb), 0) 100%);
}

.carousel-track {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  animation: scroll-left linear infinite;
}

.carousel-group {
  display: flex;
}

.carousel-track img {
  height: 600px;
  margin-right: var(--spacing-8x);
  flex-shrink: 0;
  object-fit: contain;
  min-width: 100px;
}

.carousel-item {
  margin-right: var(--spacing-8x);
  flex-shrink: 0;
  min-width: 280px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 720px) {
  .carousel-track img {
    height: 400px;
  }
}
</style>