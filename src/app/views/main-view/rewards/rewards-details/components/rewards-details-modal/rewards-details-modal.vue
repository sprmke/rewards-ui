<template lang="pug">
	.rewards-details-modal#rewardsDetailsModal.modal.fade(ref="rewardDetailsModal" tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
		.modal-dialog.modal-dialog-centered(v-if="reward" role='document')
			.modal-content(:class="{'loading h-300': isAPILoading}")
				.modal-header
					h5.modal-title {{ rewardStatus.status == 'success' ? 'Congratulations!' : 'Redeem item?' }}
					button.close(type='button' data-dismiss='modal' aria-label='Close')
						span(aria-hidden='true')
							vue-fontawesome(:icon="['fas', 'times']")
				.modal-body
					.image-container
						img.reward-img(:src="reward.imageUrl" :alt="`${reward.name} Image`")
					p.text-center(:class="{'d-none': rewardStatus.status == 'success'}") 
						| Are you sure you want to redeem 
						strong {{ reward.name }} 
						| item?
					
					.alert.mb-0.text-center(v-show="rewardStatus.status" role="alert" :class="rewardStatus.status === 'failed' ? 'alert-danger mt-4' : 'alert-success'")
						| {{ rewardStatus.message }}

				.modal-footer
					template(v-if="!rewardStatus.status")
						button.btn.btn-secondary.mr-2(type='button' data-dismiss='modal') No
						button.main-btn.btn.ml-2(type='button' @click="redeemReward") Yes
					template(v-else)
						button.btn.btn-secondary.mr-2(type='button' data-dismiss='modal') Got it
						button.main-btn.btn.ml-2(type='button' @click="moreRewards") More rewards
</template>

<script src="./rewards-details-modal.js"></script>

<style lang="scss" scoped>
	@import './rewards-details-modal.scss';
</style>

