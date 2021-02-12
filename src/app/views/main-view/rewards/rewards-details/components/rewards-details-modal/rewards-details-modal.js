// Libraries
import $ from 'jquery';

// Components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Services
import rewardService from '@/app/http/services/main/reward/reward-service.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'RewardsDetailsModal',
	components: {
		'vue-fontawesome': FontAwesomeIcon
	},
	data() {
		return this.initData();
	},
	props: {
		reward: {
			type: Object
		},
		isRedeemed: {
			type: Boolean
		}
	},
	methods: {
		initData() {
			return {
				isAPILoading: false,
				rewardStatus: {
					message: null,
					status: null
				}
			};
		},
		resetData() {
			Object.assign(this.$data, this.initData());
		},
		closeModal() {
			// reset data
			this.resetData();

			// hide modal
			$('#rewardsDetailsModal').modal('hide');
		},
		moreRewards() {
			// reset data
			this.resetData();

			// hide modal
			$('#rewardsDetailsModal').modal('hide');

			// redirect to rewards page
			this.$router.push('/rewards');
		},
		redeemReward() {
			// validate reward
			if (this.isRedeemed) {
				return;
			}
			
			// show loader
			this.isAPILoading = true;

			// call redeem reward api
			rewardService.redeemReward(this.reward._id)
				.then(res => {
					if (res.status === STATUS.NO_CONTENT.code) {
						// show success message
						this.rewardStatus = {
							message: `You redeemed ${this.reward.name} item.`,
							status: 'success'
						};

						// triggers success redeem to reward details page
						this.$emit('successfulRedeem');
					} else {
						const error = res.data.status.message;
						// show error message
						this.rewardStatus = {
							message: error || 'Cannot redeem the reward.',
							status: 'failed'
						};
					}
				})
				.catch(err => {
					console.error('rewardService.redeemReward err:', err);
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		},
	}
}