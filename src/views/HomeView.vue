<template>
  <div class="home">
    <HeaderComponent />
    <TypingText />
    <ProjectList :projects="projects" />
    <FooterComponent />
  </div>
</template>

<script setup>
  import { projects } from '@/data/projects.js';
  import ProjectList from '@/components/ProjectList.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import TypingText from '@/components/TypingText.vue';
</script>