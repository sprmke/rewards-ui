// Utils
import { vuelidateUtil } from '@/app/utils/_shared/vuelidate-util.js';

export default {
	name: 'AuthLogin',
	data() {
		return {
			email: '',
			password: '',
			isAPILoading: false
		}
	},
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
		onSubmit() {
		}
	},
	validations() {
		return this.validationRules;
	}
}