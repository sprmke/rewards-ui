// Instance
import MainAPI from '@/app/http/apis/main/main-api.js';

// Endpoints
import { API, ENDPOINTS } from '@/app/http/apis/main/_connection/connection-api.js';

class AuthAPI extends MainAPI {
	/**
	 * @return {object} user details
	*/
	async getUser() {
		return API.get(ENDPOINTS.GET_USER);
	}

	/**
		* @param {object} user details
	 * @return {object} user details
	*/
	async updateUser(userDetails) {
		return API.put(ENDPOINTS.PUT_USER, userDetails);
	}
}

export default new AuthAPI();
