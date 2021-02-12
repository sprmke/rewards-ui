// Components
import RewardsDetailsModal from '@/app/views/main-view/rewards/rewards-details/components/rewards-details-modal/rewards-details-modal.vue';

// Mixins
import { userMixin } from '@/app/core/mixins/modules/user-mixin.js';

// Services
import rewardService from '@/app/http/services/main/reward/reward-service.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'RewardsDetailsContainer',
	mixins: [
		userMixin
	],
	components: {
		RewardsDetailsModal
	},
	data() {
		return this.initData();
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			// redirect user to rewards list page if URL param rewardId is invalid
			vm.getRewardDetails(vm.rewardId)
				.then(res => {
					if (res && res.name) { next(); } 
					else { next({ path: '/rewards' })}
				});
		});
	},
	created() {
		// prevent redundant API call
		if (!this.reward) {
			this.getRewardDetails(this.rewardId);
		}
	},
	watch: {
		isRedeemed(newVal) {
			if (newVal) {
				this.isRedeemed = newVal;
			}
		}
	},
	methods: {
		initData() {
			return {
				rewardId: this.$route.params.rewardId,
				isAPILoading: false,
				showModal: true,
				reward: null,
				isRedeemed: false
			}
		},
		getRewardDetails(rewardId) {
			// show loader
			this.isAPILoading = true;

			// call get rewards api
			return rewardService.getReward(rewardId)
				.then(res => {
					// get reward details
					const result = res.data;
					const data = result.data ? result.data : this.rewardsList;
					const error = result.errors ? result.errors : null;
					const statusCode = result.status.code;

					if (statusCode === STATUS.SUCCESS.code) {
						// set reward details
						this.reward = data.reward;

						// check reward redeem status
						this.checkRewardStatus(this.reward);
						
						return this.reward;
					} else {
						// redirect user to rewards page 
						// if reward details cannot be fetched
						console.error('rewardService.getReward err:', error);
						this.$router.push('/rewards');
					}
				})
				.catch(err => {
					console.error('rewardService.getReward err:', err);
					this.$router.push('/rewards');
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		},
		checkRewardStatus(reward) {
			// check if reward is already redeem by the user
			this.isRedeemed = this.getUserData.rewards.some(rewardId => {
				return rewardId === reward._id;
			});
		},
		rewardRedeemed() {
			// get updated user data
			this.saveUserData(false);

			// refresh reward details
			this.getRewardDetails(this.rewardId);
		}
	}
}