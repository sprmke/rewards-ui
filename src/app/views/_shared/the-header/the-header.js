export default {
	name: 'TheHeader',
	data() {
		return {
			isAuthenticated: false,
			isMobile: false,
			isRegisterPage: false,
			hasUserImage: false,
			name: 'Create Account'
		}
	},
	mounted() {
		window.addEventListener('resize', this.onWindowResize);
		this.onWindowResize();
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onWindowResize);
	},
	methods: {
		handleMenuLink() {
			if (!this.isMobile && !this.isAuthenticated) {
				const registerPage = '/auth/register';
				if (this.$route.path !== registerPage) {
					this.$router.push(registerPage);
				}
			}
		},
		onWindowResize() {
			this.isMobile = window.innerWidth < 768;
		}
	},
	watch: {
		'$route.path': {
			immediate: true,
			handler(url) {
				this.isRegisterPage = url === '/auth/register';
			}
		}
	}
}