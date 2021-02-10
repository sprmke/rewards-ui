import AuthAPI from '@/app/http/apis/main/auth/auth-api.js';

export default {
	/**
	 * @param {object} user details
	 * @return {object} user details
	*/
	async postLogin(userDetails) {
		return AuthAPI.postLogin(userDetails);
	},

	/**
	 * @param {object} user details
	 * @return {object} user details
	*/
	async putRegister(userDetails) {
		return AuthAPI.putRegister(userDetails);
	}
}