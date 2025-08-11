<template>
  <div :class="['case-media', layout === 'wrap' ? 'case-media-wrap' : '']">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="[
        'case-img',
        layout === 'wrap' ? 'wrap' : '',
        image.transparent === 'yes' || transparent === 'yes' ? 'transparent' : '',
        image.borderRadius ? `radius-${image.borderRadius}` : '',
      ]"
    >
      <img :src="image.src" :alt="image.alt" class="case-img-zoom">
      <button class="case-img-open"></button>
    </div>
    <div v-if="caption" class="case-caption">
      <p class="text regular caption">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup>
// images can be an array of objects with properties: src, alt.
// Optionally, each image can have borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'custom-xx'
defineProps({
  images: Array,   
  caption: String,
  transparent: String,
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
  justify-content: flex-end;
}
.case-media-wrap {
  display: flex;
  flex-direction: row;
  column-gap: var(--spacing-8x);
}
.case-img + .case-img {
  &:not(.wrap){
    margin-top: var(--spacing-8x);
  }
}
.case-img {
  position: relative;
  display: flex;
  background-color: var(--bg-secondary);
  border-radius: var(--spacing-4x);
  margin-bottom: 0;
  overflow: hidden;
  transition: background-color .3s ease;
  &.wrap {
    flex: 1 1 calc(50% - var(--spacing-8x));
  }
  &.hidden {
    visibility: hidden;
  }
  &.transparent {
    background: transparent;
  }
  &.margin-top {
    margin-top: var(--spacing-6x);
  }
  &.case-img-inline {
    background: transparent;
    border-radius: 0;
  }
  &.radius-none {
    border-radius: 0;
  }
  &.radius-sm {
    border-radius: var(--spacing-2x);
  }
  &.radius-md {
    border-radius: var(--spacing-4x);
  }
  &.radius-lg {
    border-radius: var(--spacing-6x);
  }
  &.radius-custom-00 {
    border-radius: 0;
  }
  &.radius-custom-01 {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &.radius-custom-02 {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
}
.case-img-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
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
  background-color: rgb(var(--bg-primary-rgb), .9);
  z-index: 9999;
  overflow: hidden;
  .case-img-bis {
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 0) scale(1);
    transition: transform .3s ease-in-out;
    img {
      border-radius: 0;
    }
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
.case-caption {
  margin-top: var(--spacing-4x);
  .caption {
    color: var(--text-caption);
  }
}
@media (max-width: 720px) {
  .case-img {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>