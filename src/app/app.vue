<template lang="pug">
	#app
		transition(name="page-fade-up" mode="out-in")
			router-view
</template>

<script src="./app.js"></script>

<style lang="scss" scoped>
  @import './app.scss';
</style>