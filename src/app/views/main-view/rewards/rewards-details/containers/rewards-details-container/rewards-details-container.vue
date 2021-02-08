<template lang="pug">
	.rewards-details-container.section.full-height
		.container
			.title-container
				h1.main-header.text-center.mb-5 Reward Details
				router-link.btn-back.btn.btn-sm.mb-3(to="/rewards")
					vue-fontawesome(:icon="['fas', 'chevron-left']")
					span.ml-2 Go back
			|
			.card.details-container
				.card-body
					.left-content
						.image-container
							img.card-img-top(:src="prize.image_url" :alt="`${prize.name} Image`")
					.right-content
						.prize-details.mt-4.mb-4
							h3.prize-name.font-weight-bold {{ prize.name }}
							p.prize-quantity.mb-4 Quantity: 
								strong {{ prize.quantity }}
							p.prize-description {{ prize.description }}
						a.main-btn.btn.btn-primary.mt-4(href='javascript:void(0);' data-toggle='modal' data-target='#rewardsDetailsModal')
							span.mr-2 Redeem
							vue-fontawesome(:icon="['fas', 'chevron-right']")
		|	
		rewards-details-modal(:prize="prize" @redeemReward="redeemReward")
					
</template>

<script src="./rewards-details-container.js"></script>

<style lang="scss" scoped>
	@import './rewards-details-container.scss';
</style>

