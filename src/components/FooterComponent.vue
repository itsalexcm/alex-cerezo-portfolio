<template>
  <footer>
    <div class="footer-inner">
      <p class="text large">© {{ new Date().getFullYear() }} Alex Cerezo</p>
      <SocialLinks />
    </div>
  </footer>
</template>

<script setup>
  import SocialLinks from './SocialLinks.vue';
</script>