export default {
	name: 'HomeHero',
	data() {
		return {
			isAuthenticated: true
		}
	},
	methods: {
		handleHeroButton() {
			let page = this.isAuthenticated ? '/rewards' : '/auth/register';
			this.$router.push(page);
		}
	}
}