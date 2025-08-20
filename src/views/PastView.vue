<template>
  <LayoutComponent>
    <div class="past-work">
      <div class="past-top">
        <div class="about-content">
          <h1 class="hero-heading">Past work</h1>
          <div class="past-overview">
            <p class="text hero">
              Some other design samples I’ve contributed to over the last decade, including landing pages, UI components, and other visual work.
            </p>
          </div>
        </div>
      </div>
      <div class="past-content">
        <img src="/assets/imgs/past/past00.png" alt="Sample">
        <img src="/assets/imgs/past/past01.png" alt="Sample">
        <img src="/assets/imgs/past/past02.png" alt="Sample">
        <img src="/assets/imgs/past/past03.png" alt="Sample">
        <img src="/assets/imgs/past/past04.png" alt="Sample">
        <img src="/assets/imgs/past/past05.png" alt="Sample">
        <img src="/assets/imgs/past/past06.png" alt="Sample">
        <img src="/assets/imgs/past/past07.png" alt="Sample">
        <img src="/assets/imgs/past/past08.png" alt="Sample">
        <img src="/assets/imgs/past/past09.png" alt="Sample">
        <img src="/assets/imgs/past/past10.png" alt="Sample">
        <img src="/assets/imgs/past/past11.png" alt="Sample">
        <img src="/assets/imgs/past/past12.png" alt="Sample">
        <img src="/assets/imgs/past/past13.png" alt="Sample">
        <img src="/assets/imgs/past/past14.png" alt="Sample">
        <img src="/assets/imgs/past/past15.png" alt="Sample">
        <img src="/assets/imgs/past/past16.png" alt="Sample">
      </div>
    </div>
  </LayoutComponent>
</template>

<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>

<style lang="scss">
.past-work {
  display: block;
  .past-top {
    max-width: var(--width-md);
    text-align: center;
    margin: 0 auto var(--spacing-30x) auto;
    .past-overview {
      margin-top: 40px;
    }
  }
  .past-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20x);
    margin-bottom: 0;
    overflow: hidden;
    transition: background-color .3s ease;
  }
}
</style>