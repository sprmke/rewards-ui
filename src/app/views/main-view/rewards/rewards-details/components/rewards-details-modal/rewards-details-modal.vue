<template lang="pug">
	.rewards-details-modal#rewardsDetailsModal.modal.fade(ref="rewardDetailsModal" tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
		.modal-dialog.modal-dialog-centered(role='document')
			.modal-content
				.modal-header
					h5.modal-title Redeem reward?
					button.close(type='button' data-dismiss='modal' aria-label='Close')
						span(aria-hidden='true')
							vue-fontawesome(:icon="['fas', 'times']")
				.modal-body
					p Are you sure you want to redeem 
						strong {{prize.name}} 
						| item ?
				.modal-footer
					button.btn.btn-secondary(type='button' data-dismiss='modal') No
					button.main-btn.btn(type='button' @click="redeemPrize") Yes
</template>

<script src="./rewards-details-modal.js"></script>

<style lang="scss" scoped>
	@import './rewards-details-modal.scss';
</style>

