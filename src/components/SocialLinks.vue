<template>
  <div class="social">
    <a href="mailto:hello.alexcerezo@gmail.com" class="social-link text regular">hello.alexcerezo@gmail.com ↗</a>
    <!-- <span class="text large">·</span>
    <a href="https://twitter.com/itsalexcm" class="social-link text regular">Twitter</a> -->
    <span class="text large">·</span>
    <a href="https://www.linkedin.com/in/alexcerezo/" class="social-link text regular">Linkedin</a>
  </div>
</template>

<style lang="scss">
.social {
  display: flex;
  gap: var(--spacing-4x);
  margin-top: var(--spacing-4x);
  .social-link {
    color: var(--accent-secondary);
    border-bottom: 1px solid var(--accent-secondary);
    padding-bottom: var(--spacing-1x);
    &:hover {
      color: var(--accent-secondary);
      border-bottom-color: var(--accent-secondary);
    }
  }
  span {
    color: var(--accent-secondary);
  }
}
@media (max-width: 720px) {
	.social {
		flex-wrap: wrap;
	}
}
</style>