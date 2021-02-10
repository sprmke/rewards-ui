// Components
import RewardsDetailsModal from '@/app/views/main-view/rewards/rewards-details/components/rewards-details-modal/rewards-details-modal.vue';

// Mixins
import { rewardMixin } from '@/app/core/mixins/modules/reward-mixin.js';
import { userMixin } from '@/app/core/mixins/modules/user-mixin.js';

// Services
import rewardService from '@/app/http/services/main/reward/reward-service.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'RewardsDetailsContainer',
	mixins: [
		rewardMixin,
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
			vm.getRewardDetails(vm.rewardId)
				.then(res => {
					if (res && res.name) { next(); } 
					else { next({ path: '/rewards' })}
				});
		});
	},
	created() {
		if (!this.reward) {
			this.getRewardDetails(this.rewardId);
		}
	},
	computed: {
		isRedeemed() {
			// check if user already redeemed the reward
			return this.getUserData.rewards.some(reward => {
				return reward === this.reward._id;
			});
		}
	},
	methods: {
		initData() {
			return {
				rewardId: this.$route.params.rewardId,
				isAPILoading: false,
				showModal: true,
				reward: null
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
						
						return this.reward;
					} else {
						console.error('err:', error);
						this.$router.push('/rewards');
					}
				})
				.catch(err => {
					console.error('err:', err);
					this.$router.push('/rewards');
				})
				.finally(() => {
					this.isAPILoading = false;
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