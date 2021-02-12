// Libraries
import { mapGetters } from 'vuex';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Assets
const logo = require('../../../../assets/images/_shared/logo.png');
const userImage = require('../../../../assets/images/_shared/user.png');

export default {
	name: 'TheHeader',
	components: {
		'vue-fontawesome': FontAwesomeIcon
	},
	data() {
		return {
			logo,
			userImage,
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
		// add window resize event to detect if mobile or desktop
		window.addEventListener('resize', this.onWindowResize);
		this.onWindowResize();
	},
	beforeDestroy() {
		// remove event upon component destory for better performance
		window.removeEventListener('resize', this.onWindowResize);
	},
	methods: {
		handleMenuLink() {
			if (!this.isMobile && !this.isAuthenticated) {
				// redirect user to register page if desktop and not authenticated
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