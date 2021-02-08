<template lang="pug">
	.the-footer
		.container
			ul.footer-links
				li
					router-link(to="/terms-and-conditions") Terms &amp; Conditions
				li
					router-link(to="/privacy-policy") Privacy Policy
</template>

<script src="./the-footer.js"></script>

<style lang="scss" scoped>
	@import './the-footer.scss';
</style>

