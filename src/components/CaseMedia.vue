<template>
  <div v-if="layout === 'column'" class="case-media-column">
    <div v-if="layout === 'column' || layout === 'row'" class="case-media-row">
      <div class="case-media">
        <div v-for="(image, index) in images" :key="index" class="case-img" v-image-zoom>
          <img :src="image.src" :alt="image.alt" class="case-img-zoom">
          <button class="case-img-open"></button>
        </div>
        <p v-if="caption" class="text medium caption">{{ caption }}</p>
      </div>
    </div>
  </div>

  <div v-else-if="layout === 'row'" class="case-media-row">
    <div class="case-media">
      <div v-for="(image, index) in images" :key="index" class="case-img" v-image-zoom>
        <img :src="image.src" :alt="image.alt" class="case-img-zoom">
        <button class="case-img-open"></button>
      </div>
      <p v-if="caption" class="text medium caption">{{ caption }}</p>
    </div>
  </div>

  <div v-else class="case-media">
    <div v-for="(image, index) in images" :key="index" class="case-img" v-image-zoom>
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