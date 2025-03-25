<template>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <router-link :to="`/work/${project.id}`">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  projects: Array
});
</script>