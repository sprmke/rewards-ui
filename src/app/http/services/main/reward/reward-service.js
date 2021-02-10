import RewardAPI from '@/app/http/apis/main/reward/reward-api.js';

export default {
	/**
	 * @param queryParams - pagination data
	 * @return {array} rewards list
	*/
	async getRewards(queryParams) {
		return RewardAPI.getRewards(queryParams);
	},

	/**
	 * @param {number} rewardId
	 * @return {object} reward details
	*/
	async getReward(rewardId) {
		return RewardAPI.getReward(rewardId);
	},

	/**
	 * @param {object} rewardDetails (imageUrl and reward details)
	 * @return {object} reward details
	*/
	async addReward(rewardDetails) {
		return RewardAPI.addReward(rewardDetails);
	},

	/**
	 * @param {object} rewardDetails (imageUrl and reward details)
	 * @return {object} reward details
	*/
	async updateReward(rewardDetails) {
		return RewardAPI.updateReward(rewardDetails);
	},

	/**
	 * @param {number} rewardId
	 * @return (no content)
	*/
	async deleteReward(rewardId) {
		return RewardAPI.deleteReward(rewardId);
	},

	/**
	 * @param {number} rewardId
	 * @return (no content)
	*/
	async redeemReward(rewardId) {
		return RewardAPI.redeemReward(rewardId);
	}
}