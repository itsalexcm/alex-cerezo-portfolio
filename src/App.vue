<template>
  <KonamiEffect />
  <router-view/>
</template>

<script setup>
import { watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import KonamiEffect from '@/components/KonamiEffect.vue';
import { useTheme } from '@/composables/useTheme.js';
import { runFadeIn } from '@/composables/useFadeIn.js';

useTheme();

const route = useRoute();
watch(route, async () => {
  await nextTick();
  runFadeIn();
});
</script>