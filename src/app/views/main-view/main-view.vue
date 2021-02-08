<template lang="pug">
	.main-view
		//- Header
		the-header

		//- Content
		main.main-content
			transition(name="page-fade-up" mode="out-in")
				router-view

		//- Footer
		the-footer
</template>

<script src="./main-view.js"></script>

<style lang="scss" scoped>
  @import './main-view.scss';
</style>

