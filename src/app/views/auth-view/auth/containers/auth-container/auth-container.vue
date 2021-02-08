<template lang="pug">
	.auth-container.section
		.container
			.card
				.card-body
					transition(name="page-fade-up" mode="out-in")
						router-view
</template>

<script src="./auth-container.js"></script>

<style lang="scss" scoped>
	@import './auth-container.scss';
</style>

