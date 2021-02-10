// Libraries
import { mapGetters, mapMutations, mapActions } from 'vuex';

// Mixins
import { authMixin } from '@/app/core/mixins/modules/auth-mixin.js';

// Services
import userService from '@/app/http/services/main/user/user-service.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export const userMixin = {
	mixins: [
		authMixin
	],
	computed: {
		...mapGetters([
			'getUserData'
		])
	},
	methods: {
		...mapMutations([
			'setAuthData',
			'setUserData',
		]),
		...mapActions([
			'logout',
			'initLogoutTimer'
		]),
		saveUserData(isFromAuth) {
			// call get user api
			userService.getUser()
				.then(response => {
					// get user response details
					const result = response.data;
					const data = result.data ? result.data : null;
					const statusCode = result.status.code;

					if (statusCode === STATUS.SUCCESS.code) {
						// save user data on store
						this.setUserData(data.user);

						// init logout timer
						this.initLogoutTimer(this.getAuthData.expiresIn);

						if (isFromAuth) {
							// reset form fields
							this.resetData();

							// redirect to referred route
							if (this.referredRoute) {
								this.$router.push(this.referredRoute);
							} else {
								this.$router.push('/');
							}
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
		}
	}
}