export default {
	name: 'ErrorView',
	computed: {
		isUserLoggedIn() {
			const token = this.$store.getters.getUserToken;
			let redirectRoute = {name: 'Landing Page'};

			if(token) {
					redirectRoute = {name: 'Dashboard'};
			}

			return redirectRoute;
		}
	}
}