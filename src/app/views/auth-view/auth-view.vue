<template lang="pug">
	.auth-view
		//- Header
		the-header

		//- Content
		main.auth-content
			transition(name="page-fade-up" mode="out-in")
				router-view
</template>

<script src="./auth-view.js"></script>

<style lang="scss" scoped>
	@import './auth-view.scss';
</style>

