// Utils
import { vuelidateUtil } from '@/app/utils/_shared/vuelidate-util.js';

export default {
	name: 'AuthRegister',
	data() {
		return {
			email: '',
			password: '',
			confirmPassword: '',
			isAPILoading: false
		}
	},
	computed: {
		validationRules() {
			let fields = {
				email: {},
				password: {},
				confirmPassword: {}
			}

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
		onSubmit() {
		}
	},
	validations() {
		return this.validationRules;
	}
}