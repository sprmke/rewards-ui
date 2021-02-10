// Services
import authService from '@/app/http/services/main/auth/auth-service.js';

// Mixins
import { userMixin } from '@/app/core/mixins/modules/user-mixin.js';

// Utils
import { vuelidateUtil } from '@/app/utils/helpers/vuelidate-util.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'AuthLogin',
	mixins: [
		userMixin
	],
	computed: {
		validationRules() {
			// set validation fields
			let fields = {
				email: {},
				password: {}
			}

			// set validation rules
			fields = vuelidateUtil.setFieldsRequired(fields, true);
			fields = vuelidateUtil.setEmailValidation(fields, 'email');
			
			return fields;
		}
	},
	watch: {
		'$route.query': {
			immediate: true,
			handler(query) {
				this.referredRoute = query.from;
			}
		}
	},
	methods: {
		initData() {
			return {
				email: '',
				password: '',
				isAPILoading: false,
				referredRoute: this.$route.query.from
			}
		},
		callAPI() {
			// construct user details params
			const userDetails = {
				email: this.email,
				password: this.password
			};

			// call login api
			authService.postLogin(userDetails)
				.then(res => {
					const result = res.data;
					const data = result.data ? result.data : null;
					const statusCode = result.status.code;

					if (statusCode === STATUS.SUCCESS.code) {
						// save auth data on store
						this.setAuthData({
							token: data.token,
							userId: data.userId,
							expiresIn: data.expiresIn
						})

						// get and save user data to store 
						this.saveUserData(true);
					} else {
						this.setAuthStatus({
							message: result.status.message || 'Something went wrong!',
							status: 'failed'
						});
					}
				})
				.catch(err => {
					console.error('err:', err);
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		},
		goToRegister() {
			// pass referred route to register
			this.$router.push({ 
				path: '/auth/register', 
				query: { from: this.referredRoute }
			});
		}
	},
	validations() {
		return this.validationRules;
	}
}