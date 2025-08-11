<template>
  <div class="work">
    <ul class="work-list">
      <li v-for="project in projects" :key="project.id">
        <router-link :to="`/work/${project.id}`">
          <div class="work-item">
            <div class="work-thumbnail">
              <img class="case-img" :src="project.thumbnail" :alt="project.title" />
            </div>
            <div class="work-content">
              <div v-if="project.tags && project.tags.length" class="case-tags">
                <span
                  v-for="(tag, i) in project.tags"
                  :key="`tag-${i}`"
                  class="tag-item text mini"
                >{{ tag }}</span>
              </div>
              <h3 class="work-title">{{ project.title }}</h3>
              <p class="work-desc text regular">{{ project.intro }}</p>
              <p class="work-button text regular">Case Study →</p>
            </div>
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
.work {
  .work-label {
    margin-bottom: var(--spacing-8x);
  }
  .work-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: var(--spacing-20x);
    margin: 0;
    padding: 0;
    .work-item {
      display: flex;
      align-items: center;
      color: var(--text-primary);
      .work-thumbnail {
        flex: 2;
        border-radius: var(--spacing-4x);
        .case-img {
          object-fit: cover;
        }
      }
      .work-content {
        flex: 1;
        margin: 0 0 0 var(--spacing-16x);
        .work-title {
          font-size: var(--font-size-lg);
          line-height: var(--line-height-xl);
          font-weight: var(--font-weight-bold);
          max-width: var(--width-sm);
          margin-bottom: 0px;
        }
        .work-desc {
          margin-top: var(--spacing-2x);
        }
        .work-button {
          color: #1A1A1A;
          padding: var(--spacing-3x) var(--spacing-5x);
          margin-top: var(--spacing-6x);
          display: inline-flex;
          transition: all .3s ease;
          background-color: var(--accent-primary);
          border-radius: var(--spacing-30x);
        }
      }
    }
  }
}
@media (max-width: 720px) {
  .work {
    .work-list {
      .work-item {
        flex-direction: column;
        align-items: flex-start;
        .work-content {
          margin: var(--spacing-8x) 0 0 0;
          .work-desc {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>