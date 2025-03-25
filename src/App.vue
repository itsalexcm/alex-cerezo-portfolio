<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav> -->
  <ThemeToggle />
  <KonamiEffect />
  <router-view/>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
import KonamiEffect from '@/components/KonamiEffect.vue';
import { useTheme } from '@/composables/useTheme.js';
import { setupFadeInOnLoad } from '@/composables/useFadeIn.js';

useTheme();
setupFadeInOnLoad();
</script>
