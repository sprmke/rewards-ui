// Libraries
import { mapMutations, mapActions } from 'vuex';

// Services
import authService from '@/app/http/services/main/auth/auth-service.js';
import userService from '@/app/http/services/main/user/user-service.js';

// Mixins
import { authMixin } from '@/app/core/mixins/modules/auth-mixin.js';

// Utils
import { vuelidateUtil } from '@/app/utils/helpers/vuelidate-util.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'AuthLogin',
	mixins: [
		authMixin
	],
	computed: {
		validationRules() {
			let fields = {
				email: {},
				password: {}
			}

			fields = vuelidateUtil.setFieldsRequired(fields, true);
			fields = vuelidateUtil.setEmailValidation(fields, 'email');
			
			return fields;
		}
	},
	methods: {
		...mapMutations([
			'setAuthData',
			'setUserData'
		]),
		...mapActions([
			'logout',
			'initLogoutTimer'
		]),
		initData() {
			return {
				email: '',
				password: '',
				isAPILoading: false,
				referredRoute: this.$route.query.from
			}
		},
		callAPI() {
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
						// show success auth status
						this.setAuthStatus({
							message: 'Successfully login!',
							status: 'success'
						});

						// save auth data on store
						this.setAuthData({
							token: data.token,
							userId: data.userId,
							expiresIn: data.expiresIn
						})

						// call get user api
						userService.getUser()
							.then(response => {
								// get user response details
								const userResult = response.data;
								const userData = userResult.data ? userResult.data : null;
								const userStatusCode = userResult.status.code;

								if (userStatusCode === STATUS.SUCCESS.code) {
									// save user data on store
									this.setUserData(userData.user);
	
									// init logout timer
									this.initLogoutTimer();

									// reset form fields
									this.resetData();
	
									// redirect to referred route
									if (this.referredRoute) {
										this.$router.push(this.referredRoute);
									} else {
										this.$router.push('/');
									}
								} else {
									// reset user and auth data on store
									this.logout();

									// show generic error
									this.setAuthStatus({
										message: 'Something went wrong!',
										status: 'failed'
									});
								}
							})
							.catch(err => {
								console.error('err:', err);
							});
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
		}
	},
	validations() {
		return this.validationRules;
	}
}