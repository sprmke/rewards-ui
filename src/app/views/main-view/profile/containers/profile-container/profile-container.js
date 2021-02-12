// Components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Services
import rewardService from '@/app/http/services/main/reward/reward-service.js';

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

// Assets
const userImage = require('../../../../../../assets/images/_shared/user.png');

export default {
	name: 'ProfileContainer',
	components: {
		'vue-fontawesome': FontAwesomeIcon
	},
	data() {
		return {
			userImage,
			isAPILoading: false,
			rewardsList: []
		}
	},
	computed: {
		user() {
			return this.$store.getters.getUserData;
		}
	},
	created() {
		// get user rewards list
		this.getUserRewards();
	},
	methods: {
		getUserRewards() {
			const rewards = this.user.rewards;
			for (let rewardId in rewards) {
				// get each reward item and add them to rewards list
				this.getReward(rewards[rewardId]);
			}
		},
		getReward(rewardId) {
			// show loader
			this.isAPILoading = true;

			// call get reward api
			rewardService.getReward(rewardId)
				.then(res => {
					// get reward details
					const result = res.data;
					const data = result.data ? result.data : {};
					const statusCode = result.status.code;

					if (statusCode === STATUS.SUCCESS.code) {
						this.rewardsList.push(data.reward);
					} else {
						console.error('rewardService.getReward err:', result.status.message);
					}
				})
				.catch(err => {
					console.error('rewardService.getReward err:', err);
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		}
	}
}