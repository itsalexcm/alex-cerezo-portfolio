<template>
  <LayoutComponent>
    <div class="intro">
      <TypingText />
      <p class="text large">
        I'm Alex Cerezo. Product Designer with 10+ years of experience solving real user problems and business needs through digital products for various companies.
      </p>
      <SocialLinks />
    </div>
    <ProjectList :projects="projects" />
  </LayoutComponent>
</template>

<script setup>
import TypingText from '@/components/TypingText.vue'
import ProjectList from '@/components/ProjectList.vue'
import { projects } from '@/data/projects.js'
import LayoutComponent from '@/components/LayoutComponent.vue'
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<style lang="scss">
.intro {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: var(--width-paragraph);
	margin: var(--spacing-10x) 0 calc(var(--spacing-20x) + var(--spacing-20x)) 0;
}
</style>