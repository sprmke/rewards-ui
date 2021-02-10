// Libraries
import { mapGetters } from 'vuex';

export default {
	name: 'TheHeader',
	data() {
		return {
			isMobile: false,
			isRegisterPage: false,
			hasUserImage: false
		}
	},
	computed: {
		...mapGetters([
			'getUserName',
			'getAuthData'
		]),
		isAuthenticated() {
			return this.getAuthData.token !== null;
		}
	},
	watch: {
		'$route.path': {
			immediate: true,
			handler(url) {
				this.isRegisterPage = url.includes('/auth');
			}
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
		logout() {
			this.$store.dispatch('logout');
		},
		onWindowResize() {
			this.isMobile = window.innerWidth < 768;
		}
	}
}