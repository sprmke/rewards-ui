export default {
	name: 'HomeHero',
	computed: {
		isAuthenticated() {
			return this.$store.getters.getAuthData.token !== null;
		}
	},
	methods: {
		handleHeroButton() {
			let page = this.isAuthenticated ? '/rewards' : '/auth/register';
			this.$router.push(page);
		}
	}
}