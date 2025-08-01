<template>
  <div class="carousel-container">
    <div class="carousel-track">
      <div class="carousel-group" v-for="n in 2" :key="n">
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.carousel-container {
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

// .carousel-container::before,
// .carousel-container::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   width: 80px;
//   height: 100%;
//   z-index: 2;
//   pointer-events: none;
// }

// .carousel-container::before {
//   left: 0;
//   background: linear-gradient(to right, var(--bg-primary), transparent);
// }

// .carousel-container::after {
//   right: 0;
//   background: linear-gradient(to left, var(--bg-primary), transparent);
// }

.carousel-track {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  animation: scroll-left 30s linear infinite;
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

// .carousel-container:hover .carousel-track {
//   animation-play-state: paused;
// }

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>