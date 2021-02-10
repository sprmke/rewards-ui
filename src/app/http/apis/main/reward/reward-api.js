// Instance
import MainAPI from '@/app/http/apis/main/main-api.js';

// Endpoints
import { API, ENDPOINTS } from '@/app/http/apis/main/_connection/connection-api.js';

// Libraries
const queryString = require('querystring');

class RewardAPI extends MainAPI {
	/**
	 * @param queryParams - pagination data
	 * @return {array} rewards list
	*/
	async getRewards(queryParams) {
		return API.get(`${ENDPOINTS.GET_REWARDS}?${queryString.stringify(queryParams)}`);
	}

	/**
	 * @param {number} rewardId
	 * @return {object} reward details
	*/
	async getReward(rewardId) {
		return API.get(`${ENDPOINTS.GET_REWARD}/${rewardId}`);
	}

	/**
	 * @param {object} rewardDetails (imageUrl and reward details)
	 * @return {object} reward details
	*/
	async addReward(rewardDetails) {
		const newFormData = new FormData();
		const { imageUrl, formDetails } = rewardDetails;

		newFormData.append(
			'formData',
			JSON.stringify(formDetails)
		);

		newFormData.append(
			'imageUrl',
			imageUrl
		);

		return API.post(ENDPOINTS.POST_REWARD, newFormData);
	}

	/**
	 * @param {object} rewardDetails (imageUrl and reward details)
	 * @return {object} reward details
	*/
	async updateReward(rewardDetails) {
		const newFormData = new FormData();
		const { imageUrl, formDetails } = rewardDetails;

		newFormData.append(
			'formData',
			JSON.stringify(formDetails)
		);

		newFormData.append(
			'imageUrl',
			imageUrl
		);

		return API.put(ENDPOINTS.POST_REWARD, newFormData);
	}

	/**
	 * @param {number} rewardId
	 * @return (no content)
	*/
	async deleteReward(rewardId) {
		return API.delete(`${ENDPOINTS.DELETE_REWARD}/${rewardId}`);
	}

	/**
	 * @param {number} rewardId
	 * @return (no content)
	*/
	async redeemReward(rewardId) {
		return API.put(`${ENDPOINTS.PUT_REDEEM_REWARD}/${rewardId}`);
	}
}

export default new RewardAPI();
