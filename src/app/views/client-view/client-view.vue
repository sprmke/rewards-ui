<template lang="pug">
	.client-view
		//- Header
		the-header

		//- Content
		main.client-content
			transition(name="page-fade-up" mode="out-in")
				router-view

		//- Footer
		the-footer
</template>

<script src="./client-view.js"></script>

<style lang="scss" scoped>
	@import './client-view.scss';
</style>

