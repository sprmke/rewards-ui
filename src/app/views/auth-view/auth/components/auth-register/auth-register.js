// Services
import authService from '@/app/http/services/main/auth/auth-service.js';

// Mixins
import { authMixin } from '@/app/core/mixins/modules/auth-mixin.js';

// Utils
import { vuelidateUtil } from '@/app/utils/helpers/vuelidate-util.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'AuthRegister',
	mixins: [
		authMixin
	],
	computed: {
		validationRules() {
			// set validation fields
			let fields = {
				name: {},
				email: {},
				password: {},
				confirmPassword: {}
			}

			// set validation rules
			fields = vuelidateUtil.setFieldsRequired(fields, true);
			fields = vuelidateUtil.setEmailValidation(fields, 'email');
			fields = vuelidateUtil.setMinLengthValidation(fields, 'password', 6);
			fields = vuelidateUtil.setHasUpperCase(fields, 'password');
			fields = vuelidateUtil.setHasNumber(fields, 'password');
			fields = vuelidateUtil.setSameFieldValueValidation(fields, 'confirmPassword', 'password');
			
			return fields;
		}
	},
	methods: {
		initData() {
			return {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				isAPILoading: false,
				referredRoute: this.$route.query.from
			}
		},
		callAPI() {
			// construct user details params
			const userDetails = {
				name: this.name,
				email: this.email,
				password: this.password
			};
			
			// call register api
			authService.putRegister(userDetails)
				.then(res => {
					const result = res.data;
					const statusCode = result.status.code;

					if (statusCode === STATUS.CREATED.code) {
						// show success auth status
						this.setAuthStatus({
							message: 'Successfully registered!',
							status: 'success'
						});

						// reset form fields
						this.resetData();
					} else {
						if (result.errors && result.errors.length > 0) {
							this.setAuthStatus({
								message: result.errors[0].msg,
								status: 'failed'
							});
						} else {
							this.setAuthStatus({
								message: 'Something went wrong!',
								status: 'failed'
							});
						}
					}
				})
				.catch(err => {
					console.error('err:', err);
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		},
		goToLogin() {
			// pass referred route to login
			this.$router.push({ 
				path: '/auth/login', 
				query: { from: this.referredRoute }
			});
		}
	},
	validations() {
		return this.validationRules;
	}
}