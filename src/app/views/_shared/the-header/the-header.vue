<template lang="pug">
	.the-header
		//- Logo
		.logo-container
			router-link.logo-link(to="/" data-test="logo-link")
				img.logo-img(
					:src="require('@/assets/images/_shared/logo.png')" 
					alt="Rewards Logo"
					data-test="logo-image"
				)
		
		//- Menu
		.menu-container
			ul.navbar-nav
				li.nav-item.links
					router-link.nav-link(to='/') Home
				li.nav-item.links
					router-link.nav-link(to='/rewards') Rewards
				li.nav-item
					a#userMenuLink.user-menu.nav-link.dropdown-toggle(
						href="javascript:void(0);"
						data-toggle="dropdown" 
						aria-haspopup="true" 
						aria-expanded="false" 
						data-test="user-menu-link"
						:class="{'router-link-exact-active': isRegisterPage}"
						@click="handleMenuLink"
					)
						.user-image.authenticated(v-if="isAuthenticated")
							img.user-img(
								:src="require('@/assets/images/_shared/user.png')" 
								alt="User Image" 
								data-test="user-menu-image"
							)
						.user-image.not-authenticated(v-else)
							vue-fontawesome(:icon="['fas', 'user']")
						|
						span.user-name {{ getUserName || 'Account' }}
					.dropdown-menu.dropdown-menu-right(v-show="isMobile || isAuthenticated" aria-labelledby="userMenuLink")
						router-link.dropdown-item(v-show="isMobile" to="/") Home
						router-link.dropdown-item(v-show="isMobile" to="/rewards") Rewards
						router-link.dropdown-item(v-show="isAuthenticated" to="/profile") Profile
						a.dropdown-item(v-show="isAuthenticated" href="javascript:void(0);" @click.prevent="logout") Logout
</template>

<script src="./the-header.js"></script>

<style lang="scss" scoped>
	@import './the-header.scss';
</style>

