<template>
  <div class="work">
    <p class="title text large">Work</p>
    <ul class="work-list">
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/work/${project.id}`">
          <div class="case-item">
            <img class="case-thumbnail" :src="project.thumbnail" :alt="project.title" />
            <h3 class="case-title">{{ project.title }}</h3>
            <p class="case-desc text large">{{ project.subtitle }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  projects: Array
});
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0;
  margin-bottom: var(--spacing-8x);
}
.work-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: var(--spacing-20x);
  margin: 0;
  padding: 0;
  .case-item {
    display: flex;
    flex-direction: column;
    color: var(--text-color);
    .case-thumbnail {
      object-fit: cover;
    }
    .case-title {
      font-size: var(--font-size-larger);
      line-height: var(--line-height-mediumer);
      font-weight: 500;
      max-width: var(--width-paragraph);
      margin-top: var(--spacing-6x);
      color: var(--text-color);
    }
    .case-desc {
      max-width: var(--width-paragraph);
      margin-top: 0;
    }
  }
}
</style>