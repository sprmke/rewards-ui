// Components
import RewardsDetailsModal from '@/app/views/main-view/rewards/rewards-details/components/rewards-details-modal/rewards-details-modal.vue';

export default {
	name: 'RewardsDetailsContainer',
	components: {
		RewardsDetailsModal
	},
	data() {
		return {
			showModal: true,
			prize: {
				id: 1,
				name: 'Prize 1',
				description: 'This is the prize number 1',
				image_url: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2020-09/gsSXdOaEQE.jpg',
				quantity: 5
			}
		}
	},
	methods: {
		redeemReward(prize) {
			console.log('Redeemed prize::', prize);
		}
	}
}