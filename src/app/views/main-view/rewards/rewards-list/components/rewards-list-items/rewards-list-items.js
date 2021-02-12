// Services
import rewardService from '@/app/http/services/main/reward/reward-service.js';

// Components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Constants
import { STATUS } from '@/app/utils/constants/app-constants.js';

export default {
	name: 'RewardsListItems',
	components: {
		'vue-fontawesome': FontAwesomeIcon
	},
	data() {
		return {
			isAPILoading: false,
			rewardsList: {
				rewards: [],
				pagination: {
					currentPage: 1,
					itemsPerPage: 100, // default: 6 - will update once pagination is implemented
				}
			}
		}
	},
	created() {
		this.getRewardsList(this.rewardsList.pagination);
	},
	methods: {
		getRewardsList(queryParams) {
			// show loader
			this.isAPILoading = true;

			// call get rewards api
			rewardService.getRewards(queryParams)
				.then(res => {
					const result = res.data;
					const data = result.data ? result.data : this.rewardsList;
					const error = result.errors ? result.errors : null;
					const statusCode = result.status.code;

					if (statusCode === STATUS.SUCCESS.code) {
						this.rewardsList = data;
					} else {
						console.error('rewardService.getRewards err:', error);
					}
				})
				.catch(err => {
					console.error('rewardService.getRewards err:', err);
				})
				.finally(() => {
					this.isAPILoading = false;
				});
		},
		toToRewardDetails(rewardId) {
			this.$router.push(`/rewards/${rewardId}`);
		}
	}
}