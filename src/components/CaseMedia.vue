<template>
  <div v-if="layout === 'column'" class="case-media-column">
    <div v-if="layout === 'column' || layout === 'row'" class="case-media-row">
      <div class="case-media">
        <div v-for="(image, index) in images" :key="index" class="case-img">
          <img :src="image.src" :alt="image.alt" class="case-img-zoom">
          <button class="case-img-open"></button>
        </div>
        <p v-if="caption" class="text medium caption">{{ caption }}</p>
      </div>
    </div>
  </div>

  <div v-else-if="layout === 'row'" class="case-media-row">
    <div class="case-media">
      <div v-for="(image, index) in images" :key="index" class="case-img">
        <img :src="image.src" :alt="image.alt" class="case-img-zoom">
        <button class="case-img-open"></button>
      </div>
      <p v-if="caption" class="text medium caption">{{ caption }}</p>
    </div>
  </div>

  <div v-else class="case-media">
    <div v-for="(image, index) in images" :key="index" class="case-img">
      <img :src="image.src" :alt="image.alt" class="case-img-zoom">
      <button class="case-img-open"></button>
    </div>
    <p v-if="caption" class="text medium caption">{{ caption }}</p>
  </div>
</template>

<script setup>
  defineProps({
    images: Array,   
    caption: String,
    layout: {
      type: String,
      default: '',
      validator: (value) => ['', 'row', 'column'].includes(value)
    }
  });
</script>

<style scoped>
  .case-img-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .case-img-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 32px;
    color: white;
    cursor: pointer;
    z-index: 10000;
  }

  .case-img.hidden {
    visibility: hidden;
  }
</style>