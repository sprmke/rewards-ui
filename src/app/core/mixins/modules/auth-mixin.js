// Libraries
import { mapMutations, mapGetters } from 'vuex';

export const authMixin = {
	data() {
		return this.initData();
	},
	computed: {
		...mapGetters([
			'getAuthStatus'
		]),
		isDisabled() {
			return this.$v.$invalid;
		}
	},
	beforeDestroy() {
		this.clearAuthStatus();
	},
	methods: {
		...mapMutations([
			'setAuthStatus',
			'clearAuthStatus'
		]),
		resetData() {
			// reset form data
			Object.assign(this.$data, this.initData());

			// reset validation
			this.$v.$reset();
		},
		validateForm() {
			this.$v.$touch();

			if (this.isDisabled) {
				return;
			}
		},
		onSubmit() {
			// validate form
			this.validateForm();

			// show loader
			this.isAPILoading = true;

      // reset auth status
			this.clearAuthStatus();

			// call auth service api
			this.callAPI();
		}
	}
}