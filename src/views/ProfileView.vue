<template>
  <LayoutComponent>
    <ProfileContent />
  </LayoutComponent>
</template>

<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
import ProfileContent from '@/components/ProfileContent.vue';
</script>

<style lang="scss">
.profile {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: var(--spacing-12x);
	margin-top: var(--spacing-10x);
	p {
		margin: 0;
		flex: 1;
	}
}
@media (max-width: 720px) {
  .profile {
		flex-direction: column;
		justify-content: none;
		.column {
			width: 100%;
			padding-right: 0;
			padding-left: 0;
			.text.hero {
				margin-top: 0;
				margin-bottom: var(--spacing-2x);
			}
		}
	}
}
</style>