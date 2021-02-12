<template lang="pug">
	.error-view
		//- Header
		the-header

		//- Content
		main.error-content
			.content
				h1 404
				h3.mb-4 Page Not Found
				router-link.btn.main-btn(to="/") Go to home
</template>

<script src="./error-view.js"></script>

<style lang="scss" scoped>
	@import "./error-view.scss";
</style>

