<template>
  <div :class="['case-media', layout === 'wrap' ? 'case-media-wrap' : '']">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="['case-img', layout === 'wrap' ? 'wrap' : '']"
    >
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
    validator: (value) => ['', 'wrap'].includes(value)
  }
});
</script>

<style lang="scss">
.case-media {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-6x);
}
.case-media-wrap {
  display: flex;
  flex-direction: row; // 👈 Aquí el foco
  gap: var(--spacing-6x);
}
.case-img {
  position: relative;
  display: flex;
  align-items: flex-start;
  &.wrap {
    flex: 1 1 calc(50% - var(--spacing-6x));
    max-width: calc(50% - var(--spacing-6x));
  }
  &.hidden {
    visibility: hidden;
  }
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
.case-img-fullscreen {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(var(--background-color-rgb), 0.8);
	z-index: 9999;
	overflow: hidden;
	.case-img-bis {
		position: absolute;
		transform-origin: top left;
		transform: translate(0, 0) scale(1);
		transition: transform 0.3s ease-in-out;
	}
}
.case-img button,
.case-img-fullscreen button {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: none;
	appearance: none;
	border: none;
}
.case-img button {
	cursor: zoom-in;
}
.case-img-fullscreen button {
	cursor: zoom-out;
}
@media (max-width: 720px) {
  .case-img {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>