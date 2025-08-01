<template>
  <div class="case-line"></div>
</template>

<style>
.case-line {
  display: block;
  max-width: var(--width-sm);
  height: 3px;
  background: var(--bg-secondary-rgb);
  background:linear-gradient(
    90deg,
    rgba(var(--bg-secondary-rgb), 0) 0%,
    rgba(var(--bg-secondary-rgb), 1) 50%,
    rgba(var(--bg-secondary-rgb), 0) 100%);
  margin: 0 auto;
}
</style>