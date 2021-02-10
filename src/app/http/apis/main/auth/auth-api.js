// Instance
import MainAPI from '@/app/http/apis/main/main-api.js';

// Endpoints
import { API, ENDPOINTS } from '@/app/http/apis/main/_connection/connection-api.js';

class AuthAPI extends MainAPI {
	/**
	 * @param {object} user details
	 * @return {object} user details
	*/
	async postLogin(userDetails) {
		return API.post(ENDPOINTS.POST_LOGIN, userDetails);
	}

	/**
	 * @param {object} user details
	 * @return {object} user details
	*/
	async putRegister(userDetails) {
		return API.put(ENDPOINTS.PUT_REGISTER, userDetails);
	}
}

export default new AuthAPI();
