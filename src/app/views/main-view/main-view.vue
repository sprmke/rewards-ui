<template lang="pug">
	.main-view
		//- Header
		the-header(origin="main")

		//- Main Content
		main.main-content
			router-view
</template>

<script src="./main-view.js"></script>

<style lang="scss" scoped>
  @import './main-view.scss';
</style>

