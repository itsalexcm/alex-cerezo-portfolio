<template>
  <div class="social">
    <a href="mailto:hello.alexcerezo@gmail.com" class="social-link text large">hello.alexcerezo@gmail.com</a>
    <span class="text large">·</span>
    <a href="https://twitter.com/itsalexcm" class="social-link text large">Twitter</a>
    <span class="text large">·</span>
    <a href="https://www.linkedin.com/in/alexcerezo/" class="social-link text large">Linkedin</a>
  </div>
</template>

<style lang="scss">
.social {
  display: flex;
  gap: var(--spacing-4x);
  margin-top: var(--spacing-4x);
  .social-link {
    color: var(--social-color);
    border-bottom: 1px solid var(--social-color);
    padding-bottom: 2px;
    &:hover {
      color: var(--social-color);
      border-bottom-color: var(--social-color);
    }
  }
  span {
    color: var(--social-color);
  }
}
@media (max-width: 720px) {
	.social {
		flex-wrap: wrap;
	}
}
</style>