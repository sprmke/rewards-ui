// APIs
import UserAPI from '@/app/http/apis/main/user/user-api.js';

export default {
		/**
		 * @return {object} user details
		*/
		async getUser() {
			return UserAPI.getUser();
		},

		/**
		 * @param {object} user details
		 * @return {object} user details
		*/
		async updateUser(userDetails) {
			return UserAPI.updateUser(userDetails);
		}
}