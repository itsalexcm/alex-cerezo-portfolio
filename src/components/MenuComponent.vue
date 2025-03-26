<template>
  <menu>
    <li>
      <router-link to="/profile" class="text large menu-link">Profile</router-link>
    </li>
    <li>
      <ThemeToggle />
    </li>
  </menu>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
</script>