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

<style lang="scss">
footer {
  padding: var(--spacing-20x) var(--spacing-8x);
  margin: 0 auto;
  width: 100%;
  max-width: var(--width-page);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.2rem;
  letter-spacing: -0.2px;
  .footer-inner {
    width: 100%;
    padding-top: var(--spacing-16x);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
      color: var(--social-color);
    }
    .social {
      margin: 0;
    }
  }
}
@media (max-width: 720px) {
  footer {
    padding-top: var(--spacing-6x);
    .footer-inner {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      .social {
        margin-top: var(--spacing-4x);
      }
    }
  }
}
</style>