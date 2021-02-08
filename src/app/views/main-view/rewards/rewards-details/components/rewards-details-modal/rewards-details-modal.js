// Libraries
import $ from 'jquery'

export default {
	name: 'RewardsDetailsModal',
	props: {
		prize: {
			type: Object,
			required: true
		}
	},
	methods: {
		redeemPrize() {
			this.$emit('redeemReward', this.prize);
			this.closeModal();
		},
		closeModal() {
			$('#rewardsDetailsModal').modal('hide');
		}
	}
}