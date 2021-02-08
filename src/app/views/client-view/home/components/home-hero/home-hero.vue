<template lang="pug">
	.home-hero
		.container
			h1.main-header.text-uppercase.text-center
				| {{ isAuthenticated ? 'Congratulations' : 'Join us & win rewards' }}!
			p.sub-header.text-center.mb-4
				template(v-if="isAuthenticated")
					| Please click the button below to redeem your rewards.
				template(v-else)
					| Register or Login your account to redeem multiple rewards.
			button.hero-button.btn.btn-lg(type='button' data-test="redeem-login-button" @click="handleHeroButton")
				| {{ isAuthenticated ? 'Redeem Rewards' : 'Create Account' }}

</template>

<script src="./home-hero.js"></script>

<style lang="scss" scoped>
	@import './home-hero.scss';
</style>

