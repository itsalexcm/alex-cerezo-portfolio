<template>
  <div :class="['tidus', extraClass]">
    <h2 v-if="title" v-html="title"></h2>
    <div :class="['tidus-content', extraClassContent]">
      <div v-for="(item, index) in content" :key="index" class="tidus-item">
        <div v-if="item.image" class="tidus-img">
          <img :src="item.image" :alt=item.alt />
        </div>
        <div v-else-if="item.text" class="tidus-text">
          <h3 v-if="item.title">{{ item.title }}</h3>
          <p class="text medium" v-html="item.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: Array,
  extraClass: String,
  extraClassContent: String,
})
</script>

<style lang="scss">
  .tidus {
    display: flex;
    justify-content: space-between;
    margin: 0 0 calc(var(--spacing-10x) * 2) 0;
    &:last-child {
      margin: 0;
    }
    &.column {
      flex-direction: column;
    }
    &.justify-end {
      justify-content: end;
    }
    h2 {
      font-size: 32px;
      line-height: 42px;
      font-weight: 500;
      margin: 0 0 var(--spacing-14x) 0;
      .underline {
        display: block;
        width: 80px;
        height: 2px;
        margin: var(--spacing-4x) 0 0 0;
        background: var(--extra-neutral-01);
      }
    }
    .tidus-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--spacing-10x);
      &.align-center {
        align-items: center;
      }
      .tidus-item {
        .tidus-img {
          min-width: 200px;
          max-width: 400px;
          flex: 0 0 auto;
          img {
            width: 100%;
            border-radius: 88px 200px 0px 32px;
            height: auto;
            display: block;
          }
        }
        .tidus-text {
          max-width: 720px;
          margin: 0;
          h3 {
            font-size: 28px;
            line-height: 39px;
            font-weight: 700;
            margin: 0 0 32px 0;
          }
          p {
            span.bold {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
</style>