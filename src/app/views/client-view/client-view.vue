<template lang="pug">
	.client-view
		//- Header
		the-header(origin="client")

		//- Main Content
		main.client-content
			router-view
</template>

<script src="./client-view.js"></script>

<style lang="scss" scoped>
	@import './client-view.scss';
</style>

